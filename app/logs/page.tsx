import { getAllCategories, getAllBlogsByCategory } from '../lib/log-utils';
import LogWindow from '../components/log-window';

// interface PageProps {
//     searchParams: { [key: string]: string | string[] | undefined };
// }

export default async function LogsPage() { // { searchParams }: PageProps
    const categories = getAllCategories();

    // Fetch data for each category based on URL parameters
    const categoryData = await Promise.all(
        categories.map(async (category) => {
            // const pageParam = await searchParams;
            // var page = typeof pageParam.page === 'string' ? parseInt(pageParam.page) : 1;

            // if (Number.isNaN(page)) {
            //     page = 1
            // }

            const data = await getAllBlogsByCategory(category);
            return {
                category,
                blogs: data,
                currentPage: 1// page
            };
        })
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Logs</h1>

                <div className="min-h-screen bg-gray-100 p-4">
                    <div className="grid grid-cols-2 auto-rows-[50vh] gap-4">
                        {categoryData.map(({ category, blogs, currentPage }) => (
                        <LogWindow
                            key={category}
                            category={category}
                            initialBlogs={blogs}
                            limit={5}
                            currentPage={currentPage}
                        />
                    ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                </div>

                {categories.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No blog categories found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}