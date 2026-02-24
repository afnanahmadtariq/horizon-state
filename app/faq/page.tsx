import { ArrowRight } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            q: "What is the typical timeline for construction?",
            a: "Depending on the chosen layout and customizations, construction typically takes between 8 to 14 months from the day ground is broken."
        },
        {
            q: "Are the homes fully customizable?",
            a: "Yes. While we provide beautifully curated base layouts, every aspect of your home—from finishes to floor plans—can be tailored to your needs."
        },
        {
            q: "How does the buying process work?",
            a: "After an initial consultation, you will select a plot and layout. We secure the design with a deposit, followed by milestone-based payments throughout the build phase."
        },
        {
            q: "Are the communities managed?",
            a: "Yes, all Horizon State estates have a dedicated management team to handle security, landscaping, and the maintenance of communal areas like the wellness hub and market."
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#ff8c42] selection:text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-display tracking-tighter mb-16 text-center md:text-left">
                    FAQ <span className="brand-dot !w-[0.55em] !h-[0.55em]"></span>
                </h1>

                <div className="flex flex-col gap-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-medium mb-4 flex items-start gap-4">
                                <ArrowRight className="text-[#ff8c42] shrink-0 mt-1" size={20} />
                                {faq.q}
                            </h3>
                            <p className="text-gray-400 pl-9 leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center border-t border-white/10 pt-16">
                    <h2 className="text-3xl font-light mb-6">Still have questions?</h2>
                    <a href="/contact" className="btn-primary">
                        Contact Support
                    </a>
                </div>
            </div>
        </main>
    );
}
