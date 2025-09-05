import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import About from "../components/about";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div className="min-h-screen smooth-scroll">
      {/* Hero Section */}
      <section id='hero' className="relative min-h-screen px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-600/20 dark:from-purple-900/40 dark:to-cyan-600/40"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mt-14">
            <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-6xl lg:text-7xl">
              <span className="block">Aly Salem</span>
              <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Passionate about building secure, scalable systems and innovative web applications.
              Cybersecurity Student with a focus on modern development practices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/projects">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6">
              <Link
                href="Aly Salem.pdf.pdf"
                target='_blank'
                className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </section>
      <About />

      {/* Quick Stats */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15+</div>
              <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">3+</div>
              <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10+</div>
              <div className="text-slate-600 dark:text-slate-300">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">5+</div>
              <div className="text-slate-600 dark:text-slate-300">Certificates</div>
            </div>
          </div>
        </div>
      </section>

      <Skills />


      {/* Featured Projects */}
      <section id='projects' className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Some of my recent work in web development and cybersecurity
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Craftex',
                id: 'Craftex',
                description: 'A fully deployed, responsive website on a custom domain, optimized for performance and discoverability. It’s clean, simple, and reflects the brand’s identity.',
                tech: 'React, Node.js, framer-motion, Tailwind CSS , swiper.js',
                slug: 'craftex',
                image: '/craftexProject.png'
              },
              {
                title: 'Article website',
                id: 'Article-website',
                description: 'A platform for reading and publishing articles, featuring user authentication and a rich text editor.',
                tech: 'Vue.js, Express.js, MongoDB, Bootstrap, swiper.js , axios ,bcrypt',
                slug: 'article-website',
                image: '/articleProject.png'
              },
              {
                title: 'Online-Shop for food',
                id: 'Online-Shop-for-food',
                description: 'A platform for ordering food online, featuring a user-friendly interface.',
                tech: 'Html ,CSS, JavaScript, Tailwind CSS',
                slug: 'online-shop-for-food',
                image: '/onlineShoppingProject.png'
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-4">
                    {project.tech}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to work together?
          </h2>
          <p className="mt-4 text-lg text-purple-100">
            Let's discuss your next project and bring your ideas to life
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100">
                Get In Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section> */}


      <Experience />

      <Contact />


    </div>
  );
}