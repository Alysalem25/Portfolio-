export type Projects = {
    [key: string]: {
        title: string;
        year: string;
        description: string;
        fullDescription: string;
        tech: string[];
        category: string;
        status: string;
        duration: string;
        team: string;
        image: string;
        gitLink: string;
        demoLink: string;
        challenges: string[];
        learnings: string[];
    };
};
export const projects: Projects = {
    'Craftex': {
        title: 'Craftex',
        year: '2025',
        description: 'A fully deployed, responsive website on a custom domain, optimized for performance and discoverability. It’s clean, simple, and reflects the brand’s identity.',
        fullDescription: `this website was developed to deliver the main idea of the brand which is crafting and design . The website is built using modern web technologies to ensure a seamless user experience and optimal performance. Key features include:
        • Custom domain integration for brand consistency
        • About , Mission & Vision ,  Services , Featured Projects , Products
        •  Single-page application (SPA) architecture for fast navigation
    • Integration with social media platforms for broader reach
    • Fast load times with optimized assets
    • SEO best practices for improved search engine ranking
    • Mobile-responsive design for accessibility on all devices

    The project demonstrates my ability to build simple, responsive applications while maintaining security best practices and optimal performance.`,
        tech: ['React', 'Node.js', 'framer-motion', 'Tailwind CSS', 'swiper.js'],
        category: 'Web Development',
        status: 'Completed',
        duration: '1 month',
        team: 'Solo Project',
        image: '/craftexProject.png',
        gitLink: 'https://github.com/Alysalem25/Craftex.git',
        demoLink: 'https://craftexeg.com/',
        challenges: [
            'Implementing a simple responsive design',
            'Ensuring mobile responsiveness across all devices'
        ],
        learnings: [
            'Advanced React patterns and state management',
            'User experience design principles'
        ]
    },
    //     {
    //   title: 'Pearl Travel Group',
    //   id: 'Pearl-Travel-Group',
    //   description: 'Developed a full-stack tourism platform for Pearl Travel Company to manage travel packages, bookings, and user experiences with a scalable and user-friendly system.',
    //   tech: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'swiper.js', 'axios', 'bcrypt'],
    //   category: 'Web Development',
    //   status: 'Completed',
    //   slug: 'pearl-travel-group',
    //   gitLink: 'https://github.com/Alysalem25/pearl-travel-group',
    //   image: '/pearl1.jpeg'
    // },


    'Pearl-Travel-Group': {
        title: 'Pearl Travel Group',
        year: '2026',
        description: 'A full-stack tourism platform designed for managing travel packages, bookings, and enhancing customer travel experiences through a modern digital system.',
        fullDescription: `This project was developed for Pearl Travel Company to digitize and streamline tourism services, including travel package management, booking workflows, and user interaction with available destinations and offers. The system focuses on providing a smooth and intuitive experience for users while maintaining efficient backend operations.

Key features include:
• Travel packages listing with detailed itineraries and pricing
• Booking system with reservation management
• User-friendly interface for exploring destinations
• Admin dashboard for managing trips, offers, and bookings
• Secure backend APIs for data handling and operations
• Responsive design for mobile and desktop users
• Optimized performance for fast navigation and loading

The project demonstrates my ability to build a complete full-stack application that solves real-world business problems in the tourism industry while ensuring scalability, usability, and clean architecture.`,

        tech: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'swiper.js', 'axios', 'bcrypt'],
        category: 'Full Stack Development',
        status: 'Completed',
        duration: '3 months',
        team: 'Hazem, Blair, Aly Salem',
        image: '/pearl1.jpeg',
        gitLink: 'https://github.com/Alysalem25/pearl-travel-group',
        demoLink: 'https://pearltravels.com/',

        challenges: [
            'Designing a scalable structure for managing bookings and travel packages',
            'Handling data consistency between user bookings and admin updates',
            'Building a clean and intuitive UI for non-technical users',
            'Integrating frontend with backend APIs efficiently',
            'Managing team collaboration and task distribution'

        ],

        learnings: [
            'Full-stack development using MERN stack in a real-world scenario',
            'API design and integration between frontend and backend',
            'Database modeling for booking and travel systems',
            'Improved teamwork and agile collaboration skills',
            'Better understanding of user experience in tourism applications'
        ]
    },
    'Article-website': {
        title: 'Article Website',
        year: '2023',
        description: 'A platform for reading and publishing articles, featuring user authentication and a rich text editor.',
        fullDescription: `This article website serves as a comprehensive platform for users to read and publish articles. Key features include:

    • User authentication and role management
          •  Single-page application (SPA) architecture for fast navigation

    • Rich text editor with media embedding
    • Article categorization and tagging
    • Commenting and discussion system
    • Admin dashboard for content moderation
    • Mobile-first responsive design
    • Advanced search and filtering capabilities
    • Wishlist and cart persistence
    • Email automation for order confirmations and shipping

    The platform emphasizes security with encrypted payment processing and user data protection.`,
        tech: ['Vue.js', 'Express.js', 'MongoDB', 'Bootstrap', 'TypeScript', 'Tailwind CSS', 'Vercel', 'swiper.js', 'axios', 'bcrypt'],
        category: 'Web Development',
        status: 'Completed',
        duration: '4 months',
        team: 'Solo Project',
        image: '/articleProject.png',
        gitLink: 'https://github.com/Alysalem25/Article.git',
        demoLink: '',

        challenges: [
            'Implementing secure authentication with role-based permissions',
            'Optimizing database queries for large content volumes',
            'Creating a intuitive admin interface',
            'Ensuring mobile responsiveness across all devices'
        ],
        learnings: [
            'Advanced Vue patterns and state management',
            'Database optimization techniques',
            'Security implementation in web applications',
            'User experience design principles'
        ]
    },
    'Online-Shop-for-food': {
        title: 'Online-Shop for food',
        year: '2025',
        description: 'A platform for ordering food online and featuring a user-friendly interface.',
        fullDescription: `This online food shop provides a seamless ordering experience for users. Key features include:
    
    • Understand and implement HTML5 structure for an e-commerce website.
    • Use CSS3 for styling and responsive design.
    • Implement basic UI components, including navigation bars, product listings, and a contact page.
    • Ensure a mobile-friendly and accessible layout.
    
    `,
        tech: ['Html', 'CSS', 'JavaScript', 'Tailwind CSS'],
        category: 'Web Development',
        status: 'Completed',
        duration: '1 week',
        team: 'Solo Project',
        image: '/onlineShoppingProject.png',
        gitLink: 'https://github.com/Alysalem25/Online-Shop-for-Food-Beverage.git',
        demoLink: '',

        challenges: [
            'Implementing a simple responsive design',
            'Ensuring mobile responsiveness across all devices'
        ],
        learnings: [
            'importance of HTML & CSS & JavaScript',
            'User experience design principles'
        ]
    },
    'Coffee-Shop': {
        title: 'Coffee-Shop',
        year: '2025',
        description: 'A platform for ordering coffee online and featuring a user-friendly interface.',
        fullDescription: `This online coffee shop provides a seamless ordering experience for users. Key features include:

    • Understand and implement Next.js structure for an online coffee shop website.
    • Use Tailwind CSS for styling and responsive design.
    • Implement basic UI components, including navigation bars, product listings, and a contact page.
    • Ensure a mobile-friendly and accessible layout.
    
    `,
        tech: ['Next.js', 'framer-motion', 'CSS', 'JavaScript', 'Tailwind CSS'],
        category: 'Web Development',
        status: 'Completed',
        duration: '1 week',
        team: 'Solo Project',
        image: '/coffee_shop.png',
        gitLink: 'https://github.com/Alysalem25/Hush',
        demoLink: '',

        challenges: [
            'Implementing a simple responsive design',
            'Ensuring mobile responsiveness across all devices'
        ],
        learnings: [
            'importance of HTML & CSS & JavaScript',
            'User experience design principles'
        ]
    },
    'Aqua-Guard': {
        title: 'Aqua Guard',
        year: '2025',
        description: 'A NASA Space App Cairo for monitoring water quality, featuring a user-friendly interface.',
        fullDescription: `This NASA Space App provides a seamless experience for users monitoring water quality. Key features include:

    • Understand and implement Next.js structure for a water quality monitoring website.
    • Use Tailwind CSS for styling and responsive design.
    • Implement basic UI components, including navigation bars, data visualizations, and a contact page.
    • Ensure a mobile-friendly and accessible layout.
    
    `,
        tech: ['react.js', 'three.js', 'CSS', 'JavaScript', 'Tailwind CSS'],
        category: 'Web Development',
        status: 'Completed',
        duration: '2 months',
        team: 'Group Project',
        image: '/aquaGuard.png',
        gitLink: 'https://github.com/Alysalem25/Nasa',
        demoLink: '',

        challenges: [
            'Implementing a simple responsive design',
            'Integrating 3D visualizations with three.js',
            'Collaborating effectively in a team environment',
            'Implementing data visualization best practices',
            'Deliver a functional prototype within a tight deadline',
            'Ensuring mobile responsiveness across all devices'
        ],
        learnings: [
            'Advanced React patterns and state management',
            'Basics of three.js and 3D rendering on the web',
            'Importance of teamwork and communication in project success',
            'User experience design principles'
        ]
    },
    'universitySystem': {
        title: 'University System',
        year: '2025',
        description: 'A java application for managing university operations, Using Data Structures Algorithms.',
        fullDescription: `This university management system provides a seamless experience for users managing academic operations. Key features include:

    • Understand and implement Data Structures for a university management system.
    • Use java for implementing clean code and core functionalities.
    
    `,
        tech: ['java', 'data Structures', 'Single linked list', 'Stacks', 'Sorting Algorithms'],
        category: 'Software Development',
        status: 'Completed',
        duration: '1 month',
        team: 'Group Project',
        image: '/DSProject.png',
        gitLink: 'https://github.com/Alysalem25/Nasa',
        demoLink: '',

        challenges: [
            'Implementing Data Structures effectively',
            'Collaborating effectively in a team environment',
            'Implementing best coding practices',
            'Deliver a functional prototype within a tight deadline',
            'Ensuring code efficiency and scalability'
        ],
        learnings: [
            'Advanced Data Structures and Algorithms',
            'Importance of teamwork and communication in project success',
            'Clean code principles and best practices'
        ]
    },
    'Ai-chess': {
        title: 'AI Chess',
        year: '2025',
        description: 'A python application for playing chess against an AI opponent.',
        fullDescription: `This AI chess application provides a seamless experience for users playing chess against an AI opponent. Key features include:

    • Understand and implement AI algorithms for chess.
    • Use Pygame for creating the game interface.
    • Use python for implementing clean code and core functionalities.

    `,
        tech: ['python', 'AI', 'Pygame', 'MiniMax'],
        category: 'Software Development',
        status: 'Completed',
        duration: '1 month',
        team: 'Group Project',
        image: '/AIChess.png',
        gitLink: 'https://github.com/Alysalem25/AI-Chess',
        demoLink: '',

        challenges: [
            'Implementing AI algorithms effectively',
            'Collaborating effectively in a team environment',
            'Implementing best coding practices',
            'Deliver a functional prototype within a tight deadline',
            'Ensuring code efficiency and scalability'
        ],
        learnings: [
            'Advanced Data Structures and Algorithms',
            'Importance of teamwork and communication in project success',
            'Clean code principles and best practices'
        ]
    },
}