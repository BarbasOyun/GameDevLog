import Image from 'next/image';
import { getAllCategories, getAllBlogsByCategory } from './lib/log-utils';
import LogWindow from './components/log-window';
import ScrollToButton from './components/scroll-button'
import GitHubImage from './components/github-image';

export default async function Home() {
    const categories = getAllCategories();

    const categoryData = await Promise.all(
        categories.map(async (category) => {
            const data = await getAllBlogsByCategory(category);
            return {
                category,
                blogs: data,
                currentPage: 1
            };
        })
    );

    return (
        <div>
            {/* Hero Section with Background Image */}
            <section className="relative h-screen">
                <GitHubImage
                    src="/images/RedRoc_05.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Game Dev Log
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-400 mb-2">
                            BarbasOyun
                        </p>
                        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-400">
                            Design Hypothesis, Prototypes and Technical Logs
                        </p>
                        <ScrollToButton
                            targetId="logs"
                            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                        >
                            See Posts
                        </ScrollToButton>
                    </div>
                </div>
            </section>

            {/* Warnings */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Warnings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-gray-50 p-6 rounded-lg text-gray-600">
                                <h3 className="text-xl font-semibold mb-2">High Level of doubt</h3>
                                <p>For simplicity I will make afirmations <br></br>
                                    (Especially in Design Hypothesis) <br></br>
                                    but this is not academic research <br></br>
                                    <br></br>
                                    I try to include link to academic papers / resources when possible</p>
                            </div>
                            <GitHubImage
                                src="/images/Let-Him-Cook.png"
                                alt="let him cook"
                                width={100}
                                height={100}
                                className="rounded-lg w-full h-auto w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Logs */}
                <div id='logs' className="min-h-screen p-6">
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

                        {categories.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No blog categories found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}