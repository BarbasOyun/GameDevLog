import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="hover:text-blue-400 transition-colors"><h3 className="text-xl font-bold">Barbas Dev Log</h3></Link>
                        <p className="text-gray-400">Game & Tools Developpement</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <div className="flex space-x-6">
                            <Link href="/about" className="hover:text-blue-400 transition-colors md:mb-2">About</Link>
                            <Link href="/contact" className="hover:text-blue-400 transition-colors md:mb-2">Contact</Link>
                            <Link href="/" className="hover:text-blue-400 transition-colors md:mb-2">Dev Log</Link>
                        </div>
                        <div className="flex space-x-6">
                            <a
                                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
                                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                                href="https://discord.gg/qjU2FjTY"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Discord
                            </a>
                            <a
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Youtube
                            </a>
                            <a
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                            <a
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Reddit
                            </a>
                            <a
                                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tenor
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} RedRoc Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}