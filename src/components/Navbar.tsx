'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { 
    label: 'Layanan', 
    href: '/layanan',
    dropdownItems: [
      { label: 'Manufaktur', href: '/layanan/manufaktur' },
      { label: 'Konsultasi', href: '/layanan/konsultasi' },
      { label: 'Pengembangan', href: '/layanan/pengembangan' },
    ]
  },
  { label: 'Karier', href: '/karier' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [hoverDropdown, setHoverDropdown] = useState<number | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  
  // Animation variants with improved transitions
  const navbarVariants = {
    initial: { 
      height: 90,
      backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent when at top
    },
    scrolled: { 
      height: 70,
      backgroundColor: 'rgba(255, 255, 255, 0.98)', // Solid white when scrolled
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
    }
  }

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      scale: 0.96,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] 
      }
    }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
      transition: { duration: 0.2 }
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  }

  const buttonVariants = {
    open: { 
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      top: scrolled ? '14px' : '24px',
      right: '16px'
    },
    closed: {
      backgroundColor: 'transparent',
      top: 'auto',
      right: 'auto'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when path changes
    setMobileMenuOpen(false)
    
    // Close dropdowns when path changes
    setActiveDropdown(null)
    setHoverDropdown(null)
  }, [pathname])

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
  }

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [mobileMenuOpen])

  return (
    <>
      {/* Gradient overlay for top of page - only shows when not scrolled */}
      <div 
        className={`fixed top-0 left-0 w-full h-32 z-40 pointer-events-none transition-opacity duration-500 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
        }}
      />

      <motion.nav 
        className="fixed w-full z-50"
        initial="initial"
        animate={scrolled ? "scrolled" : "initial"}
        variants={navbarVariants}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo with enhanced animation */}
            <Link href="/" className="relative z-10">
              <motion.div 
                className="relative w-28 h-10 lg:w-36 lg:h-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/suai1.png"
                  alt="Subang Autocomp Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - text color adjusted for transparency */}
<div className="hidden lg:flex items-center space-x-3">
  {navItems.map((item, index) => (
    <div key={item.href} className="relative group" 
      onMouseEnter={() => setHoverDropdown(index)}
      onMouseLeave={() => setHoverDropdown(null)}
    >
      {item.dropdownItems ? (
        <div className="flex flex-col">
          <button 
            className={`px-5 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${
              pathname.includes(item.href) && pathname !== '/'
                ? 'text-blue-700 bg-blue-50/60'
                : scrolled 
                  ? 'text-gray-800 hover:bg-gray-50 hover:text-blue-700' 
                  : 'text-gray-200 hover:text-white hover:bg-black/20'
            }`}
            onClick={() => toggleDropdown(index)}
          >
            {item.label}
            <div className="ml-1">
              <ChevronDown size={16} />
            </div>
          </button>
          
          {/* Desktop Dropdown Menu with consistent colors */}
          <AnimatePresence>
            {hoverDropdown === index && (
              <motion.div
                className="absolute pt-3 w-60 top-full right-0"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
              >
                <motion.div
                  className="bg-white rounded-xl shadow-xl ring-1 ring-gray-200 overflow-hidden border border-gray-100"
                  variants={staggerChildren}
                  initial="hidden"
                  animate="show"
                >
                  {item.dropdownItems.map((dropdownItem) => (
                    <motion.div key={dropdownItem.href} variants={childVariants}>
                      <Link
                        href={dropdownItem.href}
                        className={`flex items-center px-6 py-3.5 text-sm border-l-2 transition-all duration-200 ${
                          pathname === dropdownItem.href
                            ? 'border-l-blue-600 text-blue-700 bg-blue-50/60 font-medium'
                            : 'border-l-transparent text-gray-900 hover:bg-blue-50/60'
                        }`}
                      >
                        <span className="mr-2 text-blue-600 opacity-80">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        </span>
                        {dropdownItem.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div>
          <Link
            href={item.href}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              pathname === item.href
                ? scrolled 
                    ? 'text-blue-700 relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-2/3 after:bg-blue-600 after:rounded-full' 
                    : 'text-white relative after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-0.5 after:w-2/3 after:bg-white after:rounded-full'
                : scrolled 
                    ? 'text-gray-800 hover:text-blue-700 hover:bg-blue-50/40' 
                    : 'text-gray-200 hover:text-white hover:bg-black/20'
            }`}
          >
            {item.label}
          </Link>
        </div>
      )}
    </div>
  ))}
</div>
            
            {/* Mobile menu button - adjusted for transparency */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-lg z-50 flex items-center justify-center ${
                mobileMenuOpen ? 'text-red-600' : scrolled ? 'text-gray-700' : 'text-gray-300'
              }`}
              variants={buttonVariants}
              animate={mobileMenuOpen ? 'open' : 'closed'}
              initial="closed"
              whileTap={{ scale: 0.95 }}
              style={{ 
                touchAction: 'none',
                width: '40px',
                height: '40px'
              }}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              <motion.div
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {mobileMenuOpen ? (
                  <X size={24} strokeWidth={2} />
                ) : (
                  <Menu size={24} strokeWidth={2} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              ref={mobileMenuRef}
              className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex flex-col h-full pt-20">
                {/* Logo in mobile menu with improved animation */}
                <motion.div 
                  className="py-6 px-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="relative w-36 h-12 mx-auto">
                    <Image
                      src="/suai1.png"
                      alt="Subang Autocomp Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
                
                {/* Navigation items */}
                <motion.div 
                  className="flex-1 px-4 overflow-y-auto"
                  variants={staggerChildren}
                  initial="hidden"
                  animate="show"
                >
                  {navItems.map((item, index) => (
                    <motion.div 
                      key={item.href}
                      className="px-2 mb-1"
                      variants={childVariants}
                    >
                      {item.dropdownItems ? (
                        <div className="mb-2">
                          <motion.button
                            className={`w-full flex justify-between items-center px-4 py-3.5 text-base font-medium rounded-lg ${
                              pathname.includes(item.href) && pathname !== '/' 
                              ? 'text-blue-700 bg-blue-50' 
                              : 'text-gray-800 hover:bg-gray-50'
                            } transition-all duration-200`}
                            onClick={() => toggleDropdown(index)}
                            whileTap={{ scale: 0.98 }}
                            whileHover={{ backgroundColor: '#F9FAFB' }}
                            aria-expanded={activeDropdown === index}
                            aria-controls={`dropdown-${index}`}
                          >
                            {item.label}
                            <motion.div
                              animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown 
                                size={16} 
                                className={activeDropdown === index ? 'text-blue-600' : ''} 
                              />
                            </motion.div>
                          </motion.button>
                          
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.div 
                                id={`dropdown-${index}`}
                                className="mt-1 mb-2 ml-4 bg-gray-50 rounded-lg py-2 border-l-2 border-blue-100"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                  <motion.div
                                    key={dropdownItem.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                      duration: 0.3,
                                      delay: dropdownIndex * 0.1
                                    }}
                                  >
                                    <Link
                                      href={dropdownItem.href}
                                      className={`flex items-center px-6 py-3.5 text-sm ${
                                        pathname === dropdownItem.href
                                          ? 'text-blue-700 bg-blue-50/70 font-medium'
                                          : 'text-gray-700 hover:text-blue-700 hover:bg-gray-100/70'
                                      } rounded-md mx-2 transition-all duration-200`}
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <motion.div
                                        initial={{ x: -5, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.3, delay: 0.2 + dropdownIndex * 0.1 }}
                                        className="text-blue-600 opacity-80 mr-2"
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                      </motion.div>
                                      {dropdownItem.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <motion.div
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={item.href}
                            className={`block px-4 py-3.5 mb-1 text-base font-medium rounded-lg transition-all duration-200 ${
                              pathname === item.href
                                ? 'text-blue-700 bg-blue-50'
                                : 'text-gray-800 hover:bg-gray-50 hover:text-blue-700'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Footer copyright - simplified */}
                <div className="py-4 px-6 text-center text-gray-500 text-xs border-t border-gray-100">
                  © {new Date().getFullYear()} Subang Autocomp Indonesia
                </div>
              </div>

              {/* Improved backdrop */}
              <motion.div 
                className="fixed inset-0 bg-black/5 -z-10" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}