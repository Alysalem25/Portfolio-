import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Award, Calendar, Clock, CheckCircle } from 'lucide-react';
import { certificates } from '@/data/certificates';




export async function generateStaticParams() {
  return Object.keys(certificates).map((id) => ({ id }));
}

// const certificate = certificates;
export default function CertificateDetail({ params }: { params: { id: string } }) {
  const certificate = certificates[params.id as keyof typeof certificates];

  if (!certificate) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/certificates"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Certificates
        </Link>

        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Badge variant="outline">{certificate.category}</Badge>
            <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-700">
              <CheckCircle className="mr-1 h-3 w-3" />
              {certificate.status}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl mb-4">
            {certificate.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            {certificate.description}
          </p>
        </div>
        <img src={certificate.image} alt={certificate.title} className="w-full h-full my-10 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110" />

        {/* Certificate Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-slate-800 dark:text-white">Provider</div>
              <div className="text-slate-600 dark:text-slate-300">{certificate.provider}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <div className="font-semibold text-slate-800 dark:text-white">Completed</div>
              <div className="text-slate-600 dark:text-slate-300">{certificate.month} {certificate.year}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-slate-800 dark:text-white">Duration</div>
              <div className="text-slate-600 dark:text-slate-300">{certificate.duration}</div>
            </CardContent>
          </Card>
      
        </div>

        {/* Skills Gained */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Skills Acquired
          </h2>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            Program Overview
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6">
            <pre className="whitespace-pre-wrap text-slate-600 dark:text-slate-300 font-sans">
              {certificate.fullDescription}
            </pre>
          </div>
        </div>

        {/* Modules & Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Course Modules
            </h3>
            <ul className="space-y-3">
              {certificate.modules.map((module, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">{module}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
              Projects Completed
            </h3>
            <ul className="space-y-3">
              {certificate.projects.map((project, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-cyan-600 rounded-full mt-2"></span>
                  <span className="text-slate-600 dark:text-slate-300">{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={certificate.link} target="_blank" rel="noopener noreferrer">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Certificate
            </Button>
          </a>

        </div>
      </div>
    </div>
  );
}