import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Loader2, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { insertWaitlistEntry, validateReferralCode, checkEmailExists, type WaitlistEntry } from '@/lib/supabase';
import { toast } from '@/components/ui/sonner';
import { useWaitlistCount } from '@/hooks/useWaitlistCount';
import { waitlistSchema, sanitizeInput } from '@/lib/validation';

const JoinWaitlist = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referralCodeError, setReferralCodeError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const urlReferralCode = searchParams.get('ref') || '';
  const navigate = useNavigate();
  const { count: waitlistCount } = useWaitlistCount();

  // Initialize referral code from URL if present
  useEffect(() => {
    if (urlReferralCode) {
      setReferralCode(urlReferralCode);
    }
  }, [urlReferralCode]);

  const generateReferralCode = () => {
    return 'LUMEO' + Math.floor(Math.random() * 10000);
  };

  const handleReferralCodeChange = (value: string) => {
    setReferralCode(value.toUpperCase());
    if (referralCodeError) {
      setReferralCodeError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setReferralCodeError(null);

    try {
      const formData = {
        email: sanitizeInput(email),
        phone: phone ? sanitizeInput(phone) : undefined,
        referralCode: referralCode ? sanitizeInput(referralCode) : undefined,
      };

      const validationResult = waitlistSchema.safeParse(formData);
      if (!validationResult.success) {
        const firstError = validationResult.error.errors[0];
        if (firstError.path.includes('referralCode')) {
          setReferralCodeError(`❌ ${firstError.message}`);
        } else {
          toast(firstError.message, { duration: 4000 });
        }
        setIsSubmitting(false);
        return;
      }

      const validatedData = validationResult.data;

      const emailExists = await checkEmailExists(validatedData.email);
      if (emailExists) {
        toast("This email is already on our waitlist. You're all set!", {
          duration: 4000,
        });
        setIsSubmitting(false);
        return;
      }

      if (validatedData.referralCode) {
        const isValidReferral = await validateReferralCode(validatedData.referralCode);
        if (!isValidReferral) {
          setReferralCodeError('❌ Invalid referral code. Please check and try again.');
          setIsSubmitting(false);
          return;
        }
      }

      const myReferralCode = generateReferralCode();

      const waitlistEntry: WaitlistEntry = {
        email: validatedData.email.toLowerCase(),
        phone: validatedData.phone,
        referral_source: document.referrer || 'direct',
        referral_code: validatedData.referralCode?.toUpperCase(),
        my_referral_code: myReferralCode
      };

      await insertWaitlistEntry(waitlistEntry);

      localStorage.setItem('lumeo_waitlist_joined', 'true');

      navigate('/waitlist-confirmation', {
        state: {
          email: validatedData.email,
          phone: validatedData.phone,
          referralCode: myReferralCode
        }
      });
    } catch (error) {
      console.error('Error submitting waitlist entry:', error);
      const errorMessage = error instanceof Error ? error.message : 'There was an error joining the waitlist. Please try again.';
      toast(errorMessage, {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join the Lumeo Waitlist
            </h1>
            <p className="text-xl text-gray-light">
              Be among the first to experience the future of social finance
            </p>
          </div>

          <Card className="shadow-lg border border-border">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Get Early Access</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referral">Referral Code (Optional)</Label>
                  <Input
                    id="referral"
                    type="text"
                    value={referralCode}
                    onChange={(e) => handleReferralCodeChange(e.target.value)}
                    placeholder="Enter referral code"
                    className={`h-12 ${referralCodeError ? 'border-red-500' : ''}`}
                  />
                  {referralCodeError && (
                    <p className="text-sm text-red-600 font-medium">
                      {referralCodeError}
                    </p>
                  )}
                  {!referralCode && !referralCodeError && (
                    <p className="text-sm text-muted-foreground">
                      Have a friend's referral code? Enter it to earn bonus points!
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-coral to-coral/80 text-coral-foreground hover:from-coral/90 hover:to-coral/70 text-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Join Now'
                  )}
                </Button>

                {/* Privacy Policy Message */}
                <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                  By signing up, you agree to our{' '}
                  <a href="#" className="underline">Terms of Service</a> and{' '}
                  <a href="/privacy" className="underline">Privacy Policy</a>.{' '}
                  No commitment. Cancel anytime.
                </p>

                <div className="text-center pt-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>{waitlistCount.toLocaleString()} users</strong> on the waitlist
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Exclusive access to Lumeo
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JoinWaitlist;