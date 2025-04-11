'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUsPreview = () => {
  return (
    <section className="relative bg-white">
      {/* Transisi dari hitam ke putih */}
      

      <div className="relative container mx-auto px-4 pt-20 pb-20 z-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Gambar di kiri */}
          <div className="w-full md:w-1/2">
            <Image
              src="/gedung-suai1.jpg"
              alt="Pabrik PT SUAI"
              width={600}
              height={400}
              className="rounded-2xl shadow-md object-cover w-full h-auto"
            />
          </div>

          {/* Teks di kanan */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Tentang Kami</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Didirikan pada tahun 2011, PT Subang Autocomp Indonesia (SUAI) adalah perusahaan manufaktur yang bergerak di bidang perakitan kabel mobil (wiring harness). Kami beroperasi di bawah pengawasan YAZAKI GROUP dan berkomitmen untuk memberikan produk berkualitas tinggi untuk industri otomotif global.
            </p>
            <Link
              href="/tentang"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPreview;
