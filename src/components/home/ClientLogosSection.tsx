'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Toyota', logo: '/clients/toyota.png' },
  { name: 'Honda', logo: '/clients/honda.png' },
  { name: 'Suzuki', logo: '/clients/suzuki.png' },
  { name: 'Mitsubishi', logo: '/clients/mitsubishi.png' },
  { name: 'Daihatsu', logo: '/clients/daihatsu.png' },
  { name: 'Isuzu', logo: '/clients/isuzu.png' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const ClientLogosSection = () => {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Klien & Partner Kami
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
        <p className="text-gray-600 mb-10">
          Dipercaya oleh berbagai brand otomotif ternama di dunia.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pembatas bawah */}

    </section>
  );
};

export default ClientLogosSection;
