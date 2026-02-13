'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside (optional, good UX)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo p-30">
         {/* Desktop navigation MUTIKS<span style={{ color: 'var(--c-accent)' }}>.</span>*/}
                       <Image
                         src="../images/mgi-logo.png"
                         alt="logo"
                         width={150}
                         height={100}
                         
                         unoptimized
                       />
        </Link>

        {/* Desktop navigation */}
        <nav className="main-nav">
          <ul>
            <li>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive('/about') ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className={isActive('/services') ? 'active' : ''}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className={isActive('/projects') ? 'active' : ''}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle – structured hamburger */}
        <button
          ref={toggleRef}
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Menu"
        >
          <span className="hamburger-line top"></span>
          <span className="hamburger-line middle"></span>
          <span className="hamburger-line bottom"></span>
        </button>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`mobile-menu ${menuOpen ? 'open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className="mobile-nav">
            <ul>
              <li>
                <Link href="/" className={isActive('/') ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className={isActive('/services') ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className={isActive('/projects') ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}