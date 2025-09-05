import { link } from "node:fs";

export type Certificate = {
    title: string;
    provider: string;
    year: string;
    month: string;
    description: string;
    fullDescription: string;
    duration: string;
    category: string;
    status: string;
    skills: string[];
    modules: string[];
    projects: string[];
};
export const certificates = {
    'rmz-tech': {
        title: 'Full-Stack Developer Training',
        provider: 'RMZ Tech',
        image: '/RMZTech.jpeg',
        link: 'https://www.linkedin.com/posts/alysalem2_fullstackdev-amidestscholarship-rmztechtraining-activity-7130723770998108160-B3H7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETlS3QBkhR9myOPLm8skje9bTz02rFOotM',
        year: '2024',
        month: 'June',
        description:
            'Completed intensive training on frontend and backend development including building responsive web apps and RESTful APIs.',
        fullDescription: `This intensive training covered both frontend and backend technologies:

• Built responsive web apps using HTML, CSS, JavaScript, Vue.js  
• Developed RESTful APIs using PHP (Laravel) and MySQL  
• Gained experience in debugging and real-world development workflows  
• Learned collaboration practices with Git and version control  
• Applied agile methodologies to complete team projects`,

        duration: '5 months',
        hours: '120 hours',
        category: 'Web Development',
        status: 'Verified',
        skills: ['Vue.js', 'PHP', 'MySQL', 'Git', 'Bootstrap'],
        modules: [
            'Frontend Development with Vue.js',
            'Backend Development with PHP (Laravel)',
            'Database Management with MySQL',
            'Version Control with Git',
            'Debugging and Testing',
            'Capstone Project',
        ],
        projects: ['Article Publishing Platform'],
    },

    'amideast': {
        title: 'Full-Stack Development Scholarship',
        provider: 'Amideast',
        image: '/Amideast.jpg',
        link:'',
        year: '2024',
        month: 'March',
        description:
            'Trained in full-stack technologies and collaborated on team projects with real-world app development.',
        fullDescription: `This program provided a solid foundation in full-stack development:

• Built responsive web apps using HTML, CSS, and JavaScript  
• Implemented backend systems using C#  
• Worked on real-world applications as team projects  
• Enhanced problem-solving and collaboration skills`,

        duration: '2 months',
        category: 'Software Development',
        status: 'Verified',
        skills: ['HTML', 'CSS', 'JavaScript', 'C#', 'SQL', 'Team Collaboration'],
        modules: [
            'Frontend Web Development',
            'Backend Development with C#',
            'Database Basics',
            'Team Collaboration and Git',
            'Capstone Project',
        ],
        projects: ['Real-World Application Development'],
    },

    'bridge-plus-program': {
        title: 'Bridge Plus Program',
        provider: 'American University in Cairo (AUC) / U.S. Embassy',
        image: '/BPP.jpg',
        link: 'https://www.linkedin.com/posts/alysalem2_bridgeplus-aucscholarship-personalgrowth-activity-7133669332965818369-UFTI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETlS3QBkhR9myOPLm8skje9bTz02rFOotM',
        year: '2023',
        month: 'July',
        description:
            'A U.S. Embassy–sponsored scholarship program focused on English, leadership, and soft skills development.',
        fullDescription: `The Bridge Plus Program at AUC was designed to prepare students with essential academic and soft skills:

• Academic English writing and presentation skills  
• Communication and teamwork in an academic context  
• Exposure to leadership, problem-solving, and career development  
• Sponsored by the U.S. Embassy in Cairo  
• Helped bridge the gap between education and professional career pathways`,

        duration: '6 months',
        category: 'Soft Skills',
        status: 'Verified',
        skills: ['English Communication', 'Presentation', 'Teamwork', 'Leadership', 'Career Development'],
        modules: [
            'Academic Writing',
            'Presentation Skills',
            'Leadership Workshops',
            'Career Readiness',
            'Communication Exercises',
        ],
        projects: ['Final Presentation & Career Project'],
    },

    'bridge-plus-campus': {
        title: 'Bridge Plus Campus Bootcamp',
        provider: 'American University in Cairo (AUC)',
        image: '/BPB.jpg',
        link: 'https://www.linkedin.com/posts/alysalem2_bridgeplus-aucscholarship-personalgrowth-activity-7133669332965818369-UFTI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETlS3QBkhR9myOPLm8skje9bTz02rFOotM',
        year: '2023',
        month: 'July',
        description:
            'On-campus undergraduate summer bootcamp as part of the Bridge Plus Program, focused on research and teamwork.',
        fullDescription: `This intensive summer bootcamp was held at AUC New Cairo campus:

• Hands-on undergraduate research and thematic workshops  
• Focused on teamwork, communication, and problem-solving  
• Exposure to academic-style projects in a university environment  
• Conducted entirely in English to enhance fluency and academic communication`,

        duration: '2 weeks',
        category: 'Soft Skills',
        status: 'Verified',
        skills: ['Teamwork', 'Research', 'Presentation', 'Problem-Solving', 'English Communication'],
        modules: [
            'Research Workshops',
            'Team Collaboration',
            'Academic Communication',
            'Problem-Solving Activities',
        ],
        projects: ['Research Presentation at AUC'],
    },

    'nasa': {
        title: 'NASA Space Apps Cairo Hackathon',
        provider: 'NASA / Space Apps Cairo',
        image: '/nasa.jpg',
        link: 'https://www.linkedin.com/posts/alysalem2_aquaguard-hackathonwinners-nasaspaceappscairo-activity-7123066297554264064-6SdZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETlS3QBkhR9myOPLm8skje9bTz02rFOotM',
        year: '2024',
        month: 'October',
        description:
            'Participated in Egypt’s largest hackathon, developing a 3D interactive site using NASA open data.',
        fullDescription: `The NASA Space Apps Hackathon was a global innovation event:

• Collaborated in a team to solve challenges using NASA open data  
• Built a creative 3D interactive website with React.js, Tailwind, and Three.js  
• Learned how to apply space data to real-world problems  
• Enhanced teamwork, problem-solving, and presentation skills`,

        duration: '48 hours (Hackathon)',
        category: 'Competition',
        status: 'Verified',
        skills: ['React.js', 'Three.js', 'TailwindCSS', 'Teamwork', 'Problem-Solving'],
        modules: ['Hackathon Challenge', 'Data Analysis', '3D Visualization', 'Team Presentation'],
        projects: ['3D Interactive Website using NASA Open Data'],
    },

    'OCPC': {
        title: 'Obour Competitive Programming Contest( OCPC )',
        provider: 'Obour Academy',
        image: '/ocpc.jpeg',
        link: 'https://www.linkedin.com/posts/alysalem2_ocpc-competitiveprogramming-teamwork-activity-7248501091695247360-NScY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETlS3QBkhR9myOPLm8skje9bTz02rFOotM',
        year: '2024',
        month: 'October',
        description:
            'Participated in the Obour Competitive Programming Contest (OCPC), tackling challenging programming problems and complex algorithms as part of a collaborative team.',
        fullDescription: `💻 Thrilled to Have Participated in the Obour Competitive Programming Contest (OCPC)! 🚀
I recently had the exciting opportunity to compete in the Obour Competitive Programming Contest (OCPC) alongside an incredible team. This competition pushed us to tackle challenging programming problems, think critically, and solve complex algorithms under pressure.
Working as part of a team in such a high-paced environment taught me the importance of teamwork and collaboration. We combined our skills, communicated effectively, and supported each other through each problem, making sure to leverage our strengths to perform at our best. It was a rewarding experience that not only enhanced my problem-solving skills but also strengthened my ability to work in a collaborative, fast-paced environment.
I'm looking forward to applying these skills to future competitions and projects, and I’m grateful for the opportunity to grow alongside such a talented team!`,
        duration: '4 hours (Competition)',
        category: 'Competition',
        status: 'Verified',
        skills: ['Teamwork', 'Problem-Solving', 'Algorithms', 'C#', 'Critical Thinking', 'Collaboration'],
        modules: ['Competitive Programming', 'Team Collaboration', 'Algorithmic Problem Solving', 'Time Management'],
        projects: [],
    },

    'beamline-for-schools': {
        title: 'Beamline for Schools Competition',
        provider: 'CERN',
        image: '/beamline.jpeg',
        link: 'https://www.linkedin.com/posts/alysalem2_cern-beamlineforschools-science-activity-7248499709248425984-S0Ag?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETlS3QBkhR9myOPLm8skje9bTz02rFOotM',
        year: '2024',
        month: 'June',
        description:
            'Represented Egypt in the Beamline for Schools competition organized by CERN, collaborating on a scientific experiment proposal.',
        fullDescription: `🌍 Proud to Represent Egypt in the Beamline for Schools Competition! 🇪🇬
This year, I had the incredible opportunity to participate in the Beamline for Schools competition, organized by CERN, one of the world’s most prestigious scientific organizations. Our team proudly represented Egypt as we submitted our proposal for a scientific experiment using a particle beamline! 💡🔬
I was fortunate to work alongside an amazing team: Malak Mahmoud, Mohamed A. Bakry, malak agbo, Jassmin Agbo , Omar Hamed, Youssef Mahmoud, and Sajed Reda. Together, we combined our talents and diverse perspectives to create something truly unique. The experience taught us the real power of teamwork, as we collaborated closely, leveraging each member’s strengths to bring our project to life.
Participating in this competition was more than just an academic exercise—it was a chance to dive deep into the world of particle physics and gain invaluable insights from top scientists at CERN. I’m beyond grateful for this journey, which not only sharpened our scientific skills but also strengthened our ability to work together as a cohesive team.
Looking forward to applying these lessons and continuing to explore the fascinating world of physics and technology!
#CERN #BeamlineForSchools #Science #Physics #STEM #Egypt #Innovation #Teamwork #Research`,
        duration: 'Several months',
        category: 'Science Competition',
        status: 'Verified',
        skills: ['Teamwork', 'Research', 'Physics', 'Scientific Communication', 'Collaboration', 'Innovation'],
        modules: [
            'Scientific Proposal Writing',
            'Particle Physics Fundamentals',
            'Team Collaboration',
            'Research Methodology',
            'Presentation Skills',
        ],
        projects: ['Beamline Experiment Proposal'],
    },
};
