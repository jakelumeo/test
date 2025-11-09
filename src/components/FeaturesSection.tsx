import { Camera, FileText, Trophy, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'
import savingsOnTheWay from '@/assets/savings-on-the-way-cropped.png'
import { useStripeCheckout } from '@/hooks/useStripeCheckout'

const features = [
  {
    icon: Camera,
    title: 'Snap. Upload. Done.',
    description:
      'Upload your grocery list or receipt. We do the heavy lifting in seconds.',
    visual: 'scan',
  },
  {
    icon: FileText,
    title: 'Your Savings, Revealed. ',
    description:
      "Eggs at $2.99 instead of $5.49. Milk $3.29 instead of $4.99. With a few more items, that's $14.27 saved this week.",
    visual: 'report',
  },
  {
    icon: Gift,
    title: 'Founding 100',
    description:
      "Be one of the first 100 users locking in lifetime Premium for just $47. That's normally $99/year. Forever.",
    visual: 'premium',
  },
]

const FeaturesSection = () => {
  const { createCheckout, isCreatingCheckout } = useStripeCheckout()

  const handleFoundingCheckout = () => {
    createCheckout()
  }

  return (
    <section id='features' className='py-24 bg-muted/30'>
      <div className='container mx-auto px-6'>
        <div className='space-y-32 max-w-7xl mx-auto'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
              >
                <div className='w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center'>
                  <feature.icon className='h-8 w-8 text-coral' />
                </div>

                <div className='space-y-4'>
                  <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
                    {feature.title}
                  </h2>

                  <p className='text-xl text-gray-light leading-relaxed max-w-lg'>
                    {feature.description}
                  </p>

                  {feature.cta && (
                    <Button
                      variant='ghost'
                      className='text-coral hover:text-coral hover:bg-coral/10 p-0 h-auto font-semibold text-lg'
                      onClick={
                        feature.cta.includes('Founding 100')
                          ? handleFoundingCheckout
                          : undefined
                      }
                      disabled={
                        feature.cta.includes('Founding 100')
                          ? isCreatingCheckout
                          : false
                      }
                    >
                      {feature.cta.includes('Founding 100') &&
                        isCreatingCheckout
                        ? 'Loading...'
                        : feature.cta}
                    </Button>
                  )}
                </div>
              </div>

              {/* Visual */}
              <div
                className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}
              >
                {feature.visual === 'scan' && (
                  <div className='relative w-full max-w-md'>
                    <div className='aspect-square bg-gray-200 rounded-2xl shadow-lg'></div>
                  </div>
                )}

                {feature.visual === 'report' && (
                  <div className='bg-gradient-to-br from-white to-coral/5 border-2 border-coral/20 rounded-3xl p-10 shadow-2xl max-w-md w-full'>
                    <div className='flex items-center gap-3 mb-8'>

                      <h3 className='text-3xl font-bold text-gray-900'>Savings Report</h3>
                    </div>
                    <div className='space-y-5'>
                      <div className='flex justify-between items-center p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow'>
                        <span className='font-semibold text-gray-700 text-lg'>Eggs (dozen)</span>
                        <div className='text-right'>
                          <div className='text-sm text-gray-400 line-through mb-1'>
                            $5.49
                          </div>
                          <div className='font-bold text-coral text-xl'>$2.99</div>
                        </div>
                      </div>
                      <div className='flex justify-between items-center p-5 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow'>
                        <span className='font-semibold text-gray-700 text-lg'>Milk (1 gal)</span>
                        <div className='text-right'>
                          <div className='text-sm text-gray-400 line-through mb-1'>
                            $4.99
                          </div>
                          <div className='font-bold text-coral text-xl'>$3.29</div>
                        </div>
                      </div>
                      <div className='border-t-2 border-coral/20 pt-6 mt-6'>
                        <div className='flex justify-between items-center bg-coral/10 p-5 rounded-2xl'>
                          <span className='text-2xl font-bold text-gray-900'>Total Saved</span>
                          <span className='text-3xl font-bold text-coral'>$14.27</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {feature.visual === 'leaderboard' && (
                  <div className='bg-card border border-border rounded-3xl p-8 shadow-soft max-w-md'>
                    <h3 className='text-2xl font-bold mb-6'>
                      East Village Leaderboard
                    </h3>
                    <div className='space-y-4'>
                      {[
                        { name: 'Sarah M.', savings: '$127', rank: 1 },
                        { name: 'You', savings: '$89', rank: 2 },
                        { name: 'Mike K.', savings: '$74', rank: 3 },
                      ].map((user, i) => (
                        <div
                          key={i}
                          className='flex items-center justify-between p-3 bg-muted rounded-xl'
                        >
                          <div className='flex items-center gap-3'>
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${user.rank === 1
                                ? 'bg-coral text-white'
                                : 'bg-gray-light text-white'
                                }`}
                            >
                              {user.rank}
                            </div>
                            <span className='font-medium'>{user.name}</span>
                          </div>
                          <span className='font-bold text-coral'>
                            {user.savings}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {feature.visual === 'premium' && (
                  <div className='bg-gradient-coral rounded-3xl p-10 text-white max-w-md w-full'>
                    <h3 className='text-2xl font-bold mb-6'>
                      Founding 100 Perks
                    </h3>
                    <div className='space-y-4'>
                      <div className='flex items-center gap-3'>
                        <div className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                          ✓
                        </div>
                        <span>Unlimited scans</span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                          ✓
                        </div>
                        <span>Direct Access to Founders</span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                          ✓
                        </div>
                        <span>First Access to New Features</span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                          ✓
                        </div>
                        <span>Exclusive Founding Member Badge</span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                          ✓
                        </div>
                        <span>Help Shape Product Roadmap</span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center'>
                          ✓
                        </div>
                        <span>Lifetime Price Protection</span>
                      </div>
                      <Button
                        className='w-full bg-white text-coral hover:bg-white/90 mt-6'
                        onClick={handleFoundingCheckout}
                        disabled={isCreatingCheckout}
                      >
                        {isCreatingCheckout
                          ? 'Loading...'
                          : 'Join the Founding 100'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
