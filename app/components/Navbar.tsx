"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-[#0c0c0c]/70 border-b border-white/5 text-[#f0f0f0]">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-medium tracking-tight">H<span className="brand-dot"></span>rizon State</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                    <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                    <Link href="/catalog" className="hover:text-white transition-colors">Catalog</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-gray-400 hover:text-white transition-colors">
                        <Search size={20} />
                    </button>
                    <Link href="/contact" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                        Schedule a call
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0c0c0c] pt-24 px-6 flex flex-col gap-6 text-[#f0f0f0]"
                    >
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-gray-400 hover:text-white border-b border-white/10 pb-4 transition-colors">Home</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-gray-400 hover:text-white border-b border-white/10 pb-4 transition-colors">About Us</Link>
                        <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-gray-400 hover:text-white border-b border-white/10 pb-4 transition-colors">FAQ</Link>
                        <Link href="/catalog" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-gray-400 hover:text-white border-b border-white/10 pb-4 transition-colors">Catalog</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-gray-400 hover:text-white border-b border-white/10 pb-4 transition-colors">Contact Us</Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-center bg-white text-black px-6 py-4 rounded-full text-lg font-medium mt-4">
                            Schedule a call
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
