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
    id: "saad-hussain-sajawal",
    name: "Saad Hussain Sajawal",
    role: "Project Manager",
    bio: "Plans and runs client projects from scoping to launch, keeping timelines, budgets and weekly demos on track and keeping clients informed at every milestone.",
    initials: "SS",
    accent: "#0EA5E9",
    image: "/team/saad.webp",
    avatarBg: "#ffffff",
    avatarScale: 1.0,
    objectPosition: "center 30%",
    isLeadership: false,
  },
  {
    id: "asma-khan",
    name: "Asma Khan",
    role: "Social Media Manager",
    bio: "Plans and manages social media content and campaigns for DEVSYNX and its clients, building audiences on Instagram, Facebook, LinkedIn and TikTok.",
    initials: "AK",
    accent: "#E1306C",
    avatarBg: "#E1306C",
    isLeadership: false,
  },
  {
    id: "fizza-amin",
    name: "Fizza Amin",
    role: "Graphic Designer",
    bio: "Designs brand identities, social media creatives, ad visuals and marketing materials that keep every client's brand consistent and recognisable.",
    initials: "FA",
    accent: "#F59E0B",
    avatarBg: "#F59E0B",
    isLeadership: false,
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
