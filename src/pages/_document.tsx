import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Favicon */}
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/favicon.png' />

        {/* Meta */}
        <meta name='author' content='Lumeo Finance' />
        <meta
          name='keywords'
          content='budgeting app, grocery savings, AI finance, social finance, money saving, grocery prices, budget tracker'
        />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/favicon.png' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@lumeo' />
        <meta name='twitter:image' content='/favicon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
