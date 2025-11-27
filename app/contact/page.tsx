import Image from 'next/image';

export default function Home() {
    return (
        <main className="relative h-screen w-full overflow-hidden">
            <Image
                src="/images/RedRoc_05.png"
                alt="Background"
                fill
                quality={100}
                priority
                sizes="100vw"
                className="object-cover"
            />

            { }
            <div className="relative z-10 flex h-full items-center justify-center p-8">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                        Contact : barbasoyun@gmail.com
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-gray-400">
                        tbh discord is better to contact me
                    </p>
                </div>
            </div>
        </main>
    );
}