import Image from 'next/image';
import GitHubImage from '../components/github-image';

interface CustomMarkdownProps {
    content: string;
    className?: string;
}

export default function CustomMarkdown({ content, className = '' }: CustomMarkdownProps) {
    // Split content into lines and process each one
    const renderContent = (text: string) => {
        const lines = text.split('\n');

        return lines.map((line, index) => {
            // Handle empty lines (preserve spaces)
            if (line.trim() === '') {
                return <div key={index} className="h-4" />; // Preserve vertical space
            }

            // Handle images: ![alt text](image-url)
            const imageMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
            if (imageMatch) {
                const [, altText, imageUrl] = imageMatch;
                return (

                    <div key={index} className="my-4">
                        <div className='relative' style={{
                            width: '50%',
                            maxWidth: `${600}px`,
                            height: 'auto'
                        }}>
                            <GitHubImage
                                src={imageUrl}
                                alt={altText || 'Markdown image'}
                                width={400}
                                height={300}
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                        {altText && (
                            <p className="text-center text-sm text-gray-600 mt-2 italic">
                                {altText}
                            </p>
                        )}
                    </div>
                );
            }

            // Handle headings (lines that start with #)
            if (line.trim().startsWith('#')) {
                const headingLevel = line.trim().split(' ')[0].length;
                const headingText = line.trim().substring(headingLevel).trim();

                switch (headingLevel) {
                    case 1:
                        return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-6">{headingText}</h1>;
                    case 2:
                        return <h2 key={index} className="text-2xl font-bold text-gray-800 mb-3 mt-5">{headingText}</h2>;
                    case 3:
                        return <h3 key={index} className="text-xl font-semibold text-gray-700 mb-2 mt-4">{headingText}</h3>;
                    default:
                        return <h4 key={index} className="text-lg font-semibold text-gray-600 mb-2 mt-3">{headingText}</h4>;
                }
            }

            // Handle lists (lines that start with - or *)
            if (line.trim().startsWith('-') || line.trim().startsWith('*')) {
                const listItem = line.trim().substring(1).trim();
                return (
                    <div key={index} className="flex items-start mb-1 ml-4">
                        <span className="text-gray-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{listItem}</span>
                    </div>
                );
            }

            // Handle code blocks (basic detection)
            if (line.trim().startsWith('```')) {
                return (
                    <div key={index} className="bg-gray-100 border border-gray-300 rounded p-3 my-2 font-mono text-sm">
                        {line.trim().substring(3)}
                    </div>
                );
            }

            // Regular paragraphs with preserved spacing
            return (
                <p key={index} className="text-gray-700 mb-3 leading-relaxed whitespace-pre-wrap">
                    {line}
                </p>
            );
        });
    };

    return (
        <div className={`markdown-content ${className}`}>
            {renderContent(content)}
        </div>
    );
}