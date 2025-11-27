import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const LOGS_DIRECTORY = path.join(process.cwd(), 'logs');

export interface BlogPost {
    id: string;
    title: string;
    content: string;
    category: string;
    date: string;
    excerpt: string;
    image: string;
    author?: string;
    tags?: string[];
}

export async function getBlogPost(category: string, id: string): Promise<BlogPost | null> {
    try {
        const filePath = path.join(LOGS_DIRECTORY, category, `${id}.md`);

        if (!fs.existsSync(filePath)) {
            return null;
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
            id,
            title: data.title || id,
            content,
            category,
            date: data.date || fs.statSync(filePath).birthtime.toISOString(),
            excerpt: data.excerpt || content.slice(0, 150) + '...',
            image: data.image || `/images/blogs/default-${category}.jpg`,
            author: data.author, // || 'System',
            tags: data.tags || []
        };
    } catch (error) {
        console.error('Error reading blog post:', error);
        return null;
    }
}

export async function getBlogsByCategory(category: string, page: number = 1, limit: number = 10): Promise<{
    blogs: BlogPost[];
    totalPages: number;
    currentPage: number;
}> {
    const categoryPath = path.join(LOGS_DIRECTORY, category);

    if (!fs.existsSync(categoryPath)) {
        return { blogs: [], totalPages: 0, currentPage: 1 };
    }

    if (Number.isNaN(page))
    {
        page = 1
    }

    const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'))
        .sort((a, b) => b.localeCompare(a));

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedFiles = files.slice(startIndex, endIndex);

    const blogs = await Promise.all(
        paginatedFiles.map(async (file) => {
            const id = file.replace('.md', '');
            const blog = await getBlogPost(category, id);
            return blog!;
        })
    );

    const totalPages = Math.ceil(files.length / limit);

    return {
        blogs: blogs.filter(blog => blog !== null),
        totalPages,
        currentPage: page
    };
}

export async function getAllBlogsByCategory(category: string): Promise<BlogPost[]> {
    const categoryPath = path.join(LOGS_DIRECTORY, category);

    if (!fs.existsSync(categoryPath)) {
        return [];
    }

    const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'))
        .sort((a, b) => b.localeCompare(a));

    const blogs = await Promise.all(
        files.map(async (file) => {
            const id = file.replace('.md', '');
            const blog = await getBlogPost(category, id);
            return blog!;
        })
    );

    return blogs.filter(blog => blog !== null);
}

export function getAllCategories(): string[] {
    if (!fs.existsSync(LOGS_DIRECTORY)) return [];

    return fs.readdirSync(LOGS_DIRECTORY)
        .filter(item =>
            fs.statSync(path.join(LOGS_DIRECTORY, item)).isDirectory()
        );
}