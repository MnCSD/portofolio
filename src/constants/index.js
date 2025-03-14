import {
  meta,
  shopify,
  starbucks,
  tesla,
  ads,
  loreal,
  bewise,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  google_docs,
  miro,
  care,
  youtube,
  uber,
  thesis,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "FullStack Web Developer",
    company_name: "ADS Solutions",
    icon: ads,
    iconBg: "white",
    date: "August 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FullStack Web Developer",
    company_name: "L'Oreal",
    icon: loreal,
    iconBg: "#edc531",
    date: "March 2023 - March 2024",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Built a travel booking app, a recycling management platform, and a parking lot reservation system using Next.js and related technologies.",
      "Designed intuitive UI/UX experiences, ensuring seamless user interactions and high-quality product development through collaboration.",
      "Implemented responsive design principles and ensured cross-browser compatibility for optimal performance.",
      "Conducted code reviews, provided constructive feedback, and maintained best practices for scalable and maintainable codebases.",
    ],
  },
  {
    title: "Power Platform Consultant",
    company_name: "BEWISE SA",
    icon: bewise,
    iconBg: "#E83882",
    date: "March 2024 - September 2024",
    points: [
      "Implemented and customized Power Platform solutions, including Power Apps, Power Automate, and Power BI, to meet business requirements.",
      "Developed scalable and efficient workflows to automate business processes and improve operational efficiency.",
      "Designed and optimized user-friendly applications with a focus on seamless UI/UX experiences.",
      "Integrated Power Platform solutions with various data sources, including SharePoint, Dataverse, and third-party APIs.",
      "Provided technical guidance, conducted training sessions, and collaborated with stakeholders to ensure successful implementation.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/MnCSD",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/marios-nikolopoulos-40a541216/",
  },
];

export const projects = [
  {
    iconUrl: google_docs,
    theme: "btn-back-white",
    name: "Google Docs Clone",
    description:
      "Developed a web application that replicates the core features of Google Docs, enabling users to create, edit, and share documents in real-time.",
    link: "https://google-docs-khaki.vercel.app",
    github_link: "https://github.com/MnCSD/google-docs",
  },
  {
    iconUrl: miro,
    theme: "btn-back-yellow",
    name: "Miro Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://miro-two.vercel.app",
    github_link: "https://github.com/MnCSD/miro",
  },
  {
    iconUrl: care,
    theme: "btn-back-blue",
    name: "Healthcare Application",
    description:
      "Developed a healthcare application that connects patients with doctors, enabling users to book appointments, access medical records.",
    link: "https://healthcare-three-alpha.vercel.app/",
    github_link: "https://github.com/MnCSD/youtube",
  },
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "Full Stack Youtube Clone",
    description:
      "Developed a full-stack replica of the popular video-sharing platform YouTube, enabling users to upload, watch, and share videos.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: uber,
    theme: "btn-back-black",
    name: "Uber Clone",
    description:
      "Developed a full-stack replica of the popular ride-sharing app Uber, enabling users to book rides, track drivers, and make payments.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: thesis,
    theme: "btn-back-green",
    name: "Tutorly - FullStack Educational AI Educator(Thesis Project)",
    description:
      "Developed a full-stack educational platform that leverages AI to provide personalized learning experiences for students.",
    link: "https://thesis-jet.vercel.app/",
    github_link: "https://github.com/MnCSD/thesis",
  },
];
