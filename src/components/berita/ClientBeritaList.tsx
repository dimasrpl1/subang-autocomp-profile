'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';

type Berita = {
  id: string;
  judul: string;
  gambar: string;
  created_at: string;
};

export default function ClientBeritaList({ berita: initialBerita }: { berita: Berita[] }) {
  const [search, setSearch] = useState('');
  const [currentOffset, setCurrentOffset] = useState(6);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [filteredBerita, setFilteredBerita] = useState<Berita[]>([]);
  const [displayedBerita, setDisplayedBerita] = useState<Berita[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const filtered = initialBerita.filter((item) =>
      item.judul.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBerita(filtered);
    setDisplayedBerita(filtered.slice(0, currentOffset));
  }, [search, initialBerita, currentOffset]);

  useEffect(() => {
    setHasMore(displayedBerita.length < filteredBerita.length);
  }, [displayedBerita, filteredBerita]);

  const handleLoadMore = () => setCurrentOffset((prev) => prev + 6);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <section className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Berita Terbaru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan informasi terkini dan terupdate dari kami
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 flex justify-center">
          <div className={`relative w-full max-w-lg transition-transform duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              placeholder="Cari judul berita..."
              className="w-full border-2 border-gray-200 rounded-full px-5 py-3 pl-12 text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
            />
            <Search 
              size={20} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700"
            />
          </div>
        </div>

        {/* Jika tidak ada hasil */}
        {filteredBerita.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Berita tidak ditemukan</h3>
            <p className="text-gray-500">Coba gunakan kata kunci pencarian yang berbeda.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {displayedBerita.map((item) => (
                <Link
                  href={`/berita/${item.id}`}
                  key={item.id}
                  className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="overflow-hidden aspect-[16/9]">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/berita-images/${item.gambar}`}
                        alt={`Gambar ${item.judul}`}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.judul}
                    </h3>
                    <p className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(item.created_at)}
                    </p>
                    <div className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-md w-fit">
                      Selengkapnya
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Tombol Load More */}
            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
                >
                  <span>Muat Lebih Banyak</span>
                  <ChevronDown size={18} className="ml-2 transition-transform group-hover:translate-y-1" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
