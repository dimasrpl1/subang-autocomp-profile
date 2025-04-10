'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TentangVisiMisi = () => {
  return (
    <section id="visi-misi" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            Panduan kami dalam mencapai keunggulan dan pertumbuhan berkelanjutan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Visi Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 relative">
              <Image
                src="/factory-1.jpg"
                alt="Visi PT SAI"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Visi</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Menjadi pemimpin terdepan dalam industri komponen otomotif di Asia Tenggara yang dikenal karena kualitas,
                inovasi, dan komitmen terhadap kepuasan pelanggan.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-xs">01</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Menghadirkan produk komponen otomotif berkualitas tertinggi</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-xs">02</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Menjadi partner pilihan bagi produsen otomotif regional</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-xs">03</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Memimpin dalam penerapan teknologi dan inovasi manufaktur</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Misi Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 relative">
              <Image
                src="/factory-1.jpg"
                alt="Misi PT SAI"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Misi</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Mengembangkan, memproduksi, dan mendistribusikan komponen otomotif berkualitas tinggi dengan 
                standar keamanan terbaik melalui proses yang efisien dan berkelanjutan.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-xs">01</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Menerapkan teknologi terkini dalam proses produksi</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-xs">02</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Mengutamakan kualitas dan keandalan dalam setiap produk</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-xs">03</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Membangun kemitraan jangka panjang dengan pelanggan dan pemasok</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-xs">04</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Mendukung pengembangan kompetensi karyawan secara berkelanjutan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nilai-nilai Perusahaan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="p-8 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Nilai-nilai Perusahaan</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800">Integritas</h4>
                <p className="text-sm text-gray-600 mt-1">Jujur dan etis dalam semua tindakan</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800">Inovasi</h4>
                <p className="text-sm text-gray-600 mt-1">Selalu mencari solusi lebih baik</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800">Kolaborasi</h4>
                <p className="text-sm text-gray-600 mt-1">Bekerja sama untuk tujuan bersama</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800">Keunggulan</h4>
                <p className="text-sm text-gray-600 mt-1">Berusaha mencapai hasil terbaik</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TentangVisiMisi;