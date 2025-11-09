import { useEffect, useState } from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const Privacy = () => {
  const [htmlContent, setHtmlContent] = useState<string>('')

  useEffect(() => {
    // Fetch the privacy.html file content
    fetch('/privacy.html')
      .then((response) => response.text())
      .then((html) => setHtmlContent(html))
      .catch((error) => console.error('Error loading privacy policy:', error))
  }, [])

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Privacy Policy | Lumeo - Protecting Your Data</title>
        <meta
          name='description'
          content="Lumeo's privacy policy explains how we collect, use, and protect your personal information when using our social finance app."
        />
        <meta
          name='keywords'
          content='privacy policy, data protection, Lumeo privacy, fintech privacy, user data security'
        />
        <link rel='canonical' href='https://lumeofinance.com/privacy' />
      </Head>

      <main className='min-h-screen bg-background text-foreground'>
        <Navigation />

        <div className='pt-24 pb-16'>
          <div className='container mx-auto max-w-5xl px-6'>
            {htmlContent ? (
              <div
                className='privacy-policy-content'
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            ) : (
              <div className='flex justify-center items-center h-64'>
                <div className='text-gray-500'>Loading privacy policy...</div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

export default Privacy
