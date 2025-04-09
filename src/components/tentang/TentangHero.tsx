'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Background images for slideshow
const backgroundImages = [
  '/factory-1.jpg',
  '/factory-2.jpg',
  '/factory-3.jpg'
];

// Typing effect texts
const typingTexts = [
  'Produsen Wiring Harness Berkualitas Tinggi',
  'Dipercaya oleh Industri Otomotif Global',
  'Menghadirkan Solusi Konektivitas Terdepan'
];

const TentangHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[60vh]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <div 
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0
            }}
          >
            <Image
              src={src}
              alt="Factory Background"
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none" />

        {/* Top Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70 z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 md:px-8 pt-24 pb-16">
        <div className="w-full max-w-6xl mx-auto text-center">
          {/* Main heading - Changed to "Tentang Kami" */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tentang Kami
          </motion.h1>
          
          {/* Animated subtitle - height adjusted for better mobile display */}
          <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center overflow-hidden my-4 sm:my-6">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-blue-200 px-2"
            >
              {typingTexts[currentTextIndex]}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TentangHero;