'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Beranda', href: '/' },
      { label: 'Tentang Kami', href: '/tentang' },
      { label: 'Layanan', href: '/layanan' },
      { label: 'Karier', href: '/karier' },
      { label: 'Galeri', href: '/galeri' },
    ]
  },
  {
    title: 'Layanan Kami',
    links: [
      { label: 'Manufaktur', href: '/layanan/manufaktur' },
      { label: 'Konsultasi', href: '/layanan/konsultasi' },
      { label: 'Pengembangan', href: '/layanan/pengembangan' },
    ]
  }
]

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
}

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSection = (title: string) => {
    if (expandedSection === title) {
      setExpandedSection(null);
    } else {
      setExpandedSection(title);
    }
  };

  return (
    <footer className="bg-white text-gray-700 shadow-md">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={footerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/pt_suai1.png"
                alt="Subang Autocomp Logo"
                width={160}
                height={48}
                className="hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-600">
              Kami adalah perusahaan manufaktur otomotif terkemuka yang berkomitmen untuk memberikan solusi berkualitas tinggi bagi industri otomotif Indonesia.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2.5 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2.5 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2.5 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links - Collapsible on Mobile */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants} className="border-b md:border-b-0 border-gray-100 pb-4 md:pb-0">
              <div 
                className="flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => isMobile && toggleSection(section.title)}
              >
                <h3 className="text-gray-800 font-medium mb-4 md:mb-6">{section.title}</h3>
                {isMobile && (
                  <ChevronRight 
                    size={16} 
                    className={`transition-transform duration-300 text-blue-500 ${expandedSection === section.title ? 'rotate-90' : ''}`} 
                  />
                )}
              </div>
              <div className={isMobile && expandedSection !== section.title ? 'hidden' : 'block'}>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <motion.li 
                      key={link.href}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        href={link.href}
                        className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <ChevronRight size={14} className="mr-1.5 text-blue-400" />
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-gray-800 font-medium mb-4 md:mb-6">Hubungi Kami</h3>
            <div className="space-y-4">
              <motion.a
                href="https://goo.gl/maps/your-location"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-600 hover:text-blue-600 transition-colors group"
                whileHover={{ x: 4 }}
              >
                <MapPin size={18} className="mr-3 flex-shrink-0 mt-0.5 text-blue-500" />
                <span className="text-sm leading-relaxed">
                  Jl. Brigjen Katamso No.7, Sukamelang, Kec. Subang, Kabupaten Subang, Jawa Barat 41211
                </span>
              </motion.a>
              <motion.a
                href="tel:+6202607777777"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ x: 4 }}
              >
                <Phone size={18} className="mr-3 text-blue-500" />
                <span className="text-sm">(0260) 7777777</span>
              </motion.a>
              <motion.a
                href="mailto:info@subangautocomp.co.id"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ x: 4 }}
              >
                <Mail size={18} className="mr-3 text-blue-500" />
                <span className="text-sm">info@subangautocomp.co.id</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-100 mt-12 pt-8 text-sm text-center text-gray-500"
        >
          <p>© {new Date().getFullYear()} Subang Autocomp Indonesia. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}