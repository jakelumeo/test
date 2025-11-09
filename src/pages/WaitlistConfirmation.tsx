import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Mail, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import CelebrationAnimation from '@/components/CelebrationAnimation';
import { useState, useEffect } from 'react';

const WaitlistConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCelebration, setShowCelebration] = useState(false);
  
  // Get data from the navigation state (passed from JoinWaitlist component)
  const stateData = location.state as {
    email?: string;
    phone?: string;
    promoCode?: string;
    referralCode?: string;
  } | null;
  
  const email = stateData?.email || '';
  const referralCode = stateData?.referralCode || 'LUMEO123'; // fallback

  // Start celebration animation when component mounts
  useEffect(() => {
    setShowCelebration(true);
  }, []);
  
  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast("Copied! Your referral code is ready to share.", {
      duration: 3000,
    });
  };

  const shareUrl = `https://lumeofinance.com/waitlist?ref=${referralCode}`;

  const socialShares = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=Join me on the Lumeo waitlist! Use my code ${referralCode} to get started: ${shareUrl}`,
      icon: '𝕏'
    },
    {
      name: 'Instagram',
      url: `https://instagram.com`,
      icon: '📷'
    },
    {
      name: 'TikTok', 
      url: `https://tiktok.com`,
      icon: '🎵'
    },
    {
      name: 'LinkedIn',
      url: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: '💼'
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ✅ You're In! 🎉
            </h1>
            {email && (
              <p className="text-lg text-muted-foreground mb-2">
                Welcome <span className="text-foreground font-medium">{email}</span>
              </p>
            )}
            <p className="text-xl text-gray-light max-w-2xl mx-auto">
              You're now on the Lumeo waitlist! Here's your unique referral code — share it with friends to earn rewards and move up the list.
            </p>
          </div>

          <Card className="shadow-lg border border-border">
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Referral Code Block */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">
                    Your Personal Referral Code
                  </h2>
                  <p className="text-gray-light mb-6">
                    Share this code with friends. Each signup earns you 1,135 points toward exclusive rewards!
                  </p>

                  {/* Referral Code Box */}
                  <div className="bg-gradient-to-r from-coral/10 to-coral/5 p-6 rounded-lg border-2 border-coral/30 mb-6">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex flex-col items-center">
                        <Input
                          value={referralCode}
                          readOnly
                          className="text-center text-2xl font-bold bg-background h-14 max-w-xs border-coral/30"
                        />
                        <p className="text-sm text-muted-foreground mt-2">Your unique code</p>
                      </div>
                      <Button
                        onClick={copyReferralCode}
                        size="lg"
                        className="h-14 px-6 bg-coral hover:bg-coral/90 text-coral-foreground"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground">
                      Share URL: <code className="bg-muted px-2 py-1 rounded text-xs">{shareUrl}</code>
                    </p>
                  </div>
                </div>

                {/* How to Refer Steps */}
                <div>
                  <h3 className="text-xl font-bold mb-4">How to Refer:</h3>
                  <ol className="space-y-3 text-left">
                    <li className="flex items-start space-x-3">
                      <span className="bg-coral text-coral-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                      <span>Copy your referral code</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-coral text-coral-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                      <span>Text or DM it to a friend</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-coral text-coral-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                      <span>Tell them to sign up at lumeofinance.com/waitlist</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-coral text-coral-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                      <span>They enter your code during signup</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-coral text-coral-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                      <span>You earn 1,135 points when they join</span>
                    </li>
                  </ol>
                </div>

                {/* Email notification */}
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                  <Mail className="h-4 w-4" />
                  <span>We'll email you when your points have been added.</span>
                </div>

                {/* Social Sharing */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-center">Share with friends:</h3>
                  <div className="flex justify-center space-x-4">
                    {socialShares.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center text-xl transition-colors"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Back to Home CTA */}
                <div className="text-center pt-4">
                  <Button
                    onClick={() => navigate('/')}
                    variant="outline"
                    size="lg"
                    className="px-8"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <CelebrationAnimation 
        isActive={showCelebration} 
        onComplete={() => setShowCelebration(false)} 
      />
    </main>
  );
};

export default WaitlistConfirmation;