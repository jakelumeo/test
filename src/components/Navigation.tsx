import Image from 'next/image'
import Link from 'next/link'
import lumeoLogo from '@/assets/lumeo-logo.png'
import DownloadPicture from '@/assets/download-on-app-store.webp'
import { useState } from 'react'

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Company', href: '/our-story' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border'>
      <div className='container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center space-x-2 flex-shrink-0 z-10'
        >
          <Image src={lumeoLogo} alt='Lumeo' width={32} height={32} priority />
          <span className='text-xl font-bold'>Lumeo Finance</span>
        </Link>

        {/* Desktop Links + Download Button */}
        <div className='hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className='text-gray-light hover:text-foreground transition-colors duration-200 font-medium'
            >
              {link.label}
            </Link>
          ))}

          <a
            href='https://apps.apple.com/us/app/lumeo-social-finance/id6747216538'
            aria-label='Download on the App Store'
          >
            {/* <Image
              src={DownloadPicture}
              alt='Download the Lumeo Finance app'
              width={175}
              height={80}
              priority
            /> */}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className='p-2 rounded-md text-gray-700 hover:text-foreground'
            aria-label='Toggle menu'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className='md:hidden border-t border-border bg-background/95 backdrop-blur-sm'>
          <div className='px-6 py-4 space-y-2'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className='block w-full text-left py-2 text-foreground'
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href='https://apps.apple.com/us/app/lumeo-social-finance/id6747216538'
              className='block mt-4'
              target='_blank'
              rel='noopener noreferrer'
            >
              {/* <Image
                src={DownloadPicture}
                alt='Download the Lumeo Finance app'
                width={175}
                height={80}
              /> */}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
