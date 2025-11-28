'use client'

import Image from 'next/image'

interface GitHubImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean;
  className?: string
}

export default function GitHubImage({ src, alt, width, height, fill, className }: GitHubImageProps) {
  // Get base path from environment variable
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  // Prepend basePath to src in production
  const imageSrc = process.env.NODE_ENV === 'production'
    ? `${basePath}${src}`
    : src

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      unoptimized={true} // Required for static export
    />
  )
}