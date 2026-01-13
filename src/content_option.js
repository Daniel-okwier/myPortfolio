import img1 from './assets/images/al1.png';
import img4 from './assets/images/dona.png';
import img5 from './assets/images/tpms.png'; 
import img6 from './assets/images/zion.png'; 

const logotext = "Dani.";

const meta = { title: "Daniel Okweir | Full-Stack Software Engineer", description: "Daniel Okweir is a Full-Stack Software Engineer from Gambella, Ethiopia, with an Anyuak heritage. He builds scalable, high-performance web applications and APIs using React, Node.js, MongoDB, MySQL, and modern frontend technologies.", };

const introdata = {
  title: "Hi, I'm Daniel Okweir",
  description:
    "Full-Stack Software Engineer focused on building scalable applications, clean APIs, and high-impact digital products.",
  animated: {
    first: "I build scalable applications",
    second: "I design modern user experiences",
    third: "I solve real-world problems with code",
  },
};

const dataabout = {
  title: "About Me",
  aboutme:
    "I am a Full-Stack Software Engineer with hands-on experience building production-ready web applications from concept to deployment. I specialize in React-based frontends, RESTful backend systems using Node.js and Express, and data-driven solutions powered by MongoDB and MySQL. I enjoy solving complex problems, optimizing performance, and delivering clean, maintainable code that creates real business value.",
};

const services = [
  {
    title: "Frontend Engineering",
    description:
      "I build modern, accessible, and responsive user interfaces using React, Tailwind CSS, and modern JavaScript. My focus is on performance, usability, and clean component architecture.",
  },
  {
    title: "Backend Engineering",
    description:
      "I design and implement secure, scalable backend systems using Node.js and Express, including REST APIs, authentication, and database architecture.",
  },
  {
    title: "Full-Stack Solutions",
    description:
      "From frontend to backend and deployment, I deliver complete web solutions that are scalable, maintainable, and optimized for real-world use.",
  },
];

const dataportfolio = [
  {
    img: img4,
    title: "Donation Platform",
    description:
      "Designed and developed a secure full-stack donation platform with authentication, transaction tracking, and admin management. Integrated Chapa payment gateway, built REST APIs with Node.js and Express, and used MySQL for reliable data storage. Optimized frontend performance using React and Tailwind CSS.",
    link: "https://charity-app-gules.vercel.app/",
    github: "https://github.com/Daniel-okwier/charity-app",
  },
  {
    img: img5,
    title: "Tuberculosis Patient Management System (TPMS)",
    description:
      "Final-year graduation project: a healthcare management system for tracking TB patients, appointments, and treatment progress. Implemented role-based access control, analytics dashboards, and secure APIs using React, Redux, Node.js, Express, and MongoDB.",
    link: "https://tpms-iota.vercel.app/",
    github: "https://github.com/Daniel-okwier/tpms",
  },
  {
    img: img1,
    title: "Anyuak E-Learning Platform",
    description:
      "Built an online learning platform supporting local-language education with adaptive learning features, course management, and student dashboards. Developed using React, Vite, and Tailwind CSS with CI/CD pipelines and cloud deployment.",
    link: "https://anyuakonline.vercel.app/",
    github: "https://github.com/Daniel-okwier/AnyuakE-learning",
  },
  {
    img: img6,
    title: "Zion Market Landing Page",
    description:
      "Redesigned and rebuilt a modern, conversion-focused marketplace landing page with instant search filtering, category navigation, and SEO optimization. Focused on advanced UI/UX patterns and performance using React, Tailwind CSS, and Vite.",
    link: "https://zion-market-rouge.vercel.app/",
    github: "https://github.com/Daniel-okwier/zion-market",
  },
];

const contactConfig = {
  YOUR_EMAIL: process.env.REACT_APP_CONTACT_EMAIL,
  YOUR_FONE: process.env.REACT_APP_CONTACT_PHONE,
  description:
    "Interested in working together or discussing opportunities? Let’s connect.",
  YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

const socialprofils = {
  linkedin: "https://www.linkedin.com/in/daniel-okweir/",
  github: "https://github.com/Daniel-okwier",
    //x: "https://x.com/DanielOkwier"
};

export {
  meta,
  dataabout,
  dataportfolio,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
