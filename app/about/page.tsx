// app/about/page.tsx
import Image from 'next/image'

export default function About() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        BarbasOyun / RedRoc Studio / Fields of interest
                    </p>
                </div>

                {/* Cat Dev Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <Image
                            src="/images/Stremtch_02 - Copy.png"
                            alt="Real Barbas"
                            width={500}
                            height={400}
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">BarbasOyun</h2>
                        <p className="text-gray-600 mb-4">
                            Student, I've played a lot of League and POE <br></br>
                            but also : DRG, Wow, Teardown, Factorio, Shadow of Mordor/War and more
                        </p>
                        <p className="text-gray-600 mb-8">
                            I mainly want to design and program rpg games that use Backend, Server + DB <br></br>
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">RedRoc Studio</h2>
                        <p className="text-gray-600">
                            My Ambition, a Studio that produce specific Games and Tools <br></br>
                            <a href='https://en.wikipedia.org/wiki/Roc_(mythology)' target="_blank" style={{ textDecoration: 'underline' }} className="hover:text-blue-400 transition-colors">Wtf is a Roc?</a>
                        </p>
                    </div>
                </div>

                {/* Fields of Interest */}
                <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Fields of Interest</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Game Design */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Game Design</h4>
                            <p className="text-gray-600">
                                <a href='https://obsidian.md/' target="_blank" style={{ textDecoration: 'underline' }} className="hover:text-blue-400 transition-colors">Obsidian</a> canvas feature is my second brain to take Gamedesign Notes and Prototype concepts <br></br>
                                <br></br>
                                2D notes are better than linear because they allow to define the links between systems
                            </p>
                        </div>
                        {/* UX / Psychology */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">UX / Psychology</h4>
                            <div className="flex flex-col md:flex-row justify-between items-center">
                                <Image
                                    src="/images/brain.png"
                                    alt="Brain"
                                    width={100}
                                    height={100}
                                    className="rounded-2xl shadow-lg mb-8"
                                />
                                <p className="text-gray-600 p-2">
                                    Psychology allow to not design games blindly, which I greatly respect but mostly avoid <br></br>
                                    <br></br>
                                    <a href='https://en.wikipedia.org/wiki/Self-determination_theory' target="_blank" style={{ textDecoration: 'underline' }} className="hover:text-blue-400 transition-colors">Self Determination Theory</a> apreciator
                                </p>
                            </div>
                        </div>
                        {/* Narration */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Narration</h4>
                            <p className="text-gray-600">
                                Especially Personal Narrative and Dynamic Narration concepts <br></br>
                                <br></br>
                                I found the <a href='https://www.youtube.com/watch?v=HZft_U4Fc-U' target="_blank" style={{ textDecoration: 'underline' }} className="hover:text-blue-400 transition-colors">conferences of Jon Ingold</a> to be a great resource
                            </p>
                        </div>
                        {/* Game + Web Dev */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Game + Web Dev</h4>
                            <p className="text-gray-600">
                                The Technical part is an end in it itself but also the tools to build prototypes and games
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}