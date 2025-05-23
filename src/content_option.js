
import img1 from './assets/images/al1.png';
import img2 from './assets/images/eva.png';
import img3 from './assets/images/ama.png';
import img4 from './assets/images/donation.png';






const logotext = "Dani.";
const meta = {
    title: "Daniel Okwier",
    description: "I’m Daniel Okwier , a Full-stack developer",
};

const introdata = {
    title: " Hi, I'm Daniel Okwier",
    description: "Passionate full-stack engineer crafting user-friendly online environments, turning ideas into reality with code.",
    animated: {
        first: "I love problem-solving",
        second: "I code cool websites",
        third: "I engineer robust applications.",
    },
};

const dataabout = {
    title: "About Me",
    aboutme: "I am a passionate full stack developer with a strong foundation in both front-end and back-end technologies. My curiosity for learning drives me to explore new tools and frameworks, allowing me to adapt quickly to evolving challenges. I thrive in dynamic environments where I can grow as a professional while delivering impactful and efficient solutions. My technical skills include HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB and MySQL. I enjoy tackling complex problems and crafting seamless applications that enhance user experiences.",
};


const services = [
    {
        title: "Frontend Development",
        description: "I specialize in creating engaging and user-friendly interfaces using HTML, CSS, and JavaScript, along with modern frameworks like React. My focus is on optimizing user experience, ensuring accessibility, and implementing responsive designs.",
    },
    {
        title: "Backend Development",
        description: "I excel in backend development, building efficient server-side applications using technologies like Node.js and Express.js. My expertise includes creating APIs, managing databases, and implementing robust security measures to ensure seamless functionality.",
    },
    {
        title: "Fullstack Development",
        description: "I offer comprehensive Fullstack Development services that integrate both frontend and backend capabilities. From designing interactive user interfaces to building scalable server-side solutions, I manage the entire development process to deliver high-quality web applications.",
    },
];


const dataportfolio = [

  {
    img: img4,
    title: "Teawun-charity",
    description: "Developed a responsive donation application that integrates an online payment system. Leveraged React.js to create a dynamic user interface, enabling users to make donations easily. Incorporated Node.js for server-side functionality and utilized MySQL for efficient data management. Styled with Tailwind CSS to ensure a modern and appealing design, providing a seamless experience for users donating through the Chapa payment gateway.",
    link: "",
    github: "https://github.com/Daniel-okwier/Teawun-Charity/tree/newbranch"
  },

  {
    img: img1, 
    title: "Anyuak E-learning",
    description: "Created an online learning platform with high school courses in the local language. Utilized React.js for the frontend, Material-UI and Bootstrap for design, Vite for builds, and deployed on Vercel. Implemented GitHub Actions for CI/CD and automated testing.",
    link: "https://anyuakonline.vercel.app/",
    github: "https://github.com/Daniel-okwier/AnyuakE-learning"
},
  {
    img: img2, 
    title: "Discussion Forum",
   description: "Participated in the development of a full-stack forum web app with user registration, thread creation, and comment posting. Focused on the React frontend, while Node.js and MySQL powered the backend for efficient data storage.",
    link: "https://evangadi-forum-dani.netlify.app/",
    github: "https://github.com/Daniel-okwier/Evangadi-forum-backend"
},
  {
    img: img3, 
    title: "Amazone-clone",
    description: "Cloned the popular Amazon e-commerce app to showcase full-stack development skills. Implemented secure payment processing with Stripe API and created a dynamic product catalog featuring search, filtering, and sorting. Utilized Firebase for backend services, including user authentication.",
    link: "https://amazon-clone-dani.netlify.app/",
    //github: "https://github.com/yourname/project1"
  }
];

const contactConfig = {
  YOUR_EMAIL: process.env.REACT_APP_CONTACT_EMAIL,
  YOUR_FONE: process.env.REACT_APP_CONTACT_PHONE,
  description: "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!",

  // EmailJS Configuration
  YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID, 
  YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
};

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/daniel-okwier-12b90621b/",
    github: "https://github.com/Daniel-okwier",
    facebook: "https://facebook.com",
    tiktok: "https://www.tiktok.com/@hvsslex?lang=en",
    youtube: "https://www.youtube.com/@HvssleX"
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