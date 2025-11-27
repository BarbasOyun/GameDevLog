'use client';

import { useState } from 'react';
import { BlogPost } from '../lib/log-utils';
import BlogCard from './blog-card';
import BlogLightbox from './blog-lightbox';

interface LogWindowProps {
    key: string;
    category: string;
    initialBlogs: BlogPost[];
    limit: number;
    currentPage: number;
}

export default function LogWindow({
    key,
    category,
    initialBlogs,
    limit,
    currentPage
}: LogWindowProps) {
    const totalPages = Math.ceil(initialBlogs.length / limit)

    const findCurrentBlogs = (page: number): BlogPost[] => {
        var startIndex = (page - 1) * limit;
        var endIndex = startIndex + limit;
        return initialBlogs.slice(startIndex, endIndex)
    };

    const [blogs, setBlogs] = useState<BlogPost[]>(findCurrentBlogs(currentPage));
    const [currentPageState, setCurrentPageState] = useState(currentPage);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handlePageChange = async (newPage: number) => {
        setIsLoading(true);
        try {
            setBlogs(findCurrentBlogs(newPage))
            setCurrentPageState(newPage);
        } catch (error) {
            console.error('Failed to fetch blogs:', error);
        }
        setIsLoading(false);
    };

    const handleCardClick = (blog: BlogPost) => {
        setSelectedBlog(blog);
        setIsLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedBlog(null);
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col h-96 w-[33vw] max-w-[1200px] h-[100vh] max-h-[1500px]">
                {/* Header */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 rounded-t-lg">
                    <h3 className="text-lg font-semibold text-gray-800 capitalize flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {category} Blogs
                        <span className="text-sm text-gray-500 font-normal ml-2">
                            ({initialBlogs.length} posts)
                        </span>
                    </h3>
                </div>

                {/* Blogs Container with Scroll */}
                <div className="flex-1 overflow-y-auto p-4">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-32">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p>No blogs found in {category}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {blogs.map((blog) => (
                                <BlogCard
                                    key={blog.id}
                                    blog={blog}
                                    onCardClick={handleCardClick}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 rounded-b-lg">
                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => handlePageChange(currentPageState - 1)}
                                disabled={currentPageState === 1 || isLoading}
                                className="px-3 py-1 text-sm border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 flex items-center gap-1 text-gray-500"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </button>

                            <span className="text-sm text-gray-600">
                                Page {currentPageState} of {totalPages}
                            </span>

                            <button
                                onClick={() => handlePageChange(currentPageState + 1)}
                                disabled={currentPageState === totalPages || isLoading}
                                className="px-3 py-1 text-sm border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 flex items-center gap-1 text-gray-500"
                            >
                                Next
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <BlogLightbox
                blog={selectedBlog}
                isOpen={isLightboxOpen}
                onClose={handleCloseLightbox}
            />
        </>
    );
}