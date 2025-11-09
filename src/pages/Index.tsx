import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'
import LogoCarousel from '@/components/LogoCarousel'
import FAQ from '../components/FAQ'
import EmptyComponent from '@/components/EmptyComponent'

const Index = () => {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <Navigation />
      <HeroSection />
      <EmptyComponent />
      <LogoCarousel />
      <CommunitySection />
      <TestimonialsSection />
      <FeaturesSection />
      <FAQ />
      <Footer />
    </main>
  )
}

export default Index
