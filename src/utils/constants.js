import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
  TbBrandTailwind,
  TbBellBolt,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiSelenium,
  SiJest,
  SiKubernetes,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode, FaStackOverflow } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
  BsTerminalDash,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics, FcWebcam } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Testing",
    icon: BsTerminalDash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Web Design",
    icon: FcWebcam,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  
  {
    interest: "Search Engine Optimization",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: TbBrandTailwind,
  },

  {
    name: "Agile Method",
    icon: TbBellBolt,
  },
  
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
  },

  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Selinium",
    icon: SiSelenium,
  },
  {
    name: "Jest",
    icon: SiJest,
  }
  
];

export const workData = [
  

  {
    company: "NX3 Corporation",
    designation: "React JS Developer",
    duration: "May 2022 - Nov 2022",
    companyImg: "1ds.jpg",
    description: (
      <>
        <ul> 
        <li>Front-end development using React JS to create engaging web applications with emerging and updated technologies</li>
          <li>Implementing new features and functionalities based on design specifications.</li>
          <li>Optimizing code for performance and efficiency.</li>
          <li>Troubleshooting and resolving bugs to ensure a seamless user experience.</li>
          <li>Implementing new features and functionalities based on design specifications.</li>
        </ul>
      </>
    ),
  }, {
    company: "Systems Limited",
    designation: "Software Engineer",
    duration: "Oct 2021 - Apr 2022",
    companyImg: "fmr.jpg",
    description: (
      <>
        <ul> 
        <li>Software development, coding, and programming and integrating new features into existing software products </li>
          <li>Fixing bugs and ensuring software quality and analyzing user needs and proposing effective solutions of requirements. </li>
          <li>Creating comprehensive documentationand managing projects and adhering to timelines.</li>
          <li>Staying updated with emerging technologies </li>
        </ul>
      </>
    ),
  }, {
    company: "Supernet E Solutions (Pvt) Ltd",
    designation: "Junior Software Developer",
    duration: "Nov 2020 - Sep 2021",
    companyImg: "dpd.jpg",
    description: (
      <>
        <ul> 
          <li>Assisting in software development and coding tasks.Supporting developers in integrating new features.</li>
          <li>Participating in bug fixing and software testing efforts and gaining hands-on experience in analyzing user requirements.</li>
          <li>Collaborating with the development team on projects.learning and applying best practices under guidance</li>
          <li>Contributing to documentation,client meeting and project coordination </li>
        </ul>
      </>
    ),
  },

];

export const projectsData = [

  {
    type: "WEB-APP",
    title: "Chat Application",
    image: "chat-app",
    link: "https://chat-application-2.netlify.app/",
    source: "https://github.com/mairaperveen/chat-app",
  },
  {
    
    type: "WEB-APP",
    title: "Gericht",
    image: "gericht",
    link: "https://mairaperveen.github.io/gericht/",
    source: "https://github.com/mairaperveen/gericht",
  },
  {
    type: "WEB-APP",
    title: "Loop Studio",
    image: "landing-page",
    link: "https://mairaperveen.github.io/loopstudios/triffstudios/index.html",
    source: "https://github.com/mairaperveen/loopstudios",
  },
  {
    type: "WEB-APP",
    title: "GPT-3",
    image: "gpt3",
    link: "https://mairaperveen.github.io/gpt3/",
    source: "https://github.com/mairaperveen/gpt3",
  },
  {
    type: "WEB-APP",
    title: "SyraAesthetics",
    image: "guess-game",
    link: "https://mairaperveen.github.io/SyraAesthetics/SyraAesthetics1/treatments/microneedling-pep-face/index.html",
    source: "https://github.com/mairaperveen/SyraAesthetics",
  },
  {
    type: "WEB-APP",
    title: "Youtube Clone",
    image: "youtube clone",
    link: "https://youtube-clone-maira.vercel.app/",
    source: "https://github.com/mairaperveen/youtube-clone",
  },

  {
    type: "PROJECT",
    title: "Richt Spa",
    image: "richt",
    link: "https://mairaperveen.github.io/richtspa/",
    source: "https://github.com/mairaperveen/richtspa",
  },
  {
    type: "PROJECT",
    title: "Notion Korea",
    image: "notion korea",
    link: "https://mairaperveen.github.io/notion_korean/members/index.html",
    source: "https://github.com/mairaperveen/notion_korean",
  },
  {
    type: "PROJECT",
    title: "Portfolio",
    image: "portfolio",
    link: "https://mairaperveen.github.io/portfolio/",
    source: "https://github.com/mairaperveen/portfolio",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/mairaperveen",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://medium.com/@maira.qadir96/",
    icon: FaMediumM,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
    
  },
  {
    href: "https://www.linkedin.com/in/mairaperveen/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://stackoverflow.com/users/22235568/maira-perveen",
    icon: FaStackOverflow,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "https://hashnode.com/@maira302",
    icon: FaHashnode,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
];

export const query = `
query GetUserArticles($page: Int = 0) {
  user(username: "vaheed") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;
