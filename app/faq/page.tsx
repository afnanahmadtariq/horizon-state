"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        q: "What is the typical timeline for construction?",
        a: "Depending on the chosen layout and customizations, construction typically takes between 8 to 14 months from the day ground is broken.",
    },
    {
        q: "Are the homes fully customizable?",
        a: "Yes. While we provide beautifully curated base layouts, every aspect of your home\u2014from finishes to floor plans\u2014can be tailored to your needs.",
    },
    {
        q: "How does the buying process work?",
        a: "After an initial consultation, you will select a plot and layout. We secure the design with a deposit, followed by milestone-based payments throughout the build phase.",
    },
    {
        q: "Are the communities managed?",
        a: "Yes, all Horizon State estates have a dedicated management team to handle security, landscaping, and the maintenance of communal areas like the wellness hub and market.",
    },
    {
        q: "What financing options are available?",
        a: "We partner with select lenders who specialize in luxury property financing. We can connect you with advisors who understand the unique needs of high-value real estate purchases.",
    },
    {
        q: "Can I visit a model home before committing?",
        a: "Absolutely. We offer private viewings of our completed model homes by appointment. You can schedule a visit through our contact page or by calling our office directly.",
    },
];

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#ff8c42] selection:text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-display tracking-tighter mb-16 text-center md:text-left">
                    FAQ <span className="brand-dot !w-[0.55em] !h-[0.55em]"></span>
                </h1>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors">
                            <button
                                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                className="w-full text-left p-8 flex items-start gap-4"
                            >
                                <ArrowRight className={`text-[#ff8c42] shrink-0 mt-1 transition-transform ${openIdx === i ? "rotate-90" : ""}`} size={20} />
                                <span className="text-xl font-medium flex-1">{faq.q}</span>
                                <ChevronDown className={`text-gray-500 shrink-0 mt-1 transition-transform ${openIdx === i ? "rotate-180" : ""}`} size={20} />
                            </button>
                            <AnimatePresence>
                                {openIdx === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-400 pl-14 pr-8 pb-8 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center border-t border-white/10 pt-16">
                    <h2 className="text-3xl font-light mb-6">Still have questions?</h2>
                    <Link href="/contact" className="btn-primary">
                        Contact Support
                    </Link>
                </div>
            </div>
        </main>
    );
}
