import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  shopify,
  bvLogo,
  hcmuteLogo,
  nextjs,
  antd,
  mui,
  nestjs,
  pg,
  brainwave,
  trello,
  movie
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
    hightLight: false,
    note: 'Got it !'
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
    hightLight: true,
    note: 'My main role 😍'
  },
  {
    title: 'Backend Developer',
    icon: backend,
    hightLight: false,
    note: 'Basic'
  },
  {
    title: 'Fullstack Developer',
    icon: creator,
    hightLight: false,
    note: 'Basic'
  }
]

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css,
  // },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Next JS',
    icon: nextjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Ant Design',
    icon: antd
  },
  {
    name: 'Material UI',
    icon: mui
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'NestJS',
    icon: nestjs
  },
  {
    name: 'Postgres SQL',
    icon: pg
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'git',
    icon: git
  }
]

const experiences = [
  {
    title: 'Junior React.js Developer',
    company_name: 'BanVien Corporation',
    icon: bvLogo,
    iconBg: '#E6DEDD',
    date: 'July 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Mentoring intern and fresher developers'
    ]
  },
  {
    title: 'Freelancer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'May 2022 - June 2022',
    points: ['Developing and maintaining e-commerce website using shopify']
  },
  {
    title: 'Student',
    company_name: 'HCMUTE',
    icon: hcmuteLogo,
    iconBg: '#E6DEDD',
    date: 'Sep 2019 - Dec 2023',
    points: [
      'Major Software Engineering',
      'GPA: 3.38/4',
      'Degree: Distinction Bachelor of Engineering'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Kien proved me wrong.',
    name: 'Minh Nguyen',
    designation: 'Sofware Engineer',
    company: 'BanVien Corp',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      'I\'ve never met a web developer who truly cares about their clients\' success like Kien does.',
    name: 'Duy Nguyen',
    designation: 'Project Manager',
    company: 'BanVien Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      'Kien always welcomes feedback and is willing to make changes to ensure the final product meets the client\'s needs.',
    name: 'Khai Truong',
    designation: 'Sofware Engineer',
    company: 'BanVien Corp',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Modern AI Brainwave',
    description: 'Beautiful website for AI chat app with modern UI and fantastic animations',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient'
      },
      {
        name: 'framer motion',
        color: 'pink-text-gradient'
      }
    ],
    image: brainwave,
    source_code_link: 'https://github.com/kien108/brain-wave-mordern-ui',
    url: 'https://brain-wave-mordern-ui.vercel.app'
  },
  {
    name: 'Movie Website',
    description:
      'Web application that enables users to search for movies and view details about them. It uses the TMDb API to fetch movie data.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'TMDb-API',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: movie,
    source_code_link: 'https://github.com/kien108/kien108-movie',
    url: 'https://kmovie108.vercel.app/'
  },
  {
    name: 'Simple DnD Board',
    description: 'Simple board allow drag&drop column and card',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'mui',
        color: 'green-text-gradient'
      },
      {
        name: 'expressjs',
        color: 'pink-text-gradient'
      }
    ],
    image: trello,
    source_code_link: 'https://github.com/kien108/dnd-trello',
    url: 'https://dnd-trello-kien108.vercel.app'
  }
]

export { services, technologies, experiences, testimonials, projects }
