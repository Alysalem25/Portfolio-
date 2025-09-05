import Link from 'next/link';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Aly Salem
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-md">
              Full-Stack Web Developer & Cybersecurity Student passionate about building secure, scalable systems and innovative web applications.
            </p>
            <div className="flex space-x-4">
              <Link
                href="mailto:aly.salem@example.com"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/alysalem"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/alysalem"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://leetcode.com/alysalem"
                className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              >
                <Code2 className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-4 uppercase tracking-wide">
              Connect
            </h3>
            <ul className="space-y-2">
              {['Certificates', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            © 2025 Aly Salem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}