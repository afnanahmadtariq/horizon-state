"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Check, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden selection:bg-[#ff8c42] selection:text-white pb-24">


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
              A unique experience in living and building timeless views, creating a space you'll want to call home. A place where nature and modern architecture combine perfectly.
            </p>

            <button className="btn-primary group">
              View Syndicator
              <div className="bg-black text-white rounded-full p-1 border border-black group-hover:bg-white group-hover:text-black group-hover:border-black transition-colors">
                <ArrowRight size={16} />
              </div>
            </button>
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
          {/* Using a high-quality modern house image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10 lg:hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent z-10 hidden lg:block"></div>
          <Image
            src="https://images.unsplash.com/photo-1613490908578-75c3dbbfa13e?q=80&w=2574&auto=format&fit=crop"
            alt="Horizon State Modern Home"
            fill
            className="object-cover object-bottom"
            priority
          />

          {/* Video Play Button Overlay */}
          <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 z-20 flex items-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
            <div className="bg-white text-black p-3 rounded-full">
              <Play size={20} fill="currentColor" />
            </div>
            <span className="pr-4 font-medium text-sm">Play video</span>
          </div>
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
          {/* Left large image block */}
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

          {/* Right content block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light leading-snug mb-16 max-w-lg"
            >
              A unique experience in living and timeless views, creating a space <span className="brand-dot"></span> you'll love to call home.
            </motion.p>

            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-display tracking-tighter">
                HORIZON<br />STATE
              </h2>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/5 transition-colors">
                <span className="text-xs uppercase tracking-widest text-center">View<br />Gallery</span>
              </div>
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
              <div className="w-3/4 bg-[#ff8c42] h-full relative">
                <span className="absolute -top-6 right-0 text-xs">75%</span>
              </div>
            </div>
            <div className="w-full bg-white/10 h-1">
              <div className="w-1/4 bg-white h-full relative">
                <span className="absolute -top-6 right-0 text-xs">25%</span>
              </div>
            </div>
          </div>

          <div className="border-r border-white/10 px-8 flex flex-col justify-center">
            <h3 className="text-6xl font-light mb-2">10+</h3>
            <p className="text-sm text-gray-500">Current available homes</p>
          </div>

          <div className="border-b md:border-b-0 md:border-r border-white/10 px-8 flex flex-col justify-center pb-8 md:pb-0">
            <h3 className="text-6xl font-light mb-2">95%</h3>
            <p className="text-sm text-gray-500">Project sold out</p>
          </div>

          <div className="px-8 flex flex-col justify-center relative">
            <h3 className="text-6xl font-light mb-2">200+</h3>
            <p className="text-sm text-gray-500">Happy families in the woods</p>
            <div className="absolute top-2 right-4 text-gray-600">
              <ArrowRight size={24} className="rotate-45" />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Image Full Width */}
      <section className="px-6 md:px-12 py-10 relative">
        <div className="w-full h-[600px] relative rounded-[40px] overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
            alt="Luxury Living"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl font-light max-w-2xl leading-relaxed mt-auto mb-10"
            >
              "Sometimes the most valuable things are the ones you don't notice at first... a house as a sanctuary, quiet, between glasses. This is exactly how our sanctuary is, and is made to feel like yours."
            </motion.p>
          </div>

          {/* Carousel Controls */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/70 transition-colors">
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/70 transition-colors">
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-white/30"></span>
            <span className="w-2 h-2 rounded-full bg-white/30"></span>
          </div>
        </div>

        {/* Giant Background Text */}
        <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none -translate-y-1/2 mt-40 mix-blend-overlay opacity-20 z-0">
          <h2 className="text-[12rem] whitespace-nowrap font-display tracking-tighter text-white/40">
            LIVE ABOVE THE REST
          </h2>
        </div>
      </section>

      {/* Perks Section (Light theme block) */}
      <section className="bg-white text-black py-32 px-6 md:px-12 mt-32 rounded-t-[60px] relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4 text-center">Benefits</p>
          <h2 className="text-5xl md:text-6xl font-light mb-8">
            THE PERKS<br />OF LIVING <span className="brand-dot"></span> <span className="italic text-gray-400">in harmony<br />with nature</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            {['VARIETY OF LAYOUTS', 'BUILT-IN WELLNESS HUB', '24/7 HOUSE SECURITY', 'FLEXIBLE FURNITURE DESIGN'].map((perk, i) => (
              <div key={i} className={`flex items-center justify-between py-6 border-b ${i === 0 ? 'border-black' : 'border-gray-200'} cursor-pointer hover:border-black transition-colors`}>
                <span className={`text-lg font-medium ${i === 0 ? 'text-black' : 'text-gray-400'}`}>{perk}</span>
                <ArrowRight size={20} className={i === 0 ? 'text-black' : 'text-gray-300'} />
              </div>
            ))}
          </div>

          <div className="relative h-[400px] rounded-full overflow-hidden shrink-0 border-8 border-white shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop"
              alt="Nature Living"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <Check className="text-black mb-4" size={24} />
              <h4 className="font-bold text-xl mb-3">Customization</h4>
              <p className="text-gray-500 leading-relaxed">Choose from multiple floor plans or modify existing ones to perfectly fit your lifestyle needs.</p>
            </div>
            <div>
              <Check className="text-black mb-4" size={24} />
              <h4 className="font-bold text-xl mb-3">Premium Materials</h4>
              <p className="text-gray-500 leading-relaxed">Every surface, every fixture chosen with extreme care for durability, aesthetics, and sustainability.</p>
            </div>
            <div>
              <Check className="text-black mb-4" size={24} />
              <h4 className="font-bold text-xl mb-3">Nature Immersive</h4>
              <p className="text-gray-500 leading-relaxed">Floor-to-ceiling glass systems that seamlessly blend your indoor sanctuary with the outside environment.</p>
            </div>
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
            <button className="text-black underline font-medium underline-offset-4 hover:text-gray-600 transition-colors">
              ABOUT INFRASTRUCTURE
            </button>
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

      {/* Let Your Space Find You (Floor plans) */}
      <section className="py-32 px-6 md:px-12 bg-[#0c0c0c] text-white">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light">
            LET YOUR SPACE<br />FIND YOU <span className="brand-dot"></span> <span className="italic text-gray-500">and bring<br />your people</span>
          </h2>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['All Layouts', '2 Bedrooms', '3 Bedrooms', '4+ Bedrooms', 'With Pool', 'Guest House'].map((filter, i) => (
            <button key={i} className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors ${i === 0 ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/20 hover:border-white/50'}`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Floor plan grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="h-48 relative mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Placeholder for floor plan SVG/Image */}
                <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg">
                  <span className="text-gray-500 font-medium">Floor Plan {item}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg">Layout {['A', 'B', 'C', 'D'][item - 1]}</h4>
                  <p className="text-sm text-gray-400">120-150m²</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation UI block */}
      <section className="py-24 px-6 md:px-12 mt-10 max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-display tracking-tighter mb-12">
          DOCUMENTATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[#ff8c42]/50 transition-colors">
            <h3 className="text-2xl font-medium mb-16">PROPERTY<br />PASSPORT</h3>
            <div className="flex justify-between items-center text-gray-400">
              <span className="text-sm cursor-pointer hover:text-white">Read Document</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ff8c42] group-hover:text-black transition-colors">
                <ArrowRight size={14} className="rotate-45" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-[#ff8c42]/50 transition-colors">
            <h3 className="text-2xl font-medium mb-16">CERTIFICATE OF<br />CONSTRUCTION</h3>
            <div className="flex justify-between items-center text-gray-400">
              <span className="text-sm cursor-pointer hover:text-white">Read Document</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ff8c42] group-hover:text-black transition-colors">
                <ArrowRight size={14} className="rotate-45" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-8 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-medium mb-4">ALL DOCUMENTS<br />YOU NEED</h3>
            <div className="flex gap-2">
              <button className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"><ChevronLeft size={16} /></button>
              <button className="p-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-colors"><ChevronRight size={16} /></button>
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

          <form className="max-w-md mx-auto flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="border-b border-white/30 pb-2 flex items-center gap-3">
              <span className="text-gray-500 text-sm">01</span>
              <input type="text" placeholder="Name" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" />
            </div>
            <div className="border-b border-white/30 pb-2 flex items-center gap-3">
              <span className="text-gray-500 text-sm">02</span>
              <input type="email" placeholder="Email" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" />
            </div>
            <div className="border-b border-white/30 pb-2 flex items-center gap-3">
              <span className="text-gray-500 text-sm">03</span>
              <input type="tel" placeholder="Phone" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-600" />
            </div>

            <button className="btn-primary w-full justify-center mt-6">
              Submit Request
            </button>
          </form>
        </div>
      </section>


    </main>
  );
}
