'use client';

import React, { useEffect, useState } from 'react';
import GaleriHero from '@/components/galeri/GaleriHero';
import { supabase } from '@/lib/supabaseClient';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

interface GaleriItem {
  id: string;
  judul: string | null;
  gambar: string | null;
  created_at: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
}

const GaleriPage = () => {
  const [galeri, setGaleri] = useState<GaleriItem[]>([]);
  const [visibleGaleri, setVisibleGaleri] = useState<GaleriItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GaleriItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchGaleri = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('galeri')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Gagal fetch galeri:', error);
      } else if (data) {
        // Process images to get dimensions
        const processedData = await Promise.all(
          data.map(async (item) => {
            if (!item.gambar) return item;
            
            // Create a default aspect ratio (will be replaced if image loads)
            const defaultItem = {
              ...item,
              width: 600,
              height: 400,
              aspectRatio: 1.5
            };
            
            return defaultItem;
          })
        );
        
        setGaleri(processedData);
        // Initially show only first page
        setVisibleGaleri(processedData.slice(0, itemsPerPage));
      }
      setIsLoading(false);
    };

    fetchGaleri();
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const nextItems = galeri.slice(0, nextPage * itemsPerPage);
    setVisibleGaleri(nextItems);
    setPage(nextPage);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <GaleriHero />

      <div className="px-4 py-16 max-w-7xl mx-auto">
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : galeri.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            Belum ada foto dalam galeri
          </div>
        ) : (
          <>
            {/* Masonry Grid Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
              {visibleGaleri.map((item) => (
                <div
                  key={item.id}
                  className="break-inside-avoid group rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl transition duration-300 inline-block w-full"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/galeri-images/${item.gambar}`}
                      alt={item.judul ?? 'Galeri'}
                      width={600}
                      height={item.aspectRatio ? Math.round(600 / item.aspectRatio) : 400}
                      className="w-full object-cover transform group-hover:scale-105 transition duration-500"
                      style={{ aspectRatio: item.aspectRatio }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-medium truncate">{item.judul || 'Tanpa Judul'}</h3>
                        <p className="text-sm text-gray-200">
                          {format(new Date(item.created_at), 'd MMMM yyyy', { locale: id })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            {visibleGaleri.length < galeri.length && (
              <div className="flex justify-center mt-12">
                <button 
                  onClick={handleLoadMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-md transition duration-200 font-medium"
                >
                  Muat Lebih Banyak
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Redesigned Full Screen Modal */}
      <Dialog 
        open={!!selectedItem} 
        onClose={handleClose} 
        className="fixed inset-0 z-50"
      >
        {/* Backdrop overlay */}
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center">
          {selectedItem && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-all duration-200 shadow-lg"
                aria-label="Tutup"
              >
                <X size={24} />
              </button>
              
              {/* Full Screen Image */}
              <div className="relative w-full h-full">
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/galeri-images/${selectedItem.gambar}`}
                  alt={selectedItem.judul ?? 'Galeri'}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
                
                {/* Dark Gradient Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-8 px-6">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white">
                      {selectedItem.judul || 'Tanpa Judul'}
                    </h2>
                    <p className="text-sm text-gray-300 mt-2 flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-gray-300 mr-2"></span>
                      {format(new Date(selectedItem.created_at), 'd MMMM yyyy', { locale: id })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default GaleriPage;