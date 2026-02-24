"use client";

import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setSubmitted(true);
    };

    const handleReset = () => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#ff8c42] selection:text-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 mt-10">
                <div className="w-full md:w-1/2">
                    <h1 className="text-5xl md:text-7xl font-display tracking-tighter mb-8 leading-none">
                        GET IN<br />TOUCH <span className="brand-dot !w-[0.55em] !h-[0.55em]"></span>
                    </h1>

                    <div className="flex flex-col gap-10 mt-16 text-gray-400">
                        <div>
                            <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-widest">Office Location</h3>
                            <p>25A State Boulevard</p>
                            <p>Lake Tahoe, NV, 89449</p>
                        </div>

                        <div>
                            <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-widest">Inquiries</h3>
                            <a href="mailto:hello@horizonstate.com" className="block hover:text-white transition-colors">hello@horizonstate.com</a>
                            <a href="tel:+15550193382" className="block hover:text-white transition-colors">+1 (555) 019-3382</a>
                        </div>

                        <div>
                            <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-widest">Business Hours</h3>
                            <p>Mon — Fri: 9:00 AM — 6:00 PM</p>
                            <p>Sat: 10:00 AM — 4:00 PM</p>
                            <p>Sun: By Appointment</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-white/5 border border-white/10 p-10 rounded-[30px]">
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-8">
                                    <Check size={40} className="text-green-400" />
                                </div>
                                <h2 className="text-3xl font-light mb-4">Message Sent!</h2>
                                <p className="text-gray-400 mb-8">Thank you for reaching out. Our team will get back to you within 24 business hours.</p>
                                <button onClick={handleReset} className="text-[#ff8c42] underline underline-offset-4 font-medium hover:text-[#ffb078] transition-colors">
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <h2 className="text-2xl font-light mb-8">Send a Message</h2>
                                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                    <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                                        <span className="text-gray-500 text-sm">01</span>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={form.name}
                                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                                            className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600"
                                            required
                                        />
                                    </div>
                                    <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                                        <span className="text-gray-500 text-sm">02</span>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            value={form.email}
                                            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                                            className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600"
                                            required
                                        />
                                    </div>
                                    <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                                        <span className="text-gray-500 text-sm">03</span>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number (optional)"
                                            value={form.phone}
                                            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                                            className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="border-b border-white/30 pb-2 flex items-start mt-4 gap-3 focus-within:border-white transition-colors">
                                        <span className="text-gray-500 text-sm mt-1">04</span>
                                        <textarea
                                            placeholder="How can we help you?"
                                            rows={4}
                                            value={form.message}
                                            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                                            className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600 resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-white text-black px-8 py-4 rounded-full font-medium transition-all hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] mt-8"
                                    >
                                        Submit Request
                                    </button>
                                    <p className="text-xs text-gray-500 text-center mt-2">We usually respond within 24 business hours.</p>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
