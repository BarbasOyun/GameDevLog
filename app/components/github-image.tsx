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
  // Get Image Path Based on Environment
  const imageSrc = process.env.NODE_ENV === 'production' ? `/GameDevLog${src}` : src

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