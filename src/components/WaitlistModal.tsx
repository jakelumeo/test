import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { X, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { insertWaitlistEntry, checkEmailExists, type WaitlistEntry } from '@/lib/supabase';
import { toast } from '@/components/ui/sonner';
import lumeoLogo from '@/assets/lumeo-logo.png';
import welcomeToLumeo from '@/assets/welcome-to-lumeo-sc.png';
import savingsReportSc from '@/assets/savings-report-sc.png';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const generateReferralCode = () => {
    return 'LUMEO' + Math.floor(Math.random() * 10000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if email already exists in waitlist
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        // Mark user as having joined the waitlist
        localStorage.setItem('lumeo_waitlist_joined', 'true');

        toast("This email is already on our waitlist. You're all set!", {
          duration: 4000,
        });
        onClose();
        setIsSubmitting(false);
        return;
      }

      const myReferralCode = generateReferralCode();

      const waitlistEntry: WaitlistEntry = {
        email: email.toLowerCase(),
        referral_source: document.referrer || 'direct',
        my_referral_code: myReferralCode
      };

      await insertWaitlistEntry(waitlistEntry);

      localStorage.setItem('lumeo_waitlist_joined', 'true');

      // Close modal first
      onClose();

      // Navigate to confirmation page with the data
      navigate('/waitlist-confirmation', {
        state: {
          email,
          referralCode: myReferralCode
        }
      });
    } catch (error) {
      console.error('Error submitting waitlist entry:', error);
      toast('There was an error joining the waitlist. Please try again.', {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 bg-white border-0 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6">
          {/* Header with logo */}
          <DialogHeader className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <img src={lumeoLogo} alt="Lumeo" className="h-6 w-auto" />
            </div>
          </DialogHeader>

          {/* Phone mockups */}
          <div className="flex justify-center items-center space-x-3 mb-4">
            <img
              src={welcomeToLumeo}
              alt="Welcome to Lumeo"
              className="w-20 h-auto rounded-xl shadow-lg"
            />
            <div className="text-coral text-sm">→</div>
            <img
              src={savingsReportSc}
              alt="Savings Report"
              className="w-20 h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Headline */}
          <h2 className="text-xl font-bold text-center mb-4 text-gray-900">
            Get Early Access
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-10 text-center"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 bg-coral hover:bg-coral/90 text-white font-semibold disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                'Join Waitlist'
              )}
            </Button>
          </form>

          {/* Subtext */}
          <p className="text-xs text-gray-500 text-center mt-3 leading-relaxed">
            Be the first to know when we launch! No spam, just updates.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
