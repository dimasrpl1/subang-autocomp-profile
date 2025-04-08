import React from 'react';
import { Cable, Wrench, Cpu, Settings2 } from 'lucide-react';

const productItems = [
  {
    icon: Cable,
    title: 'Wiring Harness',
    desc: 'Komponen kabel kendaraan dengan kualitas tinggi untuk konektivitas optimal.',
  },
  {
    icon: Wrench,
    title: 'Perakitan Presisi',
    desc: 'Proses produksi modern yang memastikan kualitas dan efisiensi.',
  },
  {
    icon: Cpu,
    title: 'Teknologi Terkini',
    desc: 'Menggunakan mesin dan software terbaru dalam setiap tahapan produksi.',
  },
  {
    icon: Settings2,
    title: 'Kustomisasi Produk',
    desc: 'Solusi sesuai kebutuhan klien industri otomotif global.',
  },
];

const ProductServiceSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Produk & Layanan
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai solusi konektivitas otomotif dengan standar internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:translate-y-[-4px] transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 p-3 rounded-full mb-5">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductServiceSection;