// src/components/home/HeroSection.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Calendar, Building2, Cable } from 'lucide-react';

// Background images for slideshow
const backgroundImages = [
    '/factory-1.jpg',
    '/factory-2.jpg',
    '/factory-3.jpg'
];

// Stats data
const stats = [
    { icon: Calendar, value: '2011', label: 'Berdiri Sejak' },
    { icon: Users, value: '1000+', label: 'Karyawan' },
    { icon: Building2, value: '15+', label: 'Tahun Pengalaman' },
    { icon: Cable, value: '500K+', label: 'Unit Produksi' },
];

// Typing effect texts
const typingTexts = [
    'Produsen Wiring Harness Berkualitas Tinggi',
    'Dipercaya oleh Industri Otomotif Global',
    'Menghadirkan Solusi Konektivitas Terdepan'
];

const HeroSection = () => {
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
        <div className="relative min-h-screen">
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
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70 z-10" />
            </div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 pt-24 pb-16">

                <div className="w-full max-w-6xl mx-auto text-center">
                    {/* Main heading */}
                    <motion.h1 
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        PT Subang Autocomp Indonesia
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
                    
                    {/* Stats - improved layout for mobile */}
                    <div className="mt-8 sm:mt-12 lg:mt-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="mb-2 text-blue-300">
                                            <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                        <div className="text-xl sm:text-2xl font-bold text-white">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-300 mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    {/* CTA Button - added for better UX */}
                    <motion.div
                        className="mt-8 sm:mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <a 
                            href="/tentang"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                        >
                            Pelajari Lebih Lanjut
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;