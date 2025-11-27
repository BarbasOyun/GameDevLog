'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BlogPost } from '../lib/log-utils';
import ReactMarkdown from 'react-markdown';
import CustomMarkdown from './custom-markdown'

interface BlogLightboxProps {
    blog: BlogPost | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function BlogLightbox({ blog, isOpen, onClose }: BlogLightboxProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !blog) return null;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Lightbox content */}
            <div
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with image */}
                <div className="relative h-64 md:h-80">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Header content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                                {blog.category}
                            </span>
                            <span className="text-sm opacity-90">{formatDate(blog.date)}</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{blog.title}</h1>
                        {blog.author && (
                            <p className="text-sm opacity-90">By {blog.author}</p>
                        )}
                    </div>
                </div>

                {/* Blog content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 text-gray-600">
                    <div className="prose prose-lg max-w-none">
                        <CustomMarkdown content={blog.content}
                            className="prose prose-lg max-w-none"></CustomMarkdown>
                    </div>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="font-semibold text-gray-800 mb-3">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            Close
                        </button>
                        <span className="text-sm text-gray-500">
                            {blog.category} • {formatDate(blog.date)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}