import { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../index.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lumeo Finance – AI Budgeting App for Groceries, Expenses & Social Finance</title>
        <meta
          name='description'
          content="Save smarter with Lumeo Finance. AI-powered budgeting app to discover where you're overspending on groceries and find the cheapest prices. Plan your next grocery trip and see how you stack up against thousands of other savers."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className={inter.className}>
            <Toaster />
            <Sonner />
            <Component {...pageProps} />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  )
}
