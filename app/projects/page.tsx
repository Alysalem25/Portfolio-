"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const metadata = {
    title: 'Projects - Aly Salem',
    description: 'Portfolio of projects by Aly Salem showcasing web development and cybersecurity work.',
  };

  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 'Craftex',
      title: 'Craftex',
      year: '2025',
      description: 'A fully deployed, responsive website on a custom domain, optimized for performance and discoverability. It’s clean, simple, and reflects the brand’s identity.',
      tech: ['React', 'Node.js', 'framer-motion', 'Tailwind CSS', 'swiper.js'],
      category: 'Web Development',
      status: 'Completed',
      gitLink: 'https://github.com/Alysalem25/Craftex.git',
      image: '/craftexProject.png'
    },
    {
      id: 'Article-website',
      title: 'Article Website',
      year: '2023',
      description: 'A platform for reading and publishing articles, featuring user authentication and a rich text editor.',
      tech: ['Vue.js', 'Express.js', 'MongoDB', 'Bootstrap', 'TypeScript', 'Tailwind CSS', 'Vercel', 'swiper.js', 'axios', 'bcrypt'],
      category: 'Web Development',
      status: 'Completed',
      gitLink: 'https://github.com/Alysalem25/Article.git',
      image: '/articleProject.png'
    },
    {
      id: 'Online-Shop-for-food',
      title: 'Online-Shop for food',
      year: '2025',
      description: 'A platform for ordering food online, featuring a user-friendly interface.',
      tech: ['Html', 'CSS', 'JavaScript', 'Tailwind CSS'],
      category: 'Web Development',
      status: 'Completed',
      gitLink: 'https://github.com/Alysalem25/Online-Shop-for-Food-Beverage.git',
      image: '/onlineShoppingProject.png'
    },
    {
      id: 'Coffee-Shop',
      title: 'Coffee-Shop',
      year: '2025',
      description: 'A platform for ordering coffee online, featuring a user-friendly interface.',
      tech: ['Next.js', 'framer-motion', 'CSS', 'JavaScript', 'Tailwind CSS'],
      category: 'Web Development',
      status: 'Completed',
      gitLink: 'https://github.com/Alysalem25/Hush',
      image: '/coffee_shop.png'
    },
    {
      id: 'Aqua-Guard',
      title: 'Aqua Guard',
      year: '2023',
      description: 'A NASA Space App Cairo for monitoring water quality, featuring a user-friendly interface.',
      tech: ['react.js', 'three.js', 'CSS', 'JavaScript', 'Tailwind CSS'],
      category: 'Web Development',
      status: 'Completed',
      gitLink: 'https://github.com/Alysalem25/Nasa',
      image: '/aquaGuard.png'
    },
    {
      id: 'universitySystem',
      title: 'University System',
      year: '2025',
      description: 'A java application for managing university operations, featuring a user-friendly interface.',
      tech: ['java', 'data Structures', 'Single linked list', 'Stacks', 'Sorting Algorithms'],
      category: 'Software Development',
      status: 'Completed',
      gitLink: 'https://github.com/Alysalem25/University-system',
      image: '/DSProject.png'
    },
    {
      id: 'Ai-chess',
      title: 'Ai chess',
      year: '2025',
      description: 'A python application for playing chess against an AI opponent.',
      tech: ['python', 'MiniMax', 'AI', 'Pygame'],
      category: 'Software Development',
      status: 'Completed',
      gitLink: 'https://github.com/Alysalem25/AI-Chess',
      image: '/AiChess.png'
    },
  ];

  const categories = ['All', 'Web Development', 'Cybersecurity', 'Software Development'];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A collection of my work in web development and cybersecurity
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-around space-x-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {categories.map((index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory(index)}
                className={
                  selectedCategory === index
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }
              >
                {index}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {(selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory)).map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={project.status === 'Current' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>

                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-slate-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
                </div>
                <Badge variant="outline" className="w-fit">
                  {project.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>
                <Link href={`/projects/${project.id}`}>
                  <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Check out my GitHub for additional projects and contributions to open source
            </p>
            <a href="https://github.com/Alysalem25/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-slate-800 hover:bg-slate-700 text-white">
                <Github className="mr-2 h-4 w-4" />
                Visit GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}