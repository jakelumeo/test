import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, MessageSquare, MapPin, Clock } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description:
          "Thanks for reaching out. We'll get back to you within 24 hours.",
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <main className='min-h-screen bg-background text-foreground'>
        <Navigation />

        {/* Hero Section */}
        <section className='pt-36 pb-12 px-6 bg-muted/30'>
          <div className='container mx-auto max-w-4xl text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Get in Touch
            </h1>
            <p className='text-lg text-gray-light max-w-2xl mx-auto'>
              Have questions about Lumeo? Want to partner with us? We'd love to
              hear from you. Drop us a line!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className='py-16 px-6'>
          <div className='container mx-auto grid md:grid-cols-2 gap-12 max-w-6xl'>
            {/* Contact Form */}
            <div>
              <h2 className='text-2xl font-semibold mb-2 flex items-center gap-2'>
                <MessageSquare className='h-5 w-5 text-coral' />
                Send us a message
              </h2>
              <p className='text-sm text-muted-foreground mb-6'>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Name *</Label>
                    <Input
                      id='name'
                      name='name'
                      type='text'
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder='Your full name'
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email *</Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='your@email.com'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='subject'>Subject *</Label>
                  <Input
                    id='subject'
                    name='subject'
                    type='text'
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='message'>Message *</Label>
                  <Textarea
                    id='message'
                    name='message'
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder='Tell us more about how we can help...'
                    className='min-h-[120px]'
                  />
                </div>

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-coral text-coral-foreground hover:bg-coral/90 h-12'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Let's connect</h2>
              <p className='text-sm text-muted-foreground mb-6'>
                We're building the future of social finance, and we want you to
                be part of it. Whether you're a potential user, investor, or
                just curious about what we're up to, we're always excited to
                chat.
              </p>

              {/* Contact Cards */}
              <div className='grid grid-cols-2 gap-4'>
                <div className='p-4 rounded-lg border border-border bg-card'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Mail className='h-4 w-4 text-coral' />
                    <span className='font-medium'>Email us</span>
                  </div>
                  <p className='text-xs text-muted-foreground mb-2'>
                    Drop us a line anytime
                  </p>
                  <a
                    href='mailto:hello@lumeofinance.com'
                    className='text-coral hover:text-coral/80 font-medium'
                  >
                    hello@lumeofinance.com
                  </a>
                </div>

                <div className='p-4 rounded-lg border border-border bg-card'>
                  <div className='flex items-center gap-2 mb-2'>
                    <MessageSquare className='h-4 w-4 text-coral' />
                    <span className='font-medium'>Join our community</span>
                  </div>
                  <p className='text-xs text-muted-foreground mb-2'>
                    Connect with other Lumeo users
                  </p>
                  <a
                    href='#'
                    className='text-coral hover:text-coral/80 font-medium'
                  >
                    Discord Community
                  </a>
                </div>

                <div className='p-4 rounded-lg border border-border bg-card'>
                  <div className='flex items-center gap-2 mb-2'>
                    <MapPin className='h-4 w-4 text-coral' />
                    <span className='font-medium'>Built in NYC</span>
                  </div>
                  <p className='text-xs text-muted-foreground'>
                    New York City, NY
                    <br />
                    The financial capital of the world
                  </p>
                </div>

                <div className='p-4 rounded-lg border border-border bg-card'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Clock className='h-4 w-4 text-coral' />
                    <span className='font-medium'>Response time</span>
                  </div>
                  <p className='text-xs text-muted-foreground'>
                    We typically respond within
                    <br />
                    24 hours on business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Contact
