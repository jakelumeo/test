import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Users, Target, Lightbulb, Heart } from 'lucide-react'

import jakePhoto from '@/assets/jake-photo.jpeg'
import ericPhoto from '@/assets/eric-photo.jpg'
import evanPhoto from '@/assets/evan-photo.jpg'

const About = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>About Lumeo | Social Finance App Making Saving Money a Social Flex</title>
        <meta
          name='description'
          content="Learn about Lumeo's mission to turn saving money into a social experience. We're building the future of fintech with AI-powered grocery savings and community-driven finance tools."
        />
        <meta
          name='keywords'
          content='social finance app, save money fast, fintech startup, AI for shopping, Gen Z finance tools, community savings app, Lumeo team, mission'
        />
        <link rel='canonical' href='https://lumeofinance.com/about' />

        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Lumeo',
            description:
              'Social finance app that helps you save money on groceries and everyday shopping',
            url: 'https://lumeofinance.com',
            logo: 'https://lumeofinance.com/logo.png',
            foundingDate: '2024',
            industry: 'Financial Technology',
            keywords:
              'social finance, AI shopping, community savings, fintech startup',
          })}
        </script>
      </Head>

      <main className='min-h-screen bg-background text-foreground'>
        <Navigation />

        {/* Hero Section */}
        <section className='pt-36 pb-16 px-6'>
          <div className='container mx-auto max-w-4xl text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              We're Making Saving Money a{' '}
              <span className='text-primary'>Social Flex</span>
            </h1>
            <p className='text-xl text-gray-light max-w-2xl mx-auto mb-8'>
              Lumeo is the social finance app that turns your everyday grocery
              shopping into a community-powered savings game. Because saving
              money should feel as good as spending it.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className='py-16 px-6 bg-muted'>
          <div className='container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12'>
            <div className='md:w-1/2'>
              <Target className='h-12 w-12 text-primary mb-4' />
              <h2 className='text-3xl font-bold mb-6'>Our Mission</h2>
              <p className='text-gray-light leading-relaxed mb-4'>
                We believe saving money should be social, fun, and effortless.
                Traditional personal finance apps are boring and isolating.
                We're building a <strong>social finance app</strong> that makes
                saving money feel like leveling up in your favorite game.
              </p>
              <p className='text-gray-light leading-relaxed'>
                Our AI-powered platform helps you{' '}
                <strong>save money fast</strong> on groceries while connecting
                you with a community of smart savers. Every receipt scan, every
                price comparison, every dollar saved becomes part of your
                financial flex.
              </p>
            </div>
            <div className='md:w-1/2'>
              <div className='bg-card p-8 rounded-lg shadow-soft'>
                <h3 className='text-xl font-semibold mb-4'>
                  Why Social Finance?
                </h3>
                <ul className='space-y-3 text-gray-light'>
                  <li>
                    • <strong>Community saves more:</strong> Shared tips and
                    group buying power
                  </li>
                  <li>
                    • <strong>Gamified experience:</strong> Points, badges, and
                    leaderboards
                  </li>
                  <li>
                    • <strong>Peer motivation:</strong> See how friends are
                    crushing their savings goals
                  </li>
                  <li>
                    • <strong>Transparency:</strong> Real data, real savings,
                    real results
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className='py-16 px-6'>
          <div className='container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12'>
            <div className='md:w-1/2 order-2 md:order-1'>
              <div className='bg-card p-8 rounded-lg shadow-soft'>
                <h3 className='text-xl font-semibold mb-4'>
                  The Problem We're Solving
                </h3>
                <div className='space-y-4 text-gray-light'>
                  <p>
                    <strong>$2,000+</strong> Average amount families overspend
                    on groceries annually
                  </p>
                  <p>
                    <strong>73%</strong> of Gen Z feels overwhelmed by personal
                    finance
                  </p>
                  <p>
                    <strong>0</strong> Fun, social ways to save money (until
                    now)
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 order-1 md:order-2'>
              <Lightbulb className='h-12 w-12 text-primary mb-4' />
              <h2 className='text-3xl font-bold mb-6'>Our Story</h2>
              <p className='text-gray-light leading-relaxed mb-4'>
                It started with a simple frustration: Why is saving money so
                boring and lonely? Our founding team, fresh out of college and
                drowning in grocery bills, realized that traditional{' '}
                <strong>personal finance tools</strong> felt like homework.
              </p>
              <p className='text-gray-light leading-relaxed mb-4'>
                We wanted something different. Something that felt more like
                TikTok than TurboTax. A <strong>fintech startup</strong> that
                understood that <strong>Gen Z finance tools</strong> needed to
                be social, visual, and actually fun to use.
              </p>
              <p className='text-gray-light leading-relaxed'>
                So we built Lumeo: <strong>AI for shopping</strong> that doesn't
                just save you money—it makes saving money your new favorite
                hobby.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className='py-16 px-6 bg-muted'>
          <div className='container mx-auto max-w-4xl text-center'>
            <Users className='h-12 w-12 text-primary mx-auto mb-4' />
            <h2 className='text-3xl font-bold mb-6'>Meet the Team</h2>
            <p className='text-gray-light max-w-2xl mx-auto mb-12'>
              We're a small but mighty team of fintech entrepreneurs, AI
              engineers, and design obsessives who believe technology should
              make life better—and more fun.
            </p>

            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  photo: jakePhoto,
                  name: 'Jake Lenef',
                  role: 'Co-Founder & CEO',
                  school: 'MBA @BU',
                  bio: 'Ran a 30-person semiconductor operation with over 50 inspection machines. Took the factory from 50% yield to over 80% yield and full profitability in less than a month.',
                },
                {
                  photo: ericPhoto,
                  name: 'Eric Bell',
                  role: 'Co-Founder & CTO',
                  school: 'MS CS @MIT',
                  bio: 'MIT alum and former D1 football player who dropped out of grad school to build fast, AI-powered fintech — shipping two full-stack trading apps in under 3 weeks.',
                },
                {
                  photo: evanPhoto,
                  name: 'Evan Chen',
                  role: 'Co-Founder & CPO',
                  school: 'BA CS @UPENN',
                  bio: 'Ex-CTO of a consumer software startup and Angel at Hustle Fund, blends product leadership, growth strategy, and venture discipline to drive Lumeo’s go-to-market.',
                },
              ].map((member) => (
                <div key={member.name} className='text-center'>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    className='w-20 h-20 rounded-full mx-auto mb-4 object-cover'
                    width={80}
                    height={80}
                  />
                  <h3 className='font-semibold mb-2'>{member.name}</h3>
                  <p className='text-sm text-gray-light mb-1'>{member.role}</p>
                  <p className='text-xs text-gray-light mb-3'>
                    {member.school}
                  </p>
                  <p className='text-xs text-gray-light'>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community First */}
        <section className='py-16 px-6'>
          <div className='container mx-auto max-w-4xl text-center'>
            <Heart className='h-12 w-12 text-primary mx-auto mb-4' />
            <h2 className='text-3xl font-bold mb-6'>Community First</h2>

            <div className='grid md:grid-cols-2 gap-8 mb-12'>
              <div className='bg-card p-6 rounded-lg shadow-soft'>
                <h3 className='text-xl font-semibold mb-4'>
                  Built With You, Not For You
                </h3>
                <p className='text-gray-light leading-relaxed'>
                  Every feature in Lumeo comes from real user feedback. Our{' '}
                  <strong>community savings app</strong> is shaped by the people
                  who use it. We host weekly feedback sessions, run beta tests
                  with our most engaged users, and iterate based on what
                  actually helps people save money.
                </p>
              </div>
              <div className='bg-card p-6 rounded-lg shadow-soft'>
                <h3 className='text-xl font-semibold mb-4'>
                  Transparency Always
                </h3>
                <p className='text-gray-light leading-relaxed'>
                  We share our roadmap publicly, explain our AI algorithms in
                  plain English, and never hide fees or monetization strategies.
                  If we make money, it's because we're genuinely helping you
                  save money. That's the deal.
                </p>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                onClick={() =>
                  window.open(
                    'https://www.reddit.com/user/lumeoFinance/',
                    '_blank'
                  )
                }
                size='lg'
                className='bg-primary text-primary-foreground hover:bg-primary/90 font-semibold'
              >
                Join Our Community
              </Button>
              <Button
                onClick={() => router.push('/faq')}
                variant='outline'
                size='lg'
                className='font-semibold'
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default About
