import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

export default function Catalog() {
    const properties = [
        { title: "The Aspen", price: "$2,400,000", layout: "A - 4 Beds, 3 Baths", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" },
        { title: "The Sierra", price: "$1,850,000", layout: "B - 3 Beds, 2.5 Baths", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" },
        { title: "The Ridge", price: "$3,100,000", layout: "C - 5 Beds, 4 Baths", image: "https://images.unsplash.com/photo-1613490908578-75c3dbbfa13e?q=80&w=2574&auto=format&fit=crop" },
        { title: "The Valley", price: "$1,600,000", layout: "D - 2 Beds, 2 Baths", image: "https://images.unsplash.com/photo-1627301034444-aefc511bdca9?q=80&w=2670&auto=format&fit=crop" },
        { title: "The Peak", price: "$4,200,000", layout: "Custom - 6+ Beds", image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop" }
    ];

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#ff8c42] selection:text-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-display tracking-tighter mb-16 text-center md:text-left">
                    AVAILABLE <span className="brand-dot !w-[0.55em] !h-[0.55em]"></span>
                </h1>

                {/* Search Bar */}
                <div className="flex bg-white/5 border border-white/10 rounded-full px-6 py-4 items-center gap-4 mb-16 max-w-md w-full">
                    <Search size={20} className="text-gray-400" />
                    <input type="text" placeholder="Search layouts, pricing, locations..." className="bg-transparent flex-1 outline-none text-white text-sm" />
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="w-full h-80 relative rounded-[30px] overflow-hidden mb-6 border border-white/10 group-hover:border-white/40 transition-colors">
                                <Image
                                    src={prop.image}
                                    alt={prop.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div>
                                        <span className="text-sm bg-white/20 text-white backdrop-blur-md px-3 py-1 rounded-full mb-2 inline-block">
                                            {prop.layout}
                                        </span>
                                        <h3 className="text-2xl font-medium">{prop.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="text-gray-400 text-lg">{prop.price}</span>
                                <button className="text-[#ff8c42] flex items-center gap-2 text-sm font-medium group-hover:underline underline-offset-4">
                                    View Details <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
