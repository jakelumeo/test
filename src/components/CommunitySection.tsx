import { Button } from '@/components/ui/button'
import { useWaitlistCount } from '@/hooks/useWaitlistCount'
import { ArrowRight, Users, TrendingUp, Trophy } from 'lucide-react'

const CommunitySection = () => {
  const { count: waitlistCount } = useWaitlistCount()

  return (
    <section id='community' className='py-24 bg-muted/30'>
      <div className='container mx-auto px-2'>
        <div className='text-center max-w-6xl mx-auto my-24'>
          <div className='animate-fade-in-up'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight'>
              Never Check Multiple Stores Again.
            </h2>
            <p className='text-xl text-gray-600 mb-12 max-w-4xl mx-auto'>
              Grocery shopping shouldn’t mean opening five tabs or driving to
              multiple stores. Lumeo Finance brings the best prices into one
              view so you always know where to shop.
            </p>
          </div>
          {/* Image Placeholders */}
          <div className='grid grid-cols-2 gap-8 max-w-6xl mx-auto mt-12'>
            <div className='aspect-square bg-gray-200 rounded-xl shadow-lg'></div>
            <div className='aspect-square bg-gray-200 rounded-xl shadow-lg'></div>
          </div>
          {/* 
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <div
              className='text-center animate-fade-in-up'
              style={{ animationDelay: '0.1s' }}
            >
              <div className='w-16 h-16 mx-auto bg-coral/10 rounded-2xl flex items-center justify-center mb-4'>
                <Users className='h-8 w-8 text-coral' />
              </div>
              <h3 className='text-3xl font-bold mb-2'>
                {waitlistCount.toLocaleString()}+
              </h3>
              <p className='text-gray-light'>Active Savers</p>
            </div>

            <div
              className='text-center animate-fade-in-up'
              style={{ animationDelay: '0.2s' }}
            >
              <div className='w-16 h-16 mx-auto bg-coral/10 rounded-2xl flex items-center justify-center mb-4'>
                <TrendingUp className='h-8 w-8 text-coral' />
              </div>
              <h3 className='text-3xl font-bold mb-2'>$150K+</h3>
              <p className='text-gray-light'>Total Saved</p>
            </div>

            <div
              className='text-center animate-fade-in-up'
              style={{ animationDelay: '0.3s' }}
            >
              <div className='w-16 h-16 mx-auto bg-coral/10 rounded-2xl flex items-center justify-center mb-4'>
                <Trophy className='h-8 w-8 text-coral' />
              </div>
              <h3 className='text-3xl font-bold mb-2'>12</h3>
              <p className='text-gray-light'>Neighborhoods</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
