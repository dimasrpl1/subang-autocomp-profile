// src/app/page.jsx
'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
        {/* Additional sections can be added here */}
    </main>
  );
};

export default HomePage;