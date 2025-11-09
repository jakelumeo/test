import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { waitlistSchema } from '@/lib/validation'
import { checkEmailExists, insertWaitlistEntry } from '@/lib/supabase'
import { Input } from './ui/input'
import { ZodError } from 'zod'

const HeroSection = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{
    type: 'error' | 'success'
    text: string
  } | null>(null)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = waitlistSchema.pick({ email: true }).parse({ email })
      setLoading(true)
      const emailExists = await checkEmailExists(result.email);
      if (emailExists) {
        setMessage({
          type: 'success',
          text: 'You’ve been added to the waitlist!',
        })
        return;
      }
      await insertWaitlistEntry({
        email: result.email,
      })
      setEmail('')
      setMessage({
        type: 'success',
        text: 'You’ve been added to the waitlist!',
      })
    } catch (err) {
      if (err instanceof ZodError) {
        setMessage({ type: 'error', text: err.errors[0]?.message || 'Invalid email' })
      } else if (err instanceof Error) {
        setMessage({ type: 'error', text: err.message })
      } else {
        setMessage({
          type: 'error',
          text: 'Something went wrong. Please try again.',
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id='hero'
      className='bg-background min-h-screen flex items-center justify-center pt-20 md:pt-24'
    >
      <div className='container mx-auto px-2 max-w-7xl'>
        <div className='flex flex-col items-center justify-center text-center space-y-8'>
          {/* Social Proof Badge */}
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground'>
            ⭐ Loved by 100+ New Yorkers in Lower Manhattan
          </div>

          {/* Headline */}
          <div className='space-y-6'>
            <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold'>
              Lower Your Grocery Bill. <br />
              <span className='text-gradient-coral'>Instantly.</span>
            </h1>
            <p className='text-sm md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              Lumeo Finance discovers how much you overspend. Scan your receipt.
              Compare stores near you. See how much you could have saved.
            </p>
            <p className='text-sm text-gray-light'>
              📍 We are only available in Lower Manhattan, New York.
            </p>

            <form
              onSubmit={handleEmailSubmit}
              className='flex flex-col sm:flex-row items-center gap-3 justify-center mt-4'
            >
              <div className='w-full flex flex-col items-center'>
                {/* Inline message */}
                {message && (
                  <p
                    className={`mb-2 text-sm font-medium ${message.type === 'error'
                      ? 'text-red-500'
                      : 'text-green-500'
                      }`}
                  >
                    {message.text}
                  </p>
                )}

                <div className='flex flex-col sm:flex-row items-center gap-3'>
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='max-w-sm w-full'
                    required
                  />
                  <Button
                    type='submit'
                    disabled={loading}
                    className='flex items-center gap-2'
                  >
                    {loading ? 'Joining...' : 'Join Waitlist'}
                    {!loading && <ArrowRight size={18} />}
                  </Button>
                </div>
              </div>
            </form>
            {/* Email Waitlist Component*/}
            <p className='text-xs text-gray-light'>
              Don't worry, we wont send you spam!
            </p>
          </div>

          {/* CTA Button */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://apps.apple.com/us/app/lumeo-social-finance/id6747216538"
          aria-label="Download on the App Store"
          className="inline-block"
        >
          <Image
            src={DownloadPicture}
            width={250}
            height={125}
            alt="Button to download the Lumeo Finance app on the App Store"
            priority
          />
        </a>
      </div> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
