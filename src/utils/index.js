import Image from "next/image";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3,
  FaSass,
} from "react-icons/fa";

export const projects = [
  {
    id: "11211",
    title: "FreeFusion Academy",
    fullTitle: "FreeFusion Academy",
    category: "Landing",
    date: "2023",
    src: "/projects/freefusion.jpg",
    link: "https://freefusionpro.netlify.app/",
    main: "/projects/youth/logo.webp",
    screenshot: "/projects/youthvision-header.png",
    description: `The Youth Vision Festival site, built with React.js and GSAP, uses smooth animations and a responsive design to deliver an engaging way to explore event and nomies.`,
    mainColor: "rgb(143,63,71)",
    textColor: "#ffffffc3",
  },
  {
    id: "111",
    title: "Youth Vision",
    fullTitle: "Youth Vision - Online Film Festival",
    category: "Landing",
    date: "2024",
    src: "/projects/youth-banner-2.jpg",
    link: "https://youthvision.netlify.app/",
    main: "/projects/youth/logo.webp",
    screenshot: "/projects/youthvision-header.png",
    description: `The Youth Vision Festival site, built with React.js and GSAP, uses smooth animations and a responsive design to deliver an engaging way to explore event and nomies.`,
    mainColor: "rgb(143,63,71)",
    textColor: "#ffffffc3",
  },
  {
    id: "331",
    title: "ChicPalette",
    fullTitle: "ChicPalette - Online Fashion Week",
    category: "Web App",
    date: "2024",
    src: "/projects/chic.jpg",
    link: "https://chicpalette.netlify.app/",
    screenshot: "/projects/chicpalette-header.png",
    main: "/projects/chicpalette/logo.png",
    description: `A responsive platform where users share fashion looks via photos or Reels. Features include user / admin roles, 18+ content moderation, and full profile customization.`,
    mainColor: "rgb(123,5,3)",
    textColor: "#fff",
  },
  {
    id: "6564",
    title: "Campay",
    fullTitle: "Campay Travel",
    category: "Landing",
    date: "2024",
    src: "/projects/campay.jpg",
    link: "https://campay.netlify.app",
    description: `A fully responsive landing page built with Next.js and Tailwind CSS. Features GSAP-powered eye-catching animations and full performance optimization.`,
    mainColor: "#000",
    textColor: "#fff",
  },
  {
    id: "12131314511",
    title: "Samurai's Odyssey",
    fullTitle: "Samurai's Odyssey",
    category: "Landing",
    date: "2025",
    src: "/projects/samurais-banner.jpg",
    link: "https://samuraisodyssey.com",
    main: "/projects/samurais/logo.png",
    description: `A responsive, animated landing page for Samurai's Odyssey (Q4 2025 release). Built with React and Framer Motion. Fully optimized for all devices.`,
    mainColor: "rgb(255, 155, 95)",
    textColor: "#000",
  },
  {
    id: "121344311",
    title: "Zenlify",
    fullTitle: "Zenlify",
    category: "Landing",
    date: "2025",
    src: "/projects/zenlify-banner.jpg",
    link: "https://zenlify.netlify.app",
    main: "/projects/zenlify/logo.png",
    description: `A fully responsive landing page built with Next.js and Tailwind CSS. Features GSAP-powered eye-catching animations and full performance optimization.`,
    mainColor: "rgb(236, 255, 103)",
    textColor: "#000",
  },
  {
    id: "87695453456780856746",
    title: "BuyBitArt",
    fullTitle: "BuyBitArt Ecommerce",
    category: "Ecommerce",
    date: "2025",
    src: "/projects/buybitart.jpg",
    link: "https://buybitart.com",
    description: `A fully responsive landing page built with Next.js and Tailwind CSS. Features GSAP-powered eye-catching animations and full performance optimization.`,
    mainColor: "#000",
    textColor: "#fff",
  },
  {
    id: "876956780856746",
    title: "11Web Studio",
    fullTitle: "11Gen Web Studio",
    category: "Website",
    date: "2025",
    src: "/projects/studio.jpg",
    link: "https://studio.elevengen.com",
    description: `A fully responsive landing page built with Next.js and Tailwind CSS. Features GSAP-powered eye-catching animations and full performance optimization.`,
    mainColor: "#000",
    textColor: "#fff",
  },
  {
    id: "8769780856746",
    title: "Norn",
    fullTitle: "Norn",
    category: "Landing & App",
    date: "2025",
    src: "/projects/norn.jpg",
    link: "https://norn.world",
    description: `A fully responsive landing page built with Next.js and Tailwind CSS. Features GSAP-powered eye-catching animations and full performance optimization.`,
    mainColor: "#b0e1ff",
    textColor: "#161616",
  },
  {
    id: "5655679645",
    title: "11Gen",
    fullTitle: "11Gen",
    category: "Website",
    date: "2025",
    src: "/projects/11gen.jpg",
    link: "https://elevengen.com",
    description: `A fully responsive landing page built with Next.js and Tailwind CSS. Features GSAP-powered eye-catching animations and full performance optimization.`,
    mainColor: "#000",
    textColor: "#fff",
  },
];

export const aboutInfo = [
  {
    title: "About Me",
    description: `I build fullstack web apps with a focus on performance, clean
                  architecture, and user experience. I enjoy working on real products
                  - from early MVPs to scaling stable systems. Outside of coding, I’m
                  into volleyball, fitness, acting, singing, and entrepreneurship -
                  anything that pushes creativity and growth.`,
  },
  {
    title: "Experience",
    jobs: [
      {
        company: "Kyron",
        link: "https://kyron.digital",
        position: "Founder & CEO",
        logo: "/experience/kyron.jpg",
        date: "Aug 2025 - Present",
      },
      {
        company: "11Gen",
        link: "https://elevengen.com",
        position: "Founder & CEO",
        logo: "/experience/11Gen.jpg",
        date: "Oct 2024 - Present",
      },
      {
        company: "11Gen Web Studio",
        link: "https://studio.elevengen.com",
        position: "Founder & Fullstack Dev",
        logo: "/experience/11Web.jpg",
        date: "Oct 2024 - Present",
      },
      {
        company: "FreeFusion Academy",
        link: "https://freefusionpro.netlify.app",
        position: "Founder & Mentor",
        logo: "/experience/freefusion.jpg",
        date: "Aug 2023 - Dec 2023",
      },
      {
        company: "Freelance",
        link: "https://freelancehunt.com/freelancer/Artixx_.html",
        position: "Fullstack Developer",
        logo: "/experience/fiverr.png",
        date: "May 2023 - Sep 2024",
      },
      {
        company: "Freelance",
        link: "https://freelancehunt.com/freelancer/Artixx_.html",
        position: "Frontend Developer",
        logo: "/experience/freelance.png",
        date: "Nov 2022 - May 2023",
      },
    ],
  },
  {
    title: "Tech Skills",
    stack: [
      {
        name: "JavaScript",
        icon: <FaJs color="#f0db4e" />,
      },
      {
        name: "TypeScript",
        icon: (
          <Image
            src="/assets/typescript.webp"
            width={15}
            height={15}
            alt="typescript"
            className="object-contain"
          />
        ),
      },
      {
        name: "Three JS",
        icon: (
          <Image
            src="/assets/three.png"
            width={15}
            height={15}
            alt="three js"
            className="object-contain"
          />
        ),
      },
      {
        name: "React JS",
        icon: <FaReact color="#00d9ff" />,
      },
      {
        name: "Redux",
        icon: (
          <Image
            src="/assets/redux.webp"
            width={15}
            height={15}
            alt="redux"
            className="object-contain"
          />
        ),
      },
      {
        name: "Mobx",
        icon: (
          <Image
            src="/assets/mobx.png"
            width={15}
            height={15}
            alt="mobx"
            className="object-contain"
          />
        ),
      },
      {
        name: "GSAP",
        icon: (
          <Image
            src="/assets/gsap.png"
            width={15}
            height={15}
            alt="gsap"
            className="object-contain"
          />
        ),
      },
      {
        name: "Framer Motion",
        icon: (
          <Image
            src="/assets/framer.png"
            width={15}
            height={15}
            alt="framer motion"
            className="object-contain"
          />
        ),
      },
      {
        name: "Node JS",
        icon: <FaNodeJs color="#83ce23" />,
      },
      {
        name: "Next JS",
        icon: (
          <Image
            src="/assets/nextjs.png"
            width={16}
            height={16}
            alt="nextjs"
            className="object-contain"
          />
        ),
      },
      {
        name: "React Native",
        icon: <FaReact color="#00d9ff" />,
      },
      {
        name: "Expo",
        icon: (
          <Image
            src="/assets/expo.png"
            width={15}
            height={15}
            alt="expo"
            className="object-contain"
          />
        ),
      },
      {
        name: "Express",
        icon: (
          <Image
            src="/assets/Express.png"
            width={15}
            height={15}
            alt="express"
            className="object-contain"
          />
        ),
      },
      {
        name: "Docker",
        icon: <FaDocker color="#2697ef" />,
      },
      {
        name: "MongoDB",
        icon: (
          <Image
            src="/assets/mongo.png"
            width={15}
            height={15}
            alt="mongodb"
            className="object-contain"
          />
        ),
      },
      {
        name: "Prisma",
        icon: (
          <Image
            src="/assets/prisma.png"
            width={15}
            height={15}
            alt="prisma"
            className="object-contain"
          />
        ),
      },
      {
        name: "HTML",
        icon: <FaHtml5 color="#f06529" />,
      },
      {
        name: "CSS",
        icon: <FaCss3 color="#2965f1" />,
      },
      {
        name: "SASS",
        icon: <FaSass color="#cc6699" />,
      },
      {
        name: "TailwindCSS",
        icon: (
          <Image
            src="/assets/tailwind.png"
            width={15}
            height={15}
            alt="tailwindcss"
            className="object-contain"
          />
        ),
      },
      {
        name: "Figma",
        icon: (
          <Image
            src="/assets/figma.png"
            width={15}
            height={15}
            alt="figma"
            className="object-contain"
          />
        ),
      },
      {
        name: "Photoshop",
        icon: (
          <Image
            src="/assets/photoshop.png"
            width={15}
            height={15}
            alt="photoshop"
            className="object-contain"
          />
        ),
      },
      {
        name: "Blender",
        icon: (
          <Image
            src="/assets/blender.png"
            width={15}
            height={15}
            alt="blender"
            className="object-contain"
          />
        ),
      },
      {
        name: "Spline",
        icon: (
          <Image
            src="/assets/spline.webp"
            width={15}
            height={15}
            alt="spline"
            className="object-contain"
          />
        ),
      },
      {
        name: "Stripe",
        icon: (
          <Image
            src="/assets/stripe.webp"
            width={15}
            height={15}
            alt="stripe"
            className="object-contain"
          />
        ),
      },
      {
        name: "Git",
        icon: (
          <Image
            src="/assets/git.webp"
            width={15}
            height={15}
            alt="git"
            className="object-contain"
          />
        ),
      },
      {
        name: "Mac",
        icon: (
          <Image
            src="/assets/mac.png"
            width={15}
            height={15}
            alt="mac"
            className="object-contain w-auto h-auto"
          />
        ),
      },
      {
        name: "Linux",
        icon: (
          <Image
            src="/assets/linux.png"
            width={15}
            height={15}
            alt="linux"
            className="object-contain"
          />
        ),
      },
      {
        name: "Windows",
        icon: (
          <Image
            src="/assets/windows.png"
            width={15}
            height={15}
            alt="windows"
            className="object-contain"
          />
        ),
      },
    ],
  },
];
