import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LogoCarousel from '@/components/LogoCarousel'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { useStripeCheckout } from '@/hooks/useStripeCheckout'

const Pricing = () => {
  const router = useRouter()
  const { createCheckout, isCreatingCheckout } = useStripeCheckout()

  const handleFoundingCheckout = () => {
    createCheckout()
  }

  const handleGetStarted = (tier: string) => {
    if (tier === 'founding') {
      createCheckout()
    } else {
      // TODO: Replace with actual App Store URL
      window.open('https://apps.apple.com/us/app/lumeo-social-finance/id6747216538', '_blank')
    }
  }

  return (
    <>
      <Head>
        <title>Pricing | Lumeo Finance - Smart Savings Plans</title>
        <meta
          name='description'
          content='Choose the perfect plan for your saving goals. From free basic scans to unlimited premium features and exclusive Founding 100 lifetime access.'
        />
        <meta
          name='keywords'
          content='Lumeo pricing, grocery savings plans, receipt scanning pricing, premium finance app, founding member'
        />
        <link rel='canonical' href='https://lumeofinance.com/pricing' />
      </Head>

      <main className='min-h-screen bg-background text-foreground'>
        <Navigation />

        {/* Hero Section */}
        <section className='pt-36 pb-12 px-6'>
          <div className='container mx-auto max-w-6xl text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Simple, Transparent <span className='text-primary'>Pricing</span>
            </h1>
            <p className='text-xl text-gray-light max-w-2xl mx-auto'>
              Choose the plan that fits your saving goals. Start free or unlock
              premium features.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className='py-12 px-6 pb-20'>
          <div className='container mx-auto max-w-7xl'>
            <div className='grid md:grid-cols-3 gap-8'>
              {/* Free Tier */}
              <div className='bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-soft hover:shadow-lg transition-shadow'>
                <div className='mb-6'>
                  <h3 className='text-2xl font-bold mb-2 text-gray-900'>Free</h3>
                  <p className='text-gray-600'>Get started with the basics</p>
                </div>

                <div className='mb-8'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-5xl font-bold text-gray-900'>$0</span>
                    <span className='text-gray-600'>/month</span>
                  </div>
                </div>

                <Button
                  onClick={() => handleGetStarted('free')}
                  variant='outline'
                  className='w-full mb-8 font-semibold border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                >
                  Get Started
                </Button>

                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>10 free receipt scans</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Receipt tracking</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Spending insights</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Basic price comparisons</span>
                  </div>
                </div>
              </div>

              {/* Premium Tier - Highlighted */}
              <div className='bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-soft hover:shadow-lg transition-shadow relative'>
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                  Most Popular
                </div>

                <div className='mb-6'>
                  <h3 className='text-2xl font-bold mb-2 text-gray-900'>Premium</h3>
                  <p className='text-gray-600'>
                    Unlimited savings, unlimited scans
                  </p>
                </div>

                <div className='mb-8'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-5xl font-bold text-gray-900'>$11.99</span>
                    <span className='text-gray-600'>/month</span>
                  </div>
                </div>

                <Button
                  onClick={() => handleGetStarted('premium')}
                  variant='outline'
                  className='w-full mb-8 font-semibold border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                >
                  Get Started
                </Button>

                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='font-semibold text-gray-700'>Everything in Free, plus:</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Unlimited receipt scans</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Premium breakdown page</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Advanced analytics</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Premium user badge</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Priority support</span>
                  </div>
                </div>
              </div>

              {/* Founding 100 Tier */}
              <div className='bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-soft hover:shadow-lg transition-shadow relative'>
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                  Limited Offer
                </div>

                <div className='mb-6'>
                  <h3 className='text-2xl font-bold mb-2 text-gray-900'>Founding 100</h3>
                  <p className='text-gray-600'>
                    Lifetime access, exclusive perks
                  </p>
                </div>

                <div className='mb-8'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-5xl font-bold text-gray-900'>$47</span>
                    <span className='text-gray-600'>one-time</span>
                  </div>
                </div>

                <Button
                  onClick={handleFoundingCheckout}
                  disabled={isCreatingCheckout}
                  variant='outline'
                  className='w-full mb-8 font-semibold border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                >
                  {isCreatingCheckout ? 'Loading...' : 'Join the Founding 100'}
                </Button>

                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='font-semibold text-gray-700'>
                      Everything in Premium, plus:
                    </span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Lifetime Premium access</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Direct access to founders</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>First access to new features</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Exclusive Founding Member badge</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Help shape product roadmap</span>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0' />
                    <span className='text-gray-700'>Lifetime price protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <LogoCarousel />

        <Footer />
      </main>
    </>
  )
}

export default Pricing
