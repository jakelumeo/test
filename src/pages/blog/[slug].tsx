import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getBlogBySlug, BLOGS, BlogData } from '@/constants/blogs';

interface BlogContentProps {
    blog: BlogData | null;
}

const BlogContent = ({ blog }: BlogContentProps) => {
    const router = useRouter();

    const blogData = blog;

    if (!blogData) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navigation />
                <div className="container mx-auto max-w-4xl px-6 py-24 text-center">
                    <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
                    <p className="text-gray-light mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
                    <Button onClick={() => router.push('/blog')} className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blogs
                    </Button>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <>
            {/* SEO Head */}
            <Head>
                <title>{`${blogData.header} | Lumeo Blog`}</title>
                <meta name="description" content={blogData.subheader} />
                <meta name="keywords" content={`${blogData.category}, saving money, grocery shopping, Lumeo blog`} />
                <link rel="canonical" href={`https://lumeofinance.com/blog/${blogData.slug}`} />
            </Head>

            <main className="min-h-screen bg-background text-foreground">
                <Navigation />

                {/* Back Button */}
                <section className="pt-24 pb-6 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <Button
                            onClick={() => router.push('/blog')}
                            variant="ghost"
                            className="mb-4 text-gray-light hover:text-foreground"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Blogs
                        </Button>
                    </div>
                </section>

                {/* Hero Section */}
                <section className="pb-12 px-6">
                    <div className="container mx-auto max-w-4xl">
                        {/* Category Badge */}
                        <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            {blogData.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {blogData.header}
                        </h1>

                        {/* Subheader */}
                        <p className="text-xl text-gray-light mb-6">
                            {blogData.subheader}
                        </p>

                        {/* Meta Information */}
                        <div className="flex items-center gap-6 text-sm text-gray-light mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{blogData.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{blogData.readTime}</span>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="rounded-lg overflow-hidden shadow-soft mb-12">
                            <img
                                src={blogData.image}
                                alt={blogData.header}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Blog Sections */}
                {blogData.sections.map((section, index) => (
                    <section
                        key={index}
                        className={`py-12 px-6 ${index % 2 === 0 ? 'bg-muted' : ''}`}
                    >
                        <div className="container mx-auto max-w-4xl">
                            <h2 className="text-3xl font-bold mb-4">
                                {section.header}
                            </h2>

                            <p className="text-lg text-gray-light mb-6">
                                {section.subheader}
                            </p>

                            <div className="bg-card p-6 rounded-lg shadow-soft mb-6">
                                <ul className="space-y-3">
                                    {section.bulletPoints.map((point, pointIndex) => (
                                        <li key={pointIndex} className="text-gray-light flex items-start">
                                            <span className="text-primary font-bold mr-3">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-gray-light leading-relaxed">
                                {section.footer}
                            </p>
                        </div>
                    </section>
                ))}

                {/* Blog Footer */}
                <section className="py-12 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-card p-8 rounded-lg shadow-soft">
                            <p className="text-lg text-gray-light leading-relaxed mb-6">
                                {blogData.footer}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={() => router.push('/waitlist')}
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                                >
                                    Join the Waitlist
                                </Button>
                                <Button
                                    onClick={() => router.push('/blog')}
                                    variant="outline"
                                    className="font-semibold"
                                >
                                    Read More Articles
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = BLOGS.map((blog) => ({
        params: { slug: blog.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<BlogContentProps> = async ({ params }) => {
    const blog = getBlogBySlug(params?.slug as string);

    if (!blog) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            blog,
        },
    };
};

export default BlogContent;
