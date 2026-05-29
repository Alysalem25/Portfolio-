import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Skills - Aly Salem',
  description: 'Technical skills, tools, and languages of Aly Salem.',
};

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: '💻',
      skills: [
        'JavaScript', 'TypeScript', 'Python', 'Java', 'C#',
        'React', 'Next.js', 'Vue.js', 'Node.js', 'Express.js',
        'Tailwind CSS', 'Bootstrap'
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        'Git', 'MongoDB', 'MySQL',
        'Linux', 'Postman'
      ]
    },
    // {
    //   title: 'Cybersecurity',
    //   icon: '🔐',
    //   skills: [
    //     'Network Security', 'Penetration Testing', 'Vulnerability Assessment',
    //     'OWASP Top 10', 'Encryption', 'Security Auditing', 'Risk Assessment',
    //     'Incident Response', 'Security Awareness'
    //   ]
    // },
    {
      title: 'Soft Skills',
      icon: '🤝',
      skills: [
        'Problem Solving', 'Team Leadership', 'Project Management',
        'Communication', 'Critical Thinking', 'Adaptability',
        'Time Management', 'Mentoring'
      ]
    },
    {
      title: 'Languages Spoken',
      icon: '🌍',
      skills: [
        'Arabic (Native)', 'English (Fluent)'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16" id="skills">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-5xl">
            Skills & Expertise
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and languages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-slate-800 dark:text-white">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-100 hover:bg-purple-100 dark:bg-slate-700 dark:hover:bg-purple-900 text-slate-700 dark:text-slate-300 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

     
      </div>
    </div>
  );
}