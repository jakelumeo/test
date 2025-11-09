import { useRouter } from 'next/router'
import { Calendar, Clock } from 'lucide-react'

interface BlogPreviewProps {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  slug: string
  category?: string
}

const BlogPreview = ({
  title,
  excerpt,
  image,
  date,
  readTime,
  slug,
  category,
}: BlogPreviewProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/blog/${slug}`)
  }

  return (
    <div
      onClick={handleClick}
      className='bg-card rounded-lg shadow-soft overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
        />
        {category && (
          <span className='absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold'>
            {category}
          </span>
        )}
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors'>
          {title}
        </h3>

        <p className='text-gray-light text-sm mb-4 line-clamp-3'>{excerpt}</p>

        <div className='flex items-center gap-4 text-xs text-gray-light'>
          <div className='flex items-center gap-1'>
            <Calendar className='h-3 w-3' />
            <span>{date}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='h-3 w-3' />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPreview
