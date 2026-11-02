export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  image?: string;
  avatarBg?: string;
  avatarScale?: number;
  objectPosition?: string;
  isLeadership?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    id: "syed-hassan",
    name: "Syed Hassan Ali Shah",
    role: "CEO & Founder",
    bio: "Leads Devsynx strategy, product vision, and client partnerships, focused on shipping reliable software and AI systems that drive measurable business growth.",
    initials: "SH",
    accent: "#06909D",
    image: "/team/Syedhassan.webp",
    objectPosition: "center 8%",
    isLeadership: true,
  },
  {
    id: "sana-fatima",
    name: "Sana Fatima",
    role: "Co-Founder",
    bio: "Shapes operations, delivery excellence, and team culture, ensuring every engagement runs with clarity, accountability, and consistent quality.",
    initials: "SF",
    accent: "#1a73e8",
    image: "/team/sana.webp",
    avatarBg: "#ffffff",
    avatarScale: 1.15,
    objectPosition: "center 12%",
    isLeadership: true,
  },
  {
    id: "danial-amjad",
    name: "Danial Amjad",
    role: "Flutter Developer",
    bio: "Specializes in high-performance cross-platform mobile app development with Flutter, crafting responsive UI, smooth native animations, and reliable offline-first architectures.",
    initials: "DA",
    accent: "#02569B",
    image: "/team/danial.webp",
    avatarBg: "#ffffff",
    avatarScale: 1.05,
    objectPosition: "center 15%",
    isLeadership: false,
  },
  {
    id: "muhammad-shehreyar",
    name: "Muhammad Shehreyar",
    role: "Full Stack Developer",
    bio: "Architects scalable backend services, high-throughput REST and GraphQL APIs, and reliable database systems integrated with modern React and Next.js applications.",
    initials: "MS",
    accent: "#10A37F",
    image: "/team/shehryar.webp",
    avatarBg: "#ffffff",
    avatarScale: 1.05,
    objectPosition: "center 15%",
    isLeadership: false,
  },
  {
    id: "rana-rehan",
    name: "Rana Rehan",
    role: "Frontend Developer",
    bio: "Builds modern, accessible, and pixel-perfect web interfaces using Next.js, React, and modern CSS, with a strong focus on micro-interactions and Core Web Vitals optimization.",
    initials: "RR",
    accent: "#6366F1",
    image: "/team/rehan.webp",
    avatarBg: "#ffffff",
    avatarScale: 1.0,
    objectPosition: "center top",
    isLeadership: false,
  },
];
