"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MapPin, Ruler, BedDouble, Bath, Trees, Car } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PropertyDetailClient({ property }: {
    property: {
        title: string; price: string; layout: string;
        beds: number; baths: number; sqft: string; lot: string; garage: number;
        desc: string; features: string[];
        gallery: string[];
    }
}) {
    const [activeImg, setActiveImg] = useState(0);

    return (
        <main className="min-h-screen pt-28 pb-24 selection:bg-[#ff8c42] selection:text-white">
            {/* Back */}
            <div className="px-6 md:px-12 mb-8">
                <Link href="/catalog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <ArrowLeft size={16} /> Back to Catalog
                </Link>
            </div>

            {/* Gallery */}
            <div className="px-6 md:px-12 mb-12">
                <div className="w-full h-[500px] relative rounded-[40px] overflow-hidden">
                    <Image src={property.gallery[activeImg]} alt={property.title} fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0c0c] to-transparent"></div>
                </div>
                <div className="flex gap-4 mt-4">
                    {property.gallery.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveImg(i)}
                            className={`w-24 h-16 relative rounded-xl overflow-hidden border-2 transition-all ${i === activeImg ? "border-[#ff8c42] opacity-100" : "border-transparent opacity-50 hover:opacity-80"}`}
                        >
                            <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Details */}
            <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="text-sm bg-white/10 text-gray-300 px-4 py-1.5 rounded-full mb-6 inline-block">{property.layout}</span>
                        <h1 className="text-5xl md:text-7xl font-display tracking-tighter mb-4">{property.title}</h1>
                        <p className="text-3xl text-[#ff8c42] font-light mb-10">{property.price}</p>

                        {/* Specs */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12 border-y border-white/10 py-8">
                            <div className="flex items-center gap-3"><BedDouble size={20} className="text-gray-500" /><span>{property.beds} Bedrooms</span></div>
                            <div className="flex items-center gap-3"><Bath size={20} className="text-gray-500" /><span>{property.baths} Bathrooms</span></div>
                            <div className="flex items-center gap-3"><Ruler size={20} className="text-gray-500" /><span>{property.sqft} sq ft</span></div>
                            <div className="flex items-center gap-3"><Trees size={20} className="text-gray-500" /><span>{property.lot}</span></div>
                            <div className="flex items-center gap-3"><Car size={20} className="text-gray-500" /><span>{property.garage}-Car Garage</span></div>
                            <div className="flex items-center gap-3"><MapPin size={20} className="text-gray-500" /><span>Lake Tahoe, NV</span></div>
                        </div>

                        <h2 className="text-2xl font-medium mb-4">About This Property</h2>
                        <p className="text-gray-400 leading-relaxed mb-12">{property.desc}</p>

                        <h2 className="text-2xl font-medium mb-6">Key Features</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {property.features.map((f, i) => (
                                <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5">
                                    <Check size={18} className="text-[#ff8c42] shrink-0" />
                                    <span className="text-gray-300">{f}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar CTA */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 bg-white/5 border border-white/10 rounded-[30px] p-8">
                        <h3 className="text-xl font-medium mb-2">Interested in {property.title}?</h3>
                        <p className="text-gray-500 text-sm mb-8">Schedule a private viewing or request more information.</p>
                        <Link href="/contact" className="btn-primary w-full justify-center mb-4">
                            Schedule a Visit
                        </Link>
                        <Link href="/contact" className="btn-secondary w-full justify-center">
                            Ask a Question
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
