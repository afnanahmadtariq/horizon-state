"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

const testimonials = [
  {
    text: "Sometimes the most valuable things are the ones you don\u2019t notice at first... a house as a sanctuary, quiet, between glasses. This is exactly how our sanctuary is, and is made to feel like yours.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
  },
  {
    text: "Horizon State redefined what home means to our family. The seamless blend of modern architecture with the surrounding landscape is something we never imagined was possible.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    text: "From the first consultation to the day we moved in, everything was handled with precision and care. Our home truly feels like a work of art nestled into nature.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
  },
];

const perks = [
  { label: "VARIETY OF LAYOUTS", image: "/variety-layouts.png" },
  { label: "BUILT-IN WELLNESS HUB", image: "/wellness-hub.png" },
  { label: "24/7 HOUSE SECURITY", image: "/house-security.png" },
  { label: "FLEXIBLE FURNITURE DESIGN", image: "/flexible-furniture.png" },
];

const filters = ["All Layouts", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms", "With Pool", "Guest House"];

const layouts = [
  { name: "Layout A", size: "120m\u00b2", beds: 2, pool: false, guest: false },
  { name: "Layout B", size: "135m\u00b2", beds: 3, pool: true, guest: false },
  { name: "Layout C", size: "150m\u00b2", beds: 4, pool: true, guest: true },
  { name: "Layout D", size: "180m\u00b2", beds: 5, pool: true, guest: true },
];

const docs = [
  { title: "PROPERTY\nPASSPORT", desc: "Official property registration documents including land title, surveyed boundaries, and ownership history." },
  { title: "CERTIFICATE OF\nCONSTRUCTION", desc: "Building permits, structural engineer certifications, and compliance records for all completed phases." },
  { title: "WARRANTY\n& INSURANCE", desc: "Comprehensive 10-year structural warranty and homeowner insurance policy documentation." },
];

export default function Home() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [activePerk, setActivePerk] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [docIdx, setDocIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const nextSlide = useCallback(() => setCarouselIdx((p) => (p + 1) % testimonials.length), []);
  const prevSlide = useCallback(() => setCarouselIdx((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  const filteredLayouts = layouts.filter((l) => {
    if (activeFilter === 0) return true;
    if (activeFilter === 1) return l.beds === 2;
    if (activeFilter === 2) return l.beds === 3;
    if (activeFilter === 3) return l.beds >= 4;
    if (activeFilter === 4) return l.pool;
    if (activeFilter === 5) return l.guest;
    return true;
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <main className="min-h-screen overflow-hidden selection:bg-[#ff8c42] selection:text-white pb-24">

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setVideoOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors" onClick={() => setVideoOpen(false)}>
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <Play size={32} className="text-white ml-1" fill="currentColor" />
                </div>
                <p className="text-gray-400 text-lg">Property Showcase Video</p>
                <p className="text-gray-600 text-sm mt-2">Coming Soon</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 px-6 md:px-12 flex flex-col lg:flex-row items-start lg:items-center min-h-[90vh]">
        <div className="w-full lg:w-1/2 z-10 pt-10 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display leading-[0.85] tracking-tighter"
          >
            H<span className="brand-dot !w-[0.55em] !h-[0.55em]"></span>RIZON<br />STATE
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 max-w-md"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              welcome to<br />horizon state
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              A unique experience in living and building timeless views, creating a space you&apos;ll want to call home. A place where nature and modern architecture combine perfectly.
            </p>

            <Link href="/catalog" className="btn-primary group">
              View Catalog
              <div className="bg-black text-white rounded-full p-1 border border-black group-hover:bg-white group-hover:text-black group-hover:border-black transition-colors">
                <ArrowRight size={16} />
              </div>
            </Link>
          </motion.div>

          <div className="mt-16 flex items-center gap-10 border-t border-white/10 pt-8 max-w-md">
            <div>
              <p className="text-sm text-gray-500 mb-1">Architecture by</p>
              <p className="font-medium">Studio C, Inc.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Located in</p>
              <p className="font-medium">Lake Tahoe, NV</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-[60%] h-[50vh] lg:h-[80vh] absolute bottom-0 right-0 lg:right-[-5%] overflow-hidden rounded-t-[40px] lg:rounded-l-[40px] mt-12 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10 lg:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent z-10 hidden lg:block"></div>
          <Image
            src="https://images.unsplash.com/photo-1613490908578-75c3dbbfa13e?q=80&w=2574&auto=format&fit=crop"
            alt="Horizon State Modern Home"
            fill
            className="object-cover object-bottom"
            priority
          />

          {/* Video Play Button */}
          <button
            onClick={() => setVideoOpen(true)}
            className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 z-20 flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <div className="bg-white text-black p-3 rounded-full">
              <Play size={20} fill="currentColor" />
            </div>
            <span className="pr-4 font-medium text-sm">Play video</span>
          </button>
        </motion.div>
      </section>

      {/* SPACE THAT INSPIRES */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tight"
          >
            SPACE<br />THAT <span className="brand-dot"></span> INSPIRES
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[450px] relative rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop"
              alt="Architecture"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light leading-snug mb-16 max-w-lg"
            >
              A unique experience in living and timeless views, creating a space <span className="brand-dot"></span> you&apos;ll love to call home.
            </motion.p>

            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-display tracking-tighter">
                HORIZON<br />STATE
              </h2>
              <Link href="/catalog" className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/5 hover:border-white/40 transition-all">
                <span className="text-xs uppercase tracking-widest text-center">View<br />Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 md:px-12 border-y border-white/10 my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 pr-8">
            <p className="text-sm text-gray-500 mb-6">Current phase:</p>
            <div className="w-full bg-white/10 h-1 mb-2">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "75%" }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-[#ff8c42] h-full relative">
                <span className="absolute -top-6 right-0 text-xs">75%</span>
              </motion.div>
            </div>
            <div className="w-full bg-white/10 h-1">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "25%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="bg-white h-full relative">
                <span className="absolute -top-6 right-0 text-xs">25%</span>
              </motion.div>
            </div>
          </div>

          <Link href="/catalog" className="border-r border-white/10 px-8 flex flex-col justify-center hover:bg-white/5 transition-colors rounded-xl">
            <h3 className="text-6xl font-light mb-2">10+</h3>
            <p className="text-sm text-gray-500">Current available homes</p>
          </Link>

          <div className="border-b md:border-b-0 md:border-r border-white/10 px-8 flex flex-col justify-center pb-8 md:pb-0">
            <h3 className="text-6xl font-light mb-2">95%</h3>
            <p className="text-sm text-gray-500">Project sold out</p>
          </div>

          <Link href="/about" className="px-8 flex flex-col justify-center relative hover:bg-white/5 transition-colors rounded-xl">
            <h3 className="text-6xl font-light mb-2">200+</h3>
            <p className="text-sm text-gray-500">Happy families in the woods</p>
            <div className="absolute top-2 right-4 text-gray-600">
              <ArrowRight size={24} className="rotate-45" />
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="px-6 md:px-12 py-10 relative">
        <div className="w-full h-[600px] relative rounded-[40px] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={testimonials[carouselIdx].image}
                alt="Testimonial"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={carouselIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl font-light max-w-2xl leading-relaxed mt-auto mb-10"
              >
                &ldquo;{testimonials[carouselIdx].text}&rdquo;
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/70 transition-colors">
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/70 transition-colors">
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCarouselIdx(i)} className={`w-2 h-2 rounded-full transition-colors ${i === carouselIdx ? "bg-white" : "bg-white/30 hover:bg-white/60"}`} />
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none -translate-y-1/2 mt-40 mix-blend-overlay opacity-20 z-0">
          <h2 className="text-[12rem] whitespace-nowrap font-display tracking-tighter text-white/40">
            LIVE ABOVE THE REST
          </h2>
        </div>
      </section>

      {/* Perks Section */}
      <section className="bg-white text-black py-32 px-6 md:px-12 mt-32 rounded-t-[60px] relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">Benefits</p>
          <h2 className="text-5xl md:text-6xl font-light mb-8">
            THE PERKS<br />OF LIVING <span className="brand-dot"></span> <span className="italic text-gray-400">in harmony<br />with nature</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            {perks.map((perk, i) => (
              <button
                key={i}
                onClick={() => setActivePerk(i)}
                className={`flex items-center justify-between py-6 border-b cursor-pointer transition-all text-left ${i === activePerk ? "border-black" : "border-gray-200 hover:border-gray-400"}`}
              >
                <span className={`text-lg font-medium transition-colors ${i === activePerk ? "text-black" : "text-gray-400"}`}>{perk.label}</span>
                <ArrowRight size={20} className={`transition-all ${i === activePerk ? "text-black translate-x-1" : "text-gray-300"}`} />
              </button>
            ))}
          </div>

          <div className="relative h-[400px] rounded-full overflow-hidden shrink-0 border-8 border-white shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePerk}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={perks[activePerk].image}
                  alt={perks[activePerk].label}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="flex flex-col gap-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePerk}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activePerk === 0 && (
                  <div><Check className="text-black mb-4" size={24} /><h4 className="font-bold text-xl mb-3">Customization</h4><p className="text-gray-500 leading-relaxed">Choose from multiple floor plans or modify existing ones to perfectly fit your lifestyle needs.</p></div>
                )}
                {activePerk === 1 && (
                  <div><Check className="text-black mb-4" size={24} /><h4 className="font-bold text-xl mb-3">Wellness Facilities</h4><p className="text-gray-500 leading-relaxed">On-site spa, fitness center, and meditation gardens designed to nurture your mind and body daily.</p></div>
                )}
                {activePerk === 2 && (
                  <div><Check className="text-black mb-4" size={24} /><h4 className="font-bold text-xl mb-3">Smart Security</h4><p className="text-gray-500 leading-relaxed">AI-powered surveillance, biometric entry, and a dedicated on-site security team for total peace of mind.</p></div>
                )}
                {activePerk === 3 && (
                  <div><Check className="text-black mb-4" size={24} /><h4 className="font-bold text-xl mb-3">Bespoke Interiors</h4><p className="text-gray-500 leading-relaxed">Work with our in-house designers to create furniture configurations that adapt to your lifestyle seamlessly.</p></div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-32 max-w-7xl mx-auto text-center border-t border-gray-200 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
          <div>
            <h3 className="text-4xl font-light mb-8">
              <span className="brand-dot"></span> Everything You Need<br />Just Steps Away
            </h3>
            <p className="text-gray-500 mb-8 max-w-md">
              Take a walk to our on-site private market. Stocked with premium organic goods, wine, and daily essentials, creating a community hub that serves all your spontaneous needs.
            </p>
            <Link href="/about" className="text-black underline font-medium underline-offset-4 hover:text-gray-600 transition-colors">
              ABOUT INFRASTRUCTURE
            </Link>
          </div>
          <div className="h-[400px] relative rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop"
              alt="Community Market"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Let Your Space Find You */}
      <section className="py-32 px-6 md:px-12 bg-[#0c0c0c] text-white">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light">
            LET YOUR SPACE<br />FIND YOU <span className="brand-dot"></span> <span className="italic text-gray-500">and bring<br />your people</span>
          </h2>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${i === activeFilter ? "bg-white text-black border-white scale-105" : "bg-transparent text-gray-400 border-white/20 hover:border-white/50"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Floor plan grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredLayouts.length > 0 ? filteredLayouts.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Link href="/catalog" className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer group block">
                  <div className="h-48 relative mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg group-hover:border-[#ff8c42] transition-colors">
                      <span className="text-gray-500 font-medium group-hover:text-white transition-colors">{item.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-sm text-gray-400">{item.size} &middot; {item.beds} beds</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-16 text-gray-500">
                No layouts match this filter. <button onClick={() => setActiveFilter(0)} className="text-[#ff8c42] underline underline-offset-4 ml-1">View all</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-24 px-6 md:px-12 mt-10 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-display tracking-tighter mb-12">
          DOCUMENTATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={docIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-2 bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[#ff8c42]/50 transition-colors"
            >
              <h3 className="text-2xl font-medium mb-6 whitespace-pre-line">{docs[docIdx].title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-10">{docs[docIdx].desc}</p>
              <div className="flex justify-between items-center text-gray-400">
                <Link href="/faq" className="text-sm hover:text-white transition-colors underline underline-offset-4">Read Document</Link>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ff8c42] group-hover:text-black transition-colors">
                  <ArrowRight size={14} className="rotate-45" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-8 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-medium mb-2">ALL DOCUMENTS<br />YOU NEED</h3>
            <p className="text-gray-500 text-sm mb-6">{docIdx + 1} / {docs.length}</p>
            <div className="flex gap-2">
              <button onClick={() => setDocIdx((p) => (p - 1 + docs.length) % docs.length)} className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => setDocIdx((p) => (p + 1) % docs.length)} className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1613490908578-75c3dbbfa13e?q=80&w=2574&auto=format&fit=crop"
            alt="Architecture Setup"
            fill
            className="object-cover opacity-30 grayscale blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-12">
            READY TO DISCUSS<br />YOUR FUTURE HOME?
          </h2>

          <AnimatePresence mode="wait">
            {formSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <Check size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-medium mb-2">Request Submitted!</h3>
                <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-md mx-auto flex flex-col gap-6"
                onSubmit={handleFormSubmit}
              >
                <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                  <span className="text-gray-500 text-sm">01</span>
                  <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" required />
                </div>
                <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                  <span className="text-gray-500 text-sm">02</span>
                  <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" required />
                </div>
                <div className="border-b border-white/30 pb-2 flex items-center gap-3 focus-within:border-white transition-colors">
                  <span className="text-gray-500 text-sm">03</span>
                  <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" />
                </div>

                <button type="submit" className="btn-primary w-full justify-center mt-6 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  Submit Request
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

    </main>
  );
}
