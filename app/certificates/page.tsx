'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Award, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Certificates() {
  const metadata = {
    title: 'Certificates - Aly Salem',
    description: 'Professional certificates and courses completed by Aly Salem.',
  };


  const certificates = [
    {
      id: 'rmz-tech',
      title: 'Full-Stack Developer Training',
      as: 'Training',
      provider: 'RMZ Tech',
      year: '2024',
      description:
        'Completed intensive training on frontend and backend development including building responsive web apps and RESTful APIs.',
      category: 'Web Development',
      duration: '5 months',
      skills: ['Vue.js', 'PHP', 'MySQL', 'Git', 'Bootstrap'],
      image: '/RMZTech.jpeg',
    },
    {
      id: 'amideast',
      title: 'Full-Stack Development Scholarship',
      as: 'Scholarship',
      provider: 'Amideast',
      year: '2024',
      description:
        'Trained in full-stack technologies and collaborated on team projects with real-world app development.',
      category: 'Software Development',
      duration: '2 months',
      skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'SQL'],
      image: '/Amideast.jpg',
    },
    {
      id: 'bridge-plus-program',
      title: 'Bridge Plus Program',
      as: 'Scholarship',
      provider: 'AUC / U.S. Embassy',
      year: '2023',
      description:
        'Scholarship program focusing on English, leadership, and career development skills.',
      category: 'Soft Skills',
      duration: '6 months',
      skills: ['English Communication', 'Presentation', 'Leadership', 'Career Development'],
      image: '/BPP.jpg',
    },
    {
      id: 'bridge-plus-campus',
      title: 'Bridge Plus Campus Bootcamp',
      as: 'Scholarship',
      provider: 'AUC',
      year: '2023',
      description:
        'On-campus undergraduate summer bootcamp focused on teamwork, research, and communication.',
      category: 'Soft Skills',
      duration: '2 weeks',
      skills: ['Teamwork', 'Research', 'Problem-Solving', 'Academic Communication'],
      image: '/BPB.jpg',
    },
    {
      id: 'nasa',
      title: 'NASA Space Apps Cairo Hackathon',
      as: 'Competition',
      provider: 'NASA / Space Apps Cairo',
      year: '2024',
      description:
        'Participated in Egypt’s largest hackathon, developing a 3D interactive site using NASA open data.',
      category: 'Competition',
      duration: '48 hours',
      skills: ['React.js', 'Three.js', 'TailwindCSS', 'Problem-Solving'],
      image: '/nasa.jpg',
    },
    {
      id: 'OCPC',
      title: 'Obour Competitive Programming Contest (OCPC)',
      as: 'Competition',
      provider: 'Obour Academy',
      year: '2024',
      description:
        'Participated in the Obour Competitive Programming Contest (OCPC), tackling challenging programming problems and complex algorithms as part of a collaborative team.',
      category: 'Competition',
      duration: '4 hours',
      skills: ['Teamwork', 'Problem-Solving', 'Algorithms', 'C#', 'Critical Thinking', 'Collaboration'],
      image: '/ocpc.jpeg',
    },
    {
      id: 'beamline-for-schools',
      title: 'Beamline for Schools Competition',
      as: 'Competition',
      provider: 'Obour Academy',
      year: '2024',
      description:
        'Represented Egypt in the Beamline for Schools competition organized by CERN, collaborating on a scientific experiment proposal.',
      category: 'Competition',
      duration: 'Several months',
      skills: ['Teamwork', 'Research', 'Physics', 'Scientific Communication', 'Collaboration', 'Innovation'],
      image: '/beamline.jpeg',
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState('All');


  const categories = ['All', 'Internship', 'Training', 'Scholarship', 'Competition'];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl">
            Certificates & Training
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Continuous learning through professional certifications and specialized training
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex flex-wrap justify-around space-x-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={category === selectedCategory ? 'bg-purple-600 hover:bg-purple-700' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'All' ? certificates : certificates.filter((cert) => cert.as === selectedCategory)).map((cert) => (
            <Card key={cert.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-slate-800 hover:bg-white">
                    {cert.year}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-fit">
                      {cert.category}
                    </Badge>
                    <CardTitle className="text-lg text-slate-800 dark:text-white">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
                      <Award className="h-4 w-4" />
                      <span>{cert.provider}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm line-clamp-3">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.duration}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{cert.skills.length - 3}
                    </Badge>
                  )}
                </div>
                <Link href={`/certificates/${cert.id}`}>
                  <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                    View Certificate
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-8">
              Certification Stats
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{certificates.length}</div>
                <div className="text-slate-600 dark:text-slate-300">Total Certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">
                  +12
                </div>
                <div className="text-slate-600 dark:text-slate-300">Months of Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {new Set(certificates.flatMap(cert => cert.skills)).size}
                </div>
                <div className="text-slate-600 dark:text-slate-300">Skills Acquired</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}