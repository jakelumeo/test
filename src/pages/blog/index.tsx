import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogPreview from '@/components/BlogPreview'
import { BLOGS } from '@/constants/blogs'

const Blogs = () => {
  return (
    <>
      {/* ✅ Proper Next.js Head */}
      <Head>
        <title>Lumeo Blog | Smart Saving Tips, Finance Insights & Community Stories</title>
        <meta
          name='description'
          content='Explore the Lumeo blog for expert tips on saving money, grocery shopping hacks, social finance insights, and stories from our community of smart savers.'
        />
        <meta
          name='keywords'
          content='saving money tips, grocery shopping hacks, social finance blog, AI shopping insights, Gen Z finance, fintech blog, Lumeo community'
        />
        <link rel='canonical' href='https://lumeofinance.com/blogs' />
      </Head>

      <main className='min-h-screen bg-background text-foreground'>
        <Navigation />

        {/* Hero Section */}
        <section className='pt-36 pb-12 px-6'>
          <div className='container mx-auto max-w-6xl text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              The <span className='text-primary'>Lumeo Finance</span> Blog
            </h1>
            <p className='text-xl text-gray-light max-w-2xl mx-auto'>
              Smart saving tips, finance insights, and stories from our
              community of savvy shoppers
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className='py-12 px-6 pb-20'>
          <div className='container mx-auto max-w-6xl'>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
              {BLOGS.map((blog, index) => (
                <BlogPreview
                  key={index}
                  title={blog.header}
                  excerpt={blog.excerpt}
                  image={blog.image}
                  date={blog.date}
                  readTime={blog.readTime}
                  slug={blog.slug}
                  category={blog.category}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default Blogs
