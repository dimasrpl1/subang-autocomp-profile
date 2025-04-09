// src/app/tentang/page.tsx
import React from 'react';
import TentangHero from '@/components/tentang/TentangHero';
import TentangAbout from '@/components/tentang/TentangAbout';
import TentangPendiri from '@/components/tentang/TentangPendiri';
import TentangSejarah from '@/components/tentang/TentangSejarah';

export default function TentangPage() {
  return (
    <main className="min-h-screen">
      <TentangHero />
      <TentangAbout />
      <TentangPendiri />
      <TentangSejarah />
    </main>
  );
}