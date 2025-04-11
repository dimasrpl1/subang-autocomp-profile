'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Expanded timeline data with more details and image paths
const timelineEvents = [
  {
    year: '2010',
    title: 'PT SAI Resmi Didirikan',
    description: 'PT SAI didirikan di Subang, Jawa Barat dengan fokus pada manufaktur komponen otomotif berkualitas tinggi. Awalnya beroperasi dengan 50 karyawan dan satu jalur produksi sederhana, perusahaan kami berkomitmen untuk menyediakan solusi wiring harness terbaik untuk industri otomotif Indonesia. Pabrik pertama kami memiliki luas 1500m² dan kapasitas produksi 5000 unit per bulan.',
    icon: '🏭',
    imagePath: '/gedung-suai1.jpg',
    imageAlt: 'Pabrik PT SAI pada tahun 2010'
  },
  {
    year: '2012',
    title: 'Ekspansi Pabrik',
    description: 'Untuk memenuhi permintaan yang terus meningkat dari klien otomotif nasional, PT SAI melakukan ekspansi signifikan dengan menambahkan 2 jalur produksi baru. Investasi sebesar Rp 25 miliar ini meningkatkan kapasitas produksi hingga 300% dan menciptakan 120 lapangan kerja baru. Teknologi terbaru diimplementasikan untuk memastikan presisi dan efisiensi maksimal. Ekspansi ini juga mencakup pembangunan fasilitas Quality Control terdepan untuk memastikan standar kualitas tertinggi.',
    icon: '⚙️',
    imagePath: '/gedung-suai1.jpg',
    imageAlt: 'Ekspansi pabrik PT SAI tahun 2012'
  },
  {
    year: '2015',
    title: 'Sertifikasi ISO 9001 & ISO/TS 16949',
    description: 'Pencapaian penting dalam komitmen kami terhadap kualitas adalah diperolehnya sertifikasi ISO 9001 dan ISO/TS 16949. Sertifikasi ini mengkonfirmasi bahwa sistem manajemen mutu PT SAI memenuhi standar internasional dan khusus industri otomotif. Proses sertifikasi melibatkan audit menyeluruh, pelatihan staf, dan optimalisasi seluruh alur kerja. Pencapaian ini membuka pintu untuk kolaborasi dengan merek otomotif global dan memperkuat kepercayaan klien terhadap produk kami.',
    icon: '🏆',
    imagePath: '/gedung-suai1.jpg',
    imageAlt: 'Seremoni penerimaan sertifikasi ISO'
  },
  {
    year: '2018',
    title: 'Ekspor Perdana ke Asia Tenggara',
    description: 'PT SAI mencapai tonggak bersejarah dengan memulai ekspor perdana ke Malaysia dan Thailand, menandai awal ekspansi internasional kami. Kemitraan strategis dengan produsen otomotif terkemuka di kedua negara ini memungkinkan pengiriman lebih dari 50.000 unit wiring harness dalam tahun pertama. Tim R&D kami mengembangkan varian produk khusus yang memenuhi standar regional dan kondisi iklim lokal. Ekspansi ini meningkatkan pendapatan ekspor sebesar 35% dan memperkuat posisi PT SAI sebagai pemain global di industri komponen otomotif.',
    icon: '🌏',
    imagePath: '/gedung-suai1.jpg',
    imageAlt: 'Pengiriman ekspor perdana PT SAI'
  },
  {
    year: '2024',
    title: 'Digitalisasi Proses Produksi',
    description: 'Transformasi digital komprehensif menjadi fokus utama PT SAI di tahun 2024 dengan implementasi sistem ERP dan teknologi IoT mutakhir. Investasi Rp 40 miliar ini mengintegrasikan seluruh aspek produksi, dari pengadaan bahan baku hingga pengiriman produk jadi. Sensor IoT yang dipasang pada semua mesin produksi memungkinkan pemantauan real-time, prediksi pemeliharaan, dan optimalisasi proses. Digitalisasi ini meningkatkan efisiensi produksi sebesar 40%, mengurangi waktu henti hingga 60%, dan menurunkan tingkat cacat produk di bawah 0.5%. Big data analytics juga diimplementasikan untuk mengoptimalkan rantai pasokan dan meningkatkan peramalan permintaan.',
    icon: '💻',
    imagePath: '/gedung-suai1.jpg',
    imageAlt: 'Sistem digitalisasi produksi PT SAI'
  }
];

const TentangSejarah = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Perjalanan Kami</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg">
            Sejak didirikan pada tahun 2010, PT SAI telah mengalami pertumbuhan luar biasa dan mencapai berbagai tonggak penting dalam industri manufaktur komponen otomotif Indonesia.
          </p>
        </motion.div>

        {/* Desktop and Tablet Timeline */}
        <div className="hidden lg:block">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex mb-24 items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              {/* Image Section */}
              <div className="w-5/12">
                <div className="relative overflow-hidden rounded-lg shadow-xl group">
                  <Image
                    src={event.imagePath}
                    alt={event.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-bold text-xl">{event.title}</span>
                  </div>
                </div>
              </div>

              {/* Center Timeline */}
              <div className="w-2/12 relative flex justify-center">
                <div className="w-1 h-full bg-blue-200 absolute"></div>
                <div className="bg-blue-600 text-white font-bold text-xl w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-lg relative">
                  {event.year}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-5/12">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-3xl">{event.icon}</span> {event.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile and Small Tablet Timeline */}
        <div className="lg:hidden">
          {timelineEvents.map((event) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Year and Line */}
                <div className="flex items-center md:items-start">
                  <div className="bg-blue-600 text-white font-bold text-lg w-14 h-14 rounded-full flex items-center justify-center shadow-lg shrink-0">
                    {event.year}
                  </div>
                  <div className="hidden md:block w-1 h-full bg-blue-200 mx-6"></div>
                </div>

                <div className="flex-1">
                  {/* Image */}
                  <div className="relative w-full h-48 md:h-64 mb-4 overflow-hidden rounded-lg shadow-lg">
                    <Image 
                      src={event.imagePath}
                      alt={event.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="text-2xl">{event.icon}</span> {event.title}
                    </h3>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote/Vision Statement - Professional Version */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="mt-20 bg-white border border-gray-200 rounded-lg shadow-md p-8 md:p-10 max-w-4xl mx-auto"
>
  <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* Image and Person Info */}
    <div className="flex-shrink-0 text-center md:text-left">
      <div className="w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200 mb-3">
        <Image 
          src="/profil.png" 
          alt="Direktur Utama PT SAI" 
          width={120} 
          height={120}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <div className="font-bold text-gray-800">Bapak Surya Wijaya</div>
        <div className="text-sm text-gray-500">Direktur Utama PT SAI</div>
      </div>
    </div>

    {/* Quote Content */}
    <div className="flex-1">
      <div className="relative">
        <div className="absolute -left-2 -top-2 text-4xl text-blue-600 opacity-20">&quot;</div>
        <blockquote className="text-gray-700 text-lg leading-relaxed pl-4 md:pl-6 border-l-4 border-blue-600">
          Sejak didirikan, PT SAI telah berkomitmen pada standar kualitas tertinggi dan inovasi berkelanjutan dalam industri komponen otomotif. Kami terus beradaptasi dengan perkembangan teknologi untuk memberikan solusi yang efisien dan andal bagi mitra kami baik di Indonesia maupun pasar global.
        </blockquote>
      </div>
      <div className="mt-4 text-right">
        <a href="#visi-misi" className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center">
          Lihat Visi & Misi Kami
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default TentangSejarah;