import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#ff8c42] selection:text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-display tracking-tighter mb-12">
                    OUR <span className="brand-dot !w-[0.55em] !h-[0.55em]"></span> VISION
                </h1>

                <div className="w-full h-[400px] relative rounded-[40px] overflow-hidden mb-16">
                    <Image
                        src="/architecture-exterior.png"
                        alt="About Architecture"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-light mb-6">Building the Future of Luxury Living</h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            At Horizon State, we believe that a home is more than just a place to live—it is a sanctuary. We dedicate ourselves to designing environments that foster peace, creativity, and connection with nature.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Founded by industry veterans, our team focuses on integrating cutting-edge sustainable technology with timeless architectural designs. Every project is approached with a commitment to excellence and ecological mindfulness.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="border-l border-[#ff8c42] pl-6">
                            <h3 className="text-xl font-medium mb-2">Sustainable Materials</h3>
                            <p className="text-gray-500 text-sm">We use ethically sourced and recycled materials wherever possible without compromising quality.</p>
                        </div>
                        <div className="border-l border-[#ff8c42] pl-6">
                            <h3 className="text-xl font-medium mb-2">Seamless Integration</h3>
                            <p className="text-gray-500 text-sm">Our designs blur the line between indoor comfort and natural outdoor beauty.</p>
                        </div>
                        <div className="border-l border-[#ff8c42] pl-6">
                            <h3 className="text-xl font-medium mb-2">Long-Term Vision</h3>
                            <p className="text-gray-500 text-sm">Building homes that will last for generations, adapting to future technologies effortlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
