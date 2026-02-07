import type { Course } from "@/types/course";
import courseImage from "@/images/course-image.png";
import heroImage from "@/images/heroImage.png";
import webDev from "@/images/courseDetails/web-Dev.png";
import dsa from "@/images/courseDetails/dsa.png";
import devops from "@/images/courseDetails/devops.png";
import mlAi from "@/images/courseDetails/mlAi.png";
import web3 from "@/images/courseDetails/web3.png";
import solanaWeb3 from "@/images/courseDetails/solana-Web3.png";
export const courses: Course[] = [
  {
    id: 1,
    picture: courseImage,
    title: "Learn-Web Combined Bootcamp",
    heroDescription:
      "Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI (Every Saturday) Web3 (Every Sunday)",
    description:
      "Master real-world engineering skills from zero to production. Build scalable web apps, deploy on cloud infrastructure, and create blockchain applications with hands-on mentorship.",

    price: 160,
    discount: 34,

    tags: [
      "Web3 Fundamentals",
      "Cloud Computing",
      "React & Node.js",
      "Full Stack Development",
    ],

    instructor: {
      name: "Pallav Sharma",
      role: "Senior Engineer & Mentor",
      avatar: heroImage,
    },

    syllabus: [
      {
        title: "Web Dev(Every Friday)",
        image: webDev,
      },
      {
        title: "Devops (Every Friday)",
        image: devops,
      },
      {
        title: "Machine Learning and AI (Every Saturday)",
        image: mlAi,
      },
      {
        title: "Web3 (Every Sunday)",
        image: web3,
      },
      {
        title: "DSA (Every Thursday)",
        image: dsa,
      },
    ],
  },
  {
    id: 2,
    picture: courseImage,
    title: "Web Dev + Devops Bootcamp",
    heroDescription: "Web dev Devops",
    description:
      "Master real-world engineering skills from zero to production. Build scalable web apps, deploy on cloud infrastructure, and create blockchain applications with hands-on mentorship.",

    price: 160,
    discount: 34,

    tags: [
      "Web3 Fundamentals",
      "Cloud Computing",
      "React & Node.js",
      "Full Stack Development",
    ],

    instructor: {
      name: "Pallav Sharma",
      role: "Senior Engineer & Mentor",
      avatar: heroImage,
    },

    syllabus: [
      {
        title: "Web Dev(Every Friday)",
        image: webDev,
      },
      {
        title: "Devops (Every Friday)",
        image: devops,
      },
    ],
  },
  {
    id: 3,
    picture: courseImage,
    title: "Web3 Bootcamp",
    heroDescription: "Complete Solana and Web3 Bootcamp",
    description:
      "Master real-world engineering skills from zero to production. Build scalable web apps, deploy on cloud infrastructure, and create blockchain applications with hands-on mentorship.",
    price: 140,
    discount: 34,

    tags: [
      "Web3 Fundamentals",
      "Cloud Computing",
      "React & Node.js",
      "Full Stack Development",
    ],

    instructor: {
      name: "Pallav Sharma",
      role: "Senior Engineer & Mentor",
      avatar: heroImage,
    },

    syllabus: [
      {
        title: "Complete Solana and Web3 Bootcamp",
        image: solanaWeb3,
      },
    ],
  },
  {
    id: 4,
    picture: courseImage,
    title: "AI and ML Bootcamp",
    heroDescription: "AI and ML Syllabus",
    description:
      "Master real-world engineering skills from zero to production. Build scalable web apps, deploy on cloud infrastructure, and create blockchain applications with hands-on mentorship.",
    price: 160,
    discount: 34,

    tags: [
      "Web3 Fundamentals",
      "Cloud Computing",
      "React & Node.js",
      "Full Stack Development",
    ],

    instructor: {
      name: "Pallav Sharma",
      role: "Senior Engineer & Mentor",
      avatar: heroImage,
    },

    syllabus: [
      {
        title: "AI and ML Syllabus",
        image: mlAi,
      },
    ],
  },
];
