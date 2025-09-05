import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, MapPin, GraduationCap, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About - Aly Salem',
  description: 'Learn more about Aly Salem, a passionate full-stack developer and cybersecurity student.',
};

export default function About() {
  return (
    <div className="min-h-screen py-16" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Passionate developer with a focus on security and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
            <div className="relative w-[210px] h-[210px] sm:w-80 sm:h-80 max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-cyan-600 p-1">
              <div className="w-full h-full bg-slate-200 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
              <img src="/AboutPhoto.jpg" alt="Aly Salem" className="object-cover w-full h-full rounded-2xl" />
              </div>
            </div>
            </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
              Hello, I'm Aly Salem
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a passionate full-stack web developer and cybersecurity student with a strong foundation in modern web technologies. I love creating secure, scalable applications that solve real-world problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in technology started with a curiosity about how things work under the hood. This led me to pursue both web development and cybersecurity, giving me a unique perspective on building applications that are not only functional but also secure.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span className="text-slate-600 dark:text-slate-300">Alexandria, Egypt</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-purple-600" />
                <span className="text-slate-600 dark:text-slate-300">Computer Science Student</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="text-slate-600 dark:text-slate-300">3+ Years Experience</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
              <Link target='_blank' href="/Aly Salem.pdf.pdf">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-12">
            What Drives Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl font-bold">💡</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Innovation</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Always exploring new technologies and pushing the boundaries of what's possible
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 text-xl font-bold">🔒</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Security</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Building applications with security as a fundamental principle, not an afterthought
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl font-bold">🚀</span>
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Growth</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Continuously learning and adapting to new challenges in the ever-evolving tech landscape
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}