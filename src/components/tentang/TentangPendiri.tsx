'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TentangPendiri = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Pendiri Kami
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Kisah inspiratif di balik keberhasilan PT Subang Autocomp Indonesia
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
  {/* Gambar - sekarang order 1 di semua layar */}
  <motion.div 
    className="lg:col-span-5 relative order-1 lg:order-1"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
  >
            <div className="relative">
              
              
              {/* Main image with shadow */}
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/sadami1.jpg" 
                  alt="Sadami Yazaki - Pendiri"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              
              {/* Name badge */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                <h3 className="font-bold text-gray-800 text-lg">Sadami Yazaki</h3>
              </div>
            </div>
          </motion.div>
          
           {/* Teks - sekarang order 2 di semua layar */}
  <motion.div
    className="lg:col-span-7 order-2 lg:order-2"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    viewport={{ once: true }}
  >
            {/* Timeline element */}
            <div className="flex items-center mb-6">
              <div className="h-px flex-grow bg-gray-300"></div>
              <span className="px-4 text-blue-600 font-medium">Perjalanan Inspiratif</span>
              <div className="h-px flex-grow bg-gray-300"></div>
            </div>
            
            {/* Main bio content */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Sadami Yazaki mendirikan bisnis wire harness pada usia 21 tahun, dimulai dari usaha kecil seorang diri di Tokyo. Ia dikenal sebagai sosok pekerja keras dan berhati hangat—bukan hanya terhadap karyawan, tapi juga orang-orang biasa yang ia temui dalam hidupnya.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Kepeduliannya terhadap sesama tercermin dari tindakan nyata, seperti menyediakan fasilitas umum dan perumahan bagi pekerja sebelum memikirkan kenyamanan eksekutif. Nilai-nilai kasih, keadilan, dan kerja keras yang ditanamkan Sadami tetap hidup dalam budaya perusahaan hingga hari ini.
              </p>
              
              {/* Key values */}
              <div className="mt-6 flex flex-wrap gap-3">
                {["Keadilan", "Inovasi", "Kerja Keras", "Kepedulian"].map((value, index) => (
                  <span key={index} className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {value}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Enhanced quote */}
            <motion.div 
              className="mt-8 bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg shadow-md relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 -left-3 text-blue-200 text-6xl font-serif">&quot;</div>
              <blockquote className="italic text-gray-700 text-xl relative z-10 pl-3">
                Menjadi dibutuhkan oleh masyarakat berarti memberikan manfaat yang nyata bagi orang lain. Itulah tujuan kita.
              </blockquote>
              <div className="mt-4 flex items-center justify-end">
                <div className="h-px w-12 bg-blue-400 mr-4"></div>
                <p className="font-semibold text-gray-800">Sadami Yazaki</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TentangPendiri;