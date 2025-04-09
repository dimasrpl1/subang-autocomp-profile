'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Timeline data
const timelineEvents = [
  {
    year: '2010',
    title: 'PT SAI Resmi Didirikan',
    description: 'Perusahaan mulai beroperasi di Subang dengan 50 karyawan dan satu jalur produksi sederhana.',
    icon: '🏭'
  },
  {
    year: '2012',
    title: 'Ekspansi Pabrik',
    description: 'Penambahan 2 jalur produksi baru untuk memenuhi permintaan dari klien otomotif nasional.',
    icon: '⚙️'
  },
  {
    year: '2015',
    title: 'Sertifikasi ISO 9001 & ISO/TS 16949',
    description: 'PT SAI resmi mendapatkan pengakuan standar internasional untuk sistem manajemen mutu dan produksi otomotif.',
    icon: '🏆'
  },
  {
    year: '2018',
    title: 'Ekspor Perdana ke Asia Tenggara',
    description: 'Mulai mengekspor wiring harness ke Malaysia dan Thailand, menandai ekspansi internasional pertama.',
    icon: '🌏'
  },
  {
    year: '2024',
    title: 'Digitalisasi Proses Produksi',
    description: 'Implementasi sistem ERP dan IoT untuk pengawasan dan efisiensi produksi secara real-time.',
    icon: '💻'
  }
];

const TentangSejarah = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Perjalanan Kami</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            Sejak didirikan pada tahun 2010, PT SAI telah mengalami pertumbuhan luar biasa dan mencapai berbagai tonggak penting.
          </p>
        </motion.div>

        {/* Timeline for desktop and tablet */}
        <div className="hidden md:block">
          <div className="relative flex flex-col items-center">
            {/* Main timeline line */}
            <div className="absolute h-full w-1 bg-blue-200 rounded-full"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative w-full mb-12 last:mb-0"
              >
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="mb-2">
                      <span className="inline-block py-1 px-4 rounded-full bg-blue-500 text-white font-bold text-sm">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                      {index % 2 === 0 ? (
                        <>
                          {event.title} <span className="text-2xl">{event.icon}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-2xl">{event.icon}</span> {event.title}
                        </>
                      )}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                {/* Center dot with animation on hover */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg cursor-pointer z-10"
                    onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline for mobile */}
        <div className="md:hidden">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-10 pb-8 border-l-2 border-blue-200 last:pb-0"
            >
              {/* Year badge */}
              <div className="absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                {event.year.slice(2)}
              </div>
              
              {/* Content card */}
              <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{event.icon}</span>
                  <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">{event.year}</div>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <blockquote className="text-lg italic text-gray-600">
            &quot;Setiap langkah dalam perjalanan kami mewakili komitmen kami untuk kualitas dan inovasi dalam industri otomotif.&quot;
          </blockquote>
          <div className="mt-2 text-black font-semibold">- Direktur Utama PT SAI</div>
        </motion.div>
      </div>
    </section>
  );
};

export default TentangSejarah;