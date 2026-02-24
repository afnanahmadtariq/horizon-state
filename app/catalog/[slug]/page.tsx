import Link from "next/link";
import PropertyDetailClient from "./PropertyDetailClient";

const allProperties: Record<string, {
    title: string; price: string; layout: string; image: string;
    beds: number; baths: number; sqft: string; lot: string; garage: number;
    desc: string; features: string[];
    gallery: string[];
}> = {
    "the-aspen": {
        title: "The Aspen", price: "$2,400,000", layout: "Layout A", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
        beds: 4, baths: 3, sqft: "3,200", lot: "0.45 acres", garage: 2,
        desc: "The Aspen is a four-bedroom masterpiece that integrates open-concept living with floor-to-ceiling glazing throughout. Positioned on an elevated lot, it captures panoramic valley views from every room. The spacious kitchen features Italian marble countertops and custom cabinetry.",
        features: ["Heated infinity pool", "Home theater room", "Smart home automation", "Wine cellar", "Outdoor kitchen"],
        gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2670&auto=format&fit=crop",
            "/hero-home.png"
        ],
    },
    "the-sierra": {
        title: "The Sierra", price: "$1,850,000", layout: "Layout B", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
        beds: 3, baths: 2, sqft: "2,600", lot: "0.35 acres", garage: 2,
        desc: "The Sierra balances efficiency and elegance. With three generous bedrooms, a chef-grade kitchen, and a wraparound terrace, this home is built for those who value smart design. Natural light floods every corner thanks to strategically placed skylights.",
        features: ["Skylights throughout", "Built-in office", "Radiant floor heating", "Zen garden courtyard", "EV charging station"],
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop",
            "/architecture-exterior.png"
        ],
    },
    "the-ridge": {
        title: "The Ridge", price: "$3,100,000", layout: "Layout C", image: "https://images.unsplash.com/photo-1613490908578-75c3dbbfa13e?q=80&w=2574&auto=format&fit=crop",
        beds: 5, baths: 4, sqft: "4,500", lot: "0.60 acres", garage: 3,
        desc: "Our flagship residence. The Ridge is an expansive five-bedroom estate with a detached guest house, infinity pool, and private trail access. The primary suite occupies the entire upper floor with a spa bathroom and 180-degree mountain views.",
        features: ["Detached guest house", "Private hiking trail", "Infinity edge pool", "Primary suite floor", "Home gym", "3-car heated garage"],
        gallery: [
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2670&auto=format&fit=crop",
            "/variety-layouts.png"
        ],
    },
    "the-valley": {
        title: "The Valley", price: "$1,600,000", layout: "Layout D", image: "https://images.unsplash.com/photo-1627301034444-aefc511bdca9?q=80&w=2670&auto=format&fit=crop",
        beds: 2, baths: 2, sqft: "1,800", lot: "0.25 acres", garage: 1,
        desc: "Perfect for couples or small families, The Valley is a compact luxury retreat. Every square foot has been optimized for comfort and beauty. The open-plan living area flows seamlessly onto a private garden patio surrounded by mature trees.",
        features: ["Private garden patio", "Open-plan living", "Built-in storage", "Energy efficient design", "Outdoor shower"],
        gallery: [
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop",
            "/wellness-hub.png"
        ],
    },
    "the-peak": {
        title: "The Peak", price: "$4,200,000", layout: "Custom", image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop",
        beds: 6, baths: 5, sqft: "5,800", lot: "1.20 acres", garage: 3,
        desc: "The Peak is Horizon State\u2019s ultimate expression of luxury living. Set on over an acre of private land, this fully customizable estate offers unparalleled grandeur. Every detail, from the imported stone facades to the climate-controlled wine vault, speaks to extraordinary craftsmanship.",
        features: ["Fully customizable layout", "Wine vault", "Helicopter pad ready", "Private creek access", "Staff quarters", "Observatory tower", "Underground garage"],
        gallery: [
            "/house-security.png",
            "/flexible-furniture.png",
            "/testimonial-1.png"
        ],
    },
};

export function generateStaticParams() {
    return Object.keys(allProperties).map((slug) => ({ slug }));
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const property = allProperties[slug];

    if (!property) {
        return (
            <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-light mb-6">Property Not Found</h1>
                <Link href="/catalog" className="btn-primary">Back to Catalog</Link>
            </main>
        );
    }

    return <PropertyDetailClient property={property} />;
}
