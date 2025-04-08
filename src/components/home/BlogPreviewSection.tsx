'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Inovasi Terbaru dalam Perakitan Wiring Harness',
    excerpt: 'PT SAI terus menghadirkan teknologi terkini demi kualitas produksi maksimal...',
    image: '/factory-1.jpg',
    date: '5 April 2025',
  },
  {
    id: 2,
    title: 'Kunjungan Industri Siswa SMK ke PT SAI',
    excerpt: 'Kami menerima kunjungan edukatif dari berbagai sekolah vokasi di Jawa Barat...',
    image: '/factory-2.jpg',
    date: '28 Maret 2025',
  },
  {
    id: 3,
    title: 'Ekspor Produk Ke Pasar Asia Tenggara',
    excerpt: 'PT SAI memperluas distribusi wiring harness ke berbagai negara Asia...',
    image: '/factory-3.jpg',
    date: '17 Maret 2025',
  },
  {
    id: 4,
    title: 'iShowSpeed Heran Lihat Canggihnya Mobil China: Bisa Jalan-Parkir Sendiri',
    excerpt: 'Streamer kenamaan asal Amerika Serikat (AS), Darren Jason Watkins alias iShowSpeed telah mengadakan siaran langsung (livestream) di sejumlah kota di China....',
    image: '/speed.png',
    date: '7 April 2025',
  },
];

const BlogPreviewSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Berita Terbaru
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ikuti informasi terbaru seputar kegiatan dan perkembangan PT SAI.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col border border-gray-100 h-[420px]"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Date */}
              <p className="text-xs text-gray-500 px-5 pt-3">{post.date}</p>

              {/* Content */}
              <div className="p-5 text-left flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300 max-h-14 overflow-hidden">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 max-h-20 overflow-hidden">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/berita`}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Baca selengkapnya →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            href="/berita"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
          >
            Lihat Semua Berita
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
