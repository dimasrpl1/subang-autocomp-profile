'use client';

import React from 'react';
import Image from 'next/image';

const TentangAbout = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title with decorative elements */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
              Subang Autocomp Indonesia
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto mt-3"></div>
          </div>
        </div>
        
        {/* Main Content with improved layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left side - Image (wider on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/gedung-suai1.jpg" 
                alt="PT Subang Autocomp Indonesia Facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
          
          {/* Right side - Text content (more space on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">
                Tentang Perusahaan
              </h3>
              <p className="text-gray-700 mb-4 text-base lg:text-lg">
                PT Subang Autocomp Indonesia (SAI) adalah perusahaan manufaktur yang bergerak di bidang perakitan <strong>wiring harness</strong> untuk berbagai kebutuhan otomotif. Wiring harness merupakan sistem kabel yang menghubungkan komponen elektronik kendaraan agar berfungsi secara efisien dan aman.
              </p>
              <p className="text-gray-700 text-base lg:text-lg">
                Berdiri sejak tahun 2010, PT SAI telah tumbuh menjadi perusahaan berskala internasional dengan lebih dari <strong>1.500 karyawan aktif</strong> dan <strong>3 unit produksi utama</strong>.
              </p>
            </div>
            
            {/* Company Stats - Improved with cards and icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm transition-all hover:shadow-md">
                <div className="font-bold text-2xl text-blue-600">1.500+</div>
                <div className="text-sm text-gray-600 font-medium">Karyawan</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm transition-all hover:shadow-md">
                <div className="font-bold text-2xl text-blue-600">3</div>
                <div className="text-sm text-gray-600 font-medium">Unit Produksi</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm transition-all hover:shadow-md">
                <div className="font-bold text-2xl text-blue-600">15+</div>
                <div className="text-sm text-gray-600 font-medium">Tahun Pengalaman</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 shadow-sm transition-all hover:shadow-md">
                <div className="font-bold text-2xl text-blue-600">5 Juta</div>
                <div className="text-sm text-gray-600 font-medium">Unit/Tahun</div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div>
              <p className="text-gray-700 mb-4 text-base lg:text-lg">
                Kami melayani berbagai perusahaan otomotif terkemuka seperti Toyota, Honda, Suzuki, Daihatsu, Isuzu, dan Mitsubishi, dengan standar mutu internasional. PT SAI telah mengantongi berbagai sertifikasi seperti <strong>ISO 9001:2015</strong>, <strong>IATF 16949</strong>, dan <strong>ISO 14001</strong>.
              </p>
              <p className="text-gray-700 text-base lg:text-lg">
                Berbasis di Subang, Jawa Barat, perusahaan ini terus mengembangkan inovasi, efisiensi proses, dan pengembangan SDM. Visi kami adalah menjadi perusahaan <strong>wiring harness terbaik di Asia Tenggara</strong> dengan misi mempertahankan kualitas produk, pelayanan pelanggan yang prima, dan kontribusi nyata bagi masyarakat sekitar.
              </p>
            </div>
          </div>
        </div>
        
        {/* Certifications - Redesigned with cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            <span className="border-b-2 border-blue-600 pb-1">Sertifikasi</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-100 w-64 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">ISO</span>
              </div>
              <h4 className="font-bold text-black text-lg mb-2">ISO 9001:2015</h4>
              <p className="text-gray-600 text-sm">Sistem Manajemen Mutu</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-100 w-64 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">IATF</span>
              </div>
              <h4 className="font-bold text-black text-lg mb-2">IATF 16949</h4>
              <p className="text-gray-600 text-sm">Standar Manajemen Otomotif</p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-100 w-64 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">ISO</span>
              </div>
              <h4 className="font-bold text-black text-lg mb-2">ISO 14001</h4>
              <p className="text-gray-600 text-sm">Sistem Manajemen Lingkungan</p>
            </div>
          </div>
        </div>
        
        {/* Clients - Redesigned with logos and centered last item on mobile */}
<div className="mt-16 mb-8">
  <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
    <span className="border-b-2 border-blue-600 pb-1">Klien Kami</span>
  </h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
    {[
      { name: 'Toyota', logo: '/clients/toyota.png' },
      { name: 'Honda', logo: '/clients/honda.png' },
      { name: 'Suzuki', logo: '/clients/suzuki.png' },
      { name: 'Mitsubishi', logo: '/clients/mitsubishi.png' },
      { name: 'Daihatsu', logo: '/clients/daihatsu.png' },
      { name: 'Isuzu', logo: '/clients/isuzu.png' },
    ].map((client, index, arr) => {
      const isLastOdd = arr.length % 2 !== 0 && index === arr.length - 1;

      return (
        <div
          key={client.name}
          className={`bg-gray-50 rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-all ${
            isLastOdd ? 'col-span-2 justify-self-center sm:col-span-1' : ''
          }`}
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      );
    })}
  </div>
</div>


      </div>
    </section>
  );
};

export default TentangAbout;