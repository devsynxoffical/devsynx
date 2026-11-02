import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEVSYNX Team: Engineers and Leadership",
  description:
    "Meet the DEVSYNX team in Islamabad: leadership, developers and designers who build software, apps and AI systems for clients worldwide.",
  alternates: {
    canonical: "https://devsynx.com/team/",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
