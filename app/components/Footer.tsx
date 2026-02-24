import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 md:px-12 pt-20 pb-10 border-t border-white/10 bg-[#0c0c0c] text-[#f0f0f0]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
                <div>
                    <h2 className="text-7xl md:text-[10rem] font-display tracking-tighter leading-none mb-4">
                        HORIZON
                    </h2>
                    <p className="text-gray-400 max-w-sm text-sm md:text-base">
                        Let&apos;s keep in touch — be the first to know what&apos;s coming.
                    </p>
                </div>

                <div className="flex w-full md:w-auto items-end gap-16">
                    <div className="flex flex-col gap-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>

                    <div className="flex flex-col gap-4 text-sm text-gray-500">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/10 pt-6">
                <p>© {new Date().getFullYear()} Horizon State Development. All rights reserved.</p>
                <p>Design inspired by Horizon Grove</p>
            </div>
        </footer>
    );
}
