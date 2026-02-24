"use client";

export default function Contact() {
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
                            <p>hello@horizonstate.com</p>
                            <p>+1 (555) 019-3382</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-white/5 border border-white/10 p-10 rounded-[30px]">
                    <h2 className="text-2xl font-light mb-8">Send a Message</h2>
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                            <span className="text-gray-500 text-sm">01</span>
                            <input type="text" placeholder="Full Name" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" />
                        </div>
                        <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                            <span className="text-gray-500 text-sm">02</span>
                            <input type="email" placeholder="Email Address" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" />
                        </div>
                        <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                            <span className="text-gray-500 text-sm">03</span>
                            <input type="tel" placeholder="Phone Number" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" />
                        </div>
                        <div className="border-b border-white/30 pb-2 flex items-start mt-4 gap-3 focus-within:border-white transition-colors">
                            <span className="text-gray-500 text-sm mt-1">04</span>
                            <textarea placeholder="How can we help you?" rows={4} className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600 resize-none"></textarea>
                        </div>

                        <button className="bg-white text-black px-8 py-4 rounded-full font-medium transition-all hover:bg-gray-200 mt-6 mt-8">
                            Submit Request
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-4">We usually respond within 24 business hours.</p>
                    </form>
                </div>
            </div>
        </main>
    );
}
