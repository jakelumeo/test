import dynamic from 'next/dynamic'

// Lazy-load react-icons / lucide-react icons
const TikTokIcon = dynamic(
  () => import('react-icons/si').then((mod) => mod.SiTiktok),
  { ssr: false }
)
const InstagramIcon = dynamic(
  () => import('lucide-react').then((mod) => mod.Instagram),
  { ssr: false }
)
const TwitterIcon = dynamic(
  () => import('lucide-react').then((mod) => mod.Twitter),
  { ssr: false }
)
const LinkedinIcon = dynamic(
  () => import('lucide-react').then((mod) => mod.Linkedin),
  { ssr: false }
)

const Footer = () => {
  const socialLinks = {
    tiktok: 'https://www.tiktok.com/@lumeofinance',
    instagram: 'https://www.instagram.com/lumeofinance/',
    x: 'https://x.com/lumeofinance',
    linkedin: 'https://www.linkedin.com/company/lumeofinanace/',
  }
  return (
    <footer className='bg-muted/30 border-t border-border'>
      <div className='container mx-auto px-6 py-16'>
        <div className='grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto'>
          {/* Resources */}
          <div className='space-y-4 flex flex-col justify-end'>
            <h4 className='font-semibold'>Resources</h4>
            <div className='flex flex-col space-y-2'>
              <a
                href='/privacy'
                className='text-gray-light hover:text-coral transition-colors duration-200'
              >
                Privacy Policy
              </a>
              <a
                href='/terms'
                className='text-gray-light hover:text-coral transition-colors duration-200'
              >
                Terms of Service
              </a>
              <a
                href='/contact'
                className='text-gray-light hover:text-coral transition-colors duration-200'
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-border mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto'>
            <p className='text-gray-muted text-sm'>
              © 2025 Lumeo Finance. All rights reserved. Built in NYC.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4'>
              {/* Social Icons */}
              <div className='flex space-x-4'>
                <a
                  href={socialLinks.tiktok}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-light hover:text-coral transition-colors duration-200'
                >
                  <TikTokIcon className='h-5 w-5' />
                </a>
                <a
                  href={socialLinks.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-light hover:text-coral transition-colors duration-200'
                >
                  <InstagramIcon className='h-5 w-5' />
                </a>
                <a
                  href={socialLinks.x}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-light hover:text-coral transition-colors duration-200'
                >
                  <TwitterIcon className='h-5 w-5' />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-light hover:text-coral transition-colors duration-200'
                >
                  <LinkedinIcon className='h-5 w-5' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
