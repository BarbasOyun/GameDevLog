'use client';

import Image from 'next/image';
import GitHubImage from './github-image';
import { BlogPost } from '../lib/log-utils';

interface BlogCardProps {
    blog: BlogPost;
    onCardClick: (blog: BlogPost) => void;
}

export default function BlogCard({ blog, onCardClick }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
            onClick={() => onCardClick(blog)}
        >
            {/* Blog Image */}
            <div className="relative h-48 w-full">
                <GitHubImage
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
                        {blog.category}
                    </span>
                </div>
            </div>

            {/* Blog Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-3">
                    <span className="font-medium">{formatDate(blog.date)}</span>
                    {blog.author && (
                        <span>By {blog.author}</span>
                    )}
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                            >
                                #{tag}
                            </span>
                        ))}
                        {blog.tags.length > 3 && (
                            <span className="text-gray-400 text-xs">+{blog.tags.length - 3}</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}