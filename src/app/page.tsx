// src/app/page.jsx
'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutUsPreview from '@/components/home/AboutUsPreview';
import ProductServiceSection from '@/components/home/ProductServiceSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import ClientLogosSection from '@/components/home/ClientLogosSection';

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <AboutUsPreview />
      <ProductServiceSection />
      <BlogPreviewSection />
      <ClientLogosSection />
        {/* Additional sections can be added here */}
    </main>
  );
};

export default HomePage;