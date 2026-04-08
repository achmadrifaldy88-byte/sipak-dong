import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code2, Bike, Trophy, Laptop } from 'lucide-react';

const slides = [

  {
    id: 2,
    icon: <Bike className="w-12 h-12 text-orange-500" />,
    title: "Modifikasi Motor",
    description: "Hobi mengulik estetika motor agar tampil beda di jalanan.",
    color: "from-orange-500/10 to-red-500/10"
  },
  {
    id: 3,
    icon: <Trophy className="w-12 h-12 text-yellow-500" />,
    title: "Bermain Bola",
    description: "Aktif bermain futsal dan sepak bola bersama teman-teman.",
    color: "from-yellow-500/10 to-green-500/10"
  },
  {
    id: 4,
    icon: <Laptop className="w-12 h-12 text-purple-500" />,
    title: "Ilmu Komputer",
    description: "Saya belajar ilmu komputer agar saya dapat memahaminya lebih dalam.",
    color: "from-purple-500/10 to-pink-500/10"
  }
];

export default function TextCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.4 }}
              className={`p-10 md:p-16 rounded-3xl border border-primary/10 glass shadow-xl bg-gradient-to-br ${slides[index].color} text-center`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-background rounded-2xl shadow-sm">
                  {slides[index].icon}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display">
                {slides[index].title}
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                "{slides[index].description}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigasi */}
          <div className="flex items-center justify-between mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full hover:bg-primary/10 transition-colors border border-primary/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-primary/20"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="p-3 rounded-full hover:bg-primary/10 transition-colors border border-primary/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}