import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ArrowRight } from 'lucide-react'
import { useWaitlistCount } from '@/hooks/useWaitlistCount'

const testimonials = [
  {
    //name: "Emily",
    name: 'Student',
    location: 'East Village',
    quote:
      "It's hard to save money because prices are so high and I don't know the best options.",
    //quote: "I saved $74 last month just by switching stores.",
    //rating: 5,
  },
  {
    //name: "Jason",
    name: 'Young Professor',
    location: 'NYC',
    quote:
      'Grocery store vs CVS… went back and forth between the two stores to find the best price.',
    //quote: "Eggs for $2.99? That's $5 back in my pocket.",
    //rating: 5,
  },
  {
    //name: "Priya",
    name: 'Entrepreneur',
    location: 'Boston',
    quote:
      "I go to different websites of different stores. I'll ask friends for advice and what they recommend.",
    //quote: "Lumeo makes me feel like I'm winning every grocery trip.",
    // rating: 5,
  },
]

const TestimonialsSection = () => {
  const { count: waitlistCount } = useWaitlistCount()

  return (
    <section id='testimonials' className='py-24 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16 animate-fade-in-up max-w-4xl mx-auto'>
          <h2 className='text-4xl md:text-5xl lg:text-5xl font-bold mb-6 tracking-tight'>
            See why smart shoppers use Lumeo
          </h2>
          <p className='text-xl text-gray-600 mb-12'>
            {/*Join thousands of smart shoppers saving money every week.*/}
            Lumeo powers smart shoppers to save $1000+ a year on groceries.
          </p>

          {/* Social Proof Stats */}
          <div className='grid grid-cols-3 gap-8 mb-16'>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-coral mb-2'>
                $128
              </div>
              <div className='text-sm text-gray-light'>Monthly Savings</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-coral mb-2'>
                {waitlistCount.toLocaleString()}
              </div>
              <div className='text-sm text-gray-light'>Active Savers</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-coral mb-2'>
                {/*4.9★*/} 5 hrs
              </div>
              <div className='text-sm text-gray-light'>
                {/*App Store rating*/}Average Time Saved per Month
              </div>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='feature-card animate-fade-in-up'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className='p-8'>
                {/* Stars 
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-coral fill-coral" />
                  ))}
                </div>*/}

                {/* Quote */}
                <blockquote className='text-lg font-medium text-center mb-6 leading-relaxed'>
                  "{testimonial.quote}"
                </blockquote>

                {/* Profile */}
                <div className='flex items-center justify-center space-x-4'>
                  <div className='w-12 h-12 rounded-full bg-gray-200'></div>
                  <div>
                    <div className='font-semibold'>{testimonial.name}</div>
                    <div className='text-sm text-gray-light'>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='text-center'>
          <p className='text-coral font-semibold text-lg'>
            Tag us with #Lumeo on TikTok to get early access!
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
