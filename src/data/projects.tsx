import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Link2, FileText } from "lucide-react"; // Import FileText
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiSolidity,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

// Update komponen ProjectsLinks untuk menerima paper
const ProjectsLinks = ({ live, repo, paper }: { live: string; repo?: string; paper?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}

      {/* Menambahkan Tombol Paper */}
      {paper && paper !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={paper}
        >
          <Button variant={"default"} size={"sm"}>
            Read Paper
            <FileText className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Menambahkan skill custom untuk Web3
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // Custom Web3 Skills
  sui: {
    title: "Sui Network",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">Sui</span>,
  },
  move: {
    title: "Move Lang",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">Move</span>,
  },
  solidity: {
    title: "Solidity",
    bg: "black",
    fg: "white",
    icon: <SiSolidity />,
  },
  base: {
    title: "Base Chain",
    bg: "blue",
    fg: "white",
    icon: <span className="font-bold">Base</span>,
  },
  ar: {
    title: "AR / VR",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold">AR</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  paper?: string; // Menjadikan paper opsional (?) agar aman
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "medivault",
    category: "Healthcare / Web3",
    title: "MediVault",
    src: `${BASE_PATH}/medivault.png`,
    screenshots: ["medivault.png"],
    paper: "https://zenodo.org/records/18502578",
    live: "https://medivault.demo",
    github: "https://github.com/laudzakusuma/medivault",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.sui,
        PROJECT_SKILLS.move,
        PROJECT_SKILLS.node,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Decentralized Healthcare on Sui Blockchain
          </TypographyP>
          <TypographyP className="font-mono ">
            MediVault revolutionizes how medical records are stored. By leveraging the
            speed and security of the Sui blockchain, we ensure patient data is
            immutable, secure, and easily accessible via QR codes for verified doctors.
          </TypographyP>
          {/* Tambahkan prop paper di sini */}
          <ProjectsLinks live={this.live} repo={this.github} paper={this.paper} />
          
          <SlideShow
            images={[
              `${BASE_PATH}/medivault.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "cerberus",
    category: "AI Security",
    title: "Cerberus Watchdog",
    src: `${BASE_PATH}/cerberus.png`,
    screenshots: ["cerberus.png"],
    live: "#",
    paper: "https://zenodo.org/records/18287192",
    github: "https://github.com/laudzakusuma/cerberus-watchdog",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI Security Layer for U2U Network
          </TypographyP>
          <TypographyP className="font-mono ">
            Cerberus is a trustless security agent designed for anomaly detection
            and real-time threat monitoring in Web3 environments. It uses Machine Learning
            to predict and prevent attacks before they happen.
          </TypographyP>
          {/* Tambahkan prop paper di sini */}
          <ProjectsLinks live={this.live} repo={this.github} paper={this.paper} />
          
          <SlideShow images={[`${BASE_PATH}/cerberus.png`]} />
        </div>
      );
    },
  },
  {
    id: "suipet",
    category: "GameFi",
    title: "Sui Pet PWA",
    src: `${BASE_PATH}/suipet.png`,
    screenshots: ["suipet.png"],
    live: "#",
    paper: "#",
    github: "https://github.com/laudzakusuma/sui-pet-pwa",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ar,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.sui,
        PROJECT_SKILLS.move,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Tamagotchi meets Pokemon GO on Blockchain
          </TypographyP>
          <TypographyP className="font-mono ">
            A GameFi dApp combining pet simulation with Geolocation and AR.
            Walk your pet in the real world to earn rewards on the Sui Blockchain.
            Features server-side Oracle validation to prevent location spoofing.
          </TypographyP>
          {/* Tambahkan prop paper di sini */}
          <ProjectsLinks live={this.live} repo={this.github} paper={this.paper} />
          <SlideShow images={[`${BASE_PATH}/suipet.png`]} />
        </div>
      );
    },
  },
  {
    id: "onetrade",
    category: "DeFi",
    title: "OneTrade",
    src: `${BASE_PATH}/onetrade.png`,
    screenshots: ["onetrade.png"],
    live: "#",
    paper: "#",
    github: "https://github.com/laudzakusuma/onetrade",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.solidity,
        PROJECT_SKILLS.base,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Gamified Trading on Base
          </TypographyP>
          <TypographyP className="font-mono ">
            A unique DeFi trading platform featuring a 'Swipe to Long/Short' interface.
            Making trading engaging and intuitive while maintaining the security of
            the Base blockchain.
          </TypographyP>
          {/* Tambahkan prop paper di sini */}
          <ProjectsLinks live={this.live} repo={this.github} paper={this.paper} />
          <SlideShow images={[`${BASE_PATH}/onetrade.png`]} />
        </div>
      );
    },
  },
];

export default projects;