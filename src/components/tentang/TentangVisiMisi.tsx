'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
              <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white"></div>
                <div className="absolute left-20 bottom-4 w-16 h-16 rounded-full bg-white"></div>
                <div className="absolute left-4 top-12 w-8 h-8 rounded-full bg-white"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Visi</h3>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
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
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 relative">
              <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute -left-8 -top-8 w-40 h-40 rounded-full bg-white"></div>
                <div className="absolute right-20 bottom-4 w-16 h-16 rounded-full bg-white"></div>
                <div className="absolute right-4 top-12 w-8 h-8 rounded-full bg-white"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Misi</h3>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <p className="text-gray-700 mb-4">
                Mengembangkan, memproduksi, dan mendistribusikan komponen otomotif berkualitas tinggi dengan 
                standar keamanan terbaik melalui proses yang efisien dan berkelanjutan.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <span className="text-emerald-600 text-xs">01</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Menerapkan teknologi terkini dalam proses produksi</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <span className="text-emerald-600 text-xs">02</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Mengutamakan kualitas dan keandalan dalam setiap produk</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <span className="text-emerald-600 text-xs">03</span>
                  </div>
                  <p className="ml-3 text-sm text-gray-600">Membangun kemitraan jangka panjang dengan pelanggan dan pemasok</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <span className="text-emerald-600 text-xs">04</span>
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
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Nilai-nilai Perusahaan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Integritas */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm p-6 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800">Integritas</h4>
              <p className="text-sm text-gray-600 mt-1">Jujur dan etis dalam semua tindakan</p>
            </motion.div>
            
            {/* Inovasi */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm p-6 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800">Inovasi</h4>
              <p className="text-sm text-gray-600 mt-1">Selalu mencari solusi lebih baik</p>
            </motion.div>
            
            {/* Kolaborasi */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm p-6 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800">Kolaborasi</h4>
              <p className="text-sm text-gray-600 mt-1">Bekerja sama untuk tujuan bersama</p>
            </motion.div>
            
            {/* Keunggulan */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm p-6 text-center"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800">Keunggulan</h4>
              <p className="text-sm text-gray-600 mt-1">Berusaha mencapai hasil terbaik</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TentangVisiMisi;