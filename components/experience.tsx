import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export const metadata = {
    title: 'Experience - Aly Salem',
    description: 'Professional experience, internships, training, and scholarships of Aly Salem.',
};

export default function Experience() {
    const experiences = [
        {
            type: 'Training',
            title: 'Full-Stack Developer training',
            company: 'RMZ Tech',
            location: 'offline - Alexandria, Egypt',
            period: '28 Jun 2024 - 15 July 2024',
            description: 'Developed and maintained web applications using Vue.js and PHP(Laravel). Collaborated with senior developers on customer-facing projects.',
            achievements: [
                'Built client project from scratch',
                ' Implemented responsive design for mobile and desktop',
                'Work in teams to deliver features on time',
                'Participated in code reviews and team meetings'
            ],
            skills: ['Vue.js', 'PHP', 'MySQL', 'Git', 'Bootstrap']
        },
        {
            type: 'Scholarship',
            title: 'Bridge Plus Bootcamp',
            company: 'AUC',
            location: 'Offline - Cairo, Egypt',
            period: '2 Weeks',
            description: 'Undergraduate research and thematic summer bootcamp on-campus over two weeks in AUC new Cairo campus, the camp is part of the Bridge Plus program activities which is sponsored by the U.S embassy in Cairo.',
            achievements: [
                'Gave many presentations',
                'Completed 5 roleplays',
                'Participated in group discussions',
                'Attended workshops on leadership and communication'
            ],
            skills: ['Giving Presentations', 'Teamwork', 'Leadership', 'Time Management', 'Communication', 'Attention to Detail', 'Self-Learning']
        },
    ];

    const typeColors = {
        'Internship': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        'Training': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
        'Scholarship': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
    };

    return (
        <div className="min-h-screen py-16" id="experience">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl">
                        Experience
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                        My professional journey, training, and achievements
                    </p>
                    <Link href={`/certificates`}>
                        <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                            View Certificate
                            <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-3">
                                            <Badge className={typeColors[experience.type as keyof typeof typeColors]}>
                                                {experience.type}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl text-slate-800 dark:text-white">
                                            {experience.title}
                                        </CardTitle>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                                            <div className="flex items-center space-x-2">
                                                <Building className="h-4 w-4" />
                                                <span>{experience.company}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="h-4 w-4" />
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                                        <Calendar className="h-4 w-4" />
                                        <span>{experience.period}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {experience.description}
                                </p>

                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-2">
                                        {experience.achievements.map((achievement, achievementIndex) => (
                                            <li key={achievementIndex} className="flex items-start space-x-3">
                                                <span className="flex-shrink-0 w-2 h-2 bg-purple-600 rounded-full mt-2"></span>
                                                <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                                        Skills Developed
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.skills.map((skill, skillIndex) => (
                                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Timeline Visual */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                            Growing Every Day
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            Each experience has contributed to my growth as a developer and cybersecurity professional
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}