import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
import { useWaitlistCount } from '@/hooks/useWaitlistCount'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter()
  const { count: waitlistCount } = useWaitlistCount()

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'What is Lumeo?',
      answer:
        'Lumeo is a social finance app that helps you save money on groceries and everyday shopping. We turn saving money into a social experience by letting you scan receipts, compare prices across stores, and share savings with your community. Think of it as your personal finance AI that makes saving money feel like a game.',
    },
    {
      question: 'Who is Lumeo built for?',
      answer: 'Lumeo is built for everyday locals in Lower Manhattan of NYC.',
    },
    {
      question: 'How does Lumeo save me money on groceries?',
      answer:
        'Lumeo uses AI to scan your grocery receipts and instantly compare prices across stores near you. We show you exactly how much you could have saved by shopping at different stores, help you find the cheapest groceries in your area, and send you alerts when your favorite items go on sale. Our finance AI learns your shopping patterns to maximize your savings.',
    },
    {
      question: 'Where is Lumeo Finance currently available?',
      answer:
        "Lumeo Finance is currently only available in the East Village, but we're working hard to bring our services to all of New York City.",
    },
  ]

  return (
    <>
      <main className='min-h-screen bg-background text-foreground'>
        <section className='pt-36 pb-16 px-6'>
          <div className='container mx-auto max-w-4xl'>
            {/* Header */}
            <header className='text-center mb-16'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                Frequently Asked Questions
              </h1>
              <p className='text-xl text-gray-light max-w-2xl mx-auto'>
                Everything you need to know about Lumeo, the social finance app
                that helps you save money on groceries and everyday shopping.
              </p>
            </header>

            {/* FAQ Accordion */}
            <div className='space-y-4'>
              {faqs.map((faq, index) => (
                <article
                  key={index}
                  className='border border-border rounded-lg overflow-hidden bg-card'
                  itemScope
                  itemType='https://schema.org/Question'
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted transition-colors duration-200'
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h2
                      className='text-lg font-semibold text-foreground pr-4'
                      itemProp='name'
                    >
                      {faq.question}
                    </h2>
                    {openIndex === index ? (
                      <ChevronUp className='h-5 w-5 text-primary flex-shrink-0' />
                    ) : (
                      <ChevronDown className='h-5 w-5 text-gray-light flex-shrink-0' />
                    )}
                  </button>

                  {openIndex === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className='px-6 pt-4 pb-4 animate-fade-in'
                      itemScope
                      itemType='https://schema.org/Answer'
                    >
                      <div
                        className='text-gray-light leading-relaxed'
                        itemProp='text'
                      >
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <section className='text-center mt-16 p-8 bg-muted rounded-lg'>
              <h2 className='text-2xl font-bold mb-4'>
                Ready to Start Saving Money?
              </h2>
              {/* <p className='text-gray-light mb-6'>
                Join over {waitlistCount.toLocaleString()} users on our waitlist
                and get early access to Lumeo.
              </p> */}
              <Button
                onClick={() =>
                  router.push(
                    'https://apps.apple.com/us/app/lumeo-social-finance/id6747216538'
                  )
                }
                size='lg'
                className='bg-primary text-primary-foreground hover:bg-primary/90 font-semibold'
              >
                Download Lumeo Now
              </Button>
            </section>
          </div>
        </section>
      </main>
    </>
  )
}

export default FAQ
