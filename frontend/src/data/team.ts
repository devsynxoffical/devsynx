export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: string;
  isLeadership?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    id: "syed-hassan",
    name: "Syed Hassan Ali Shah",
    role: "CEO & Founder",
    bio: "Leads Devsynx strategy, product vision, and client partnerships — focused on shipping reliable software and AI systems that drive measurable business growth.",
    initials: "SH",
    accent: "#06909D",
    isLeadership: true,
  },
  {
    id: "sana-fatima",
    name: "Sana Fatima",
    role: "Co-Founder",
    bio: "Shapes operations, delivery excellence, and team culture — ensuring every engagement runs with clarity, accountability, and consistent quality.",
    initials: "SF",
    accent: "#1a73e8",
    isLeadership: true,
  },
  {
    id: "zeeshan-awan",
    name: "Zeeshan Awan",
    role: "Medical Billing Specialist",
    bio: "Brings deep healthcare revenue-cycle expertise — helping clinics and medical practices streamline billing workflows, claims, and compliance.",
    initials: "ZA",
    accent: "#7C3AED",
  },
  {
    id: "tooba-ahmed",
    name: "Tooba Ahmed",
    role: "Business Development Manager",
    bio: "Connects businesses with the right technology solutions — guiding discovery, proposals, and long-term partnerships across global markets.",
    initials: "TA",
    accent: "#FDBD02",
  },
];
