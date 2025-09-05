import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Wrench } from 'lucide-react';
import { projects } from '@/data/projects';
// const projects = {
  // This CMS project was developed to address the growing need for secure, user-friendly content management solutions. The system includes:

  //   • Multi-role user authentication with JWT tokens
  //   • Rich text editor with media embedding capabilities
  //   • SEO-friendly URL generation and meta tag management
  //   • Real-time collaborative editing
  //   • Automated content backup and version control
  //   • Mobile-responsive admin dashboard
  //   • API-first architecture for headless CMS functionality

  //   The project demonstrates my ability to build complex, full-stack applications while maintaining security best practices and optimal performance.

  // • Multi-role user authentication with JWT tokens
  // • Rich text editor with media embedding capabilities
  // • SEO-friendly URL generation and meta tag management
  // • Real-time collaborative editing
  // • Automated content backup and version control
  // • Mobile-responsive admin dashboard
  // • API-first architecture for headless CMS functionality
  //  challenges: [
  //   'Implementing secure authentication with role-based permissions',
  //   'Optimizing database queries for large content volumes',
  //   'Creating a intuitive admin interface',
  //   'Ensuring mobile responsiveness across all devices'
  // ],
  // learnings: [
  //   'Advanced React patterns and state management',
  //   'Database optimization techniques',
  //   'Security implementation in web applications',
  //   'User experience design principles'
  // ]

// };

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Badge variant="outline">{project.category}</Badge>
            <Badge variant={project.status === 'Current' ? 'default' : 'secondary'}>
              {project.status}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>
        <img src={project.image} alt={project.title} className="w-full h-full my-10 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110" />

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <span className="font-semibold text-slate-800 dark:text-white">Timeline</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300">{project.year} • {project.duration}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-2">
              <User className="h-5 w-5 text-cyan-600" />
              <span className="font-semibold text-slate-800 dark:text-white">Team</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300">{project.team}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Wrench className="h-5 w-5 text-purple-600" />
              <span className="font-semibold text-slate-800 dark:text-white">Technologies</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300">{project.tech.length} tools used</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
              <pre className="whitespace-pre-wrap text-slate-600 dark:text-slate-300 font-sans">
                {project.fullDescription}
              </pre>
            </div>
          </div>
        </div>

        {/* Challenges & Learnings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Key Challenges
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                  <span className="text-slate-600 dark:text-slate-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              What I Learned
            </h3>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-cyan-600 rounded-full mt-2"></span>
                  <span className="text-slate-600 dark:text-slate-300">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`${project.gitLink}`} target="_blank" rel="noopener noreferrer">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Github className="h-4 w-4" />

              View Source Code
            </Button>
          </a>
          {
            project.demoLink ? (
              <a href={`${project.demoLink}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            ) : null
          }
        </div>
      </div>
    </div>
  );
}