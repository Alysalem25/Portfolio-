'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

// Simple ScrollSpy implementation
import { useEffect } from 'react';

type ScrollSpyProps = {
  sectionIds: string[];
  onSectionChange: (id: string) => void;
};

function ScrollSpy({ sectionIds, onSectionChange }: ScrollSpyProps) {
  useEffect(() => {
    function onScroll() {
      let currentId = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            currentId = id;
          }
        }
      }
      onSectionChange(currentId);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, onSectionChange]);
  return null;
}

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const navigation = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    // { name: 'Certificates', href: 'certificates' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-slate-800 dark:text-white">
              Aly Salem
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/#${item.href}`}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
                  activeLink === item.href
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
                onClick={() => setActiveLink(item.href)}
              >
                {item.name}
              </Link>
            ))}

            {/* Scroll spy effect */}
            {typeof window !== 'undefined' && (
              <ScrollSpy
                sectionIds={navigation.map((item) => item.href)}
                onSectionChange={setActiveLink}
              />
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-4"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                href={`/#${item.href}`}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
                    pathname === item.href
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-3 mt-2"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}