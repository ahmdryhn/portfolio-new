export interface ProjectItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  stacks: string[];
  is_featured: boolean;
  is_show: boolean;
  link_demo?: string;
  content: string; // markdown/HTML string
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "MIKA Education Website",
    slug: "elearning-website",
    description: "Micro-credential E-Learning Website named “MIKA Education” developed by utilizing Laravel 11 intergation with Tailwind CSS for large, fast and efficient project management. This website is a media interpretation of the MIKA Platform (Media Visual Communication Children) with training services and online autism communication learning resources support based on micro-credentials.",
    image: "/images/projects/mika-web.png",
    stacks: ["Laravel", "TailwindCSS", "Vite"],
    is_featured: true,
    is_show: true,
    link_demo: "https://mikaeducation.id/",
    content: ``
  },
    {
    id: 2,
    title: "Entative Hub. Project",
    slug: "digital-creative-platform",
    description: "A digital creative platform with gig economy-based digital product agency services and a media aggregator between students as freelancers to work on digital product orders from businesses, with a crowdsourcing ecosystem.",
    image: "/images/projects/entative-hub.png",
    stacks: ["Figma", "Canva", "Adobe Photoshop", "Notion", "Instagram", "Discord"],
    is_featured: true,
    is_show: true,
    link_demo: "https://www.instagram.com/entative.media/",
    content: ``
  },
  {
    id: 3,
    title: "Bakeryou Website",
    slug: "onlineshop-website",
    description: "Case study project, creating a payment gateway website with a one-stop-shop concept for Bakeshop sales services and store operational management through personalized dashboard features. Developed with the integration of Laravel 11 framework as Backend, then React, tailwind and Vite.js for Frontend, to Midtrans for payment gateway configuration.",
    image: "/images/projects/bakeryou-web.png",
    stacks: ["React.js", "TailwindCSS", "Laravel", "Vite"],
    is_featured: false,
    is_show: true,
    link_demo: "https://github.com/orgs/Bakeryou/repositories",
    content: ``
  },
  {
    id: 4,
    title: "Vanatech Website",
    slug: "vanatech-website",
    description: "Website Monitoring and Product Profile for Competition, which contains descriptions, objectives, results and everything related to Vanatech products, and is integrated with the website monitoring system subdomain navigation connected to the nodeMCU module and Blynk cloud server to see the data presentation from product sensors.",
    image: "/images/projects/vanatech-web.jpg",
    stacks: ["Laravel"],
    is_featured: false,
    is_show: true,
    link_demo: "https://www.instagram.com/vanatech.id/",
    content: ``
  },
  {
    id: 5,
    title: "Portfolio Website (Now)",
    slug: "personal-website",
    description: "Personal & portfolio responsive website, built from scratch using Next.js, TypeScript, Tailwind CSS, SWR and Prisma with integrated CRUD, website result insipired and modified from satriabahari.",
    image: "/images/projects/portfolio-web.png",
    stacks: ["TypeScript", "Next.js", "React.js", "TailwindCSS", "PostgreSql", "Prisma"],
    is_featured: false,
    is_show: true,
    link_demo: "/",
    content: ``
  },
  {
    id: 6,
    title: "Portfolio Website (2023)",
    slug: "personal2-website",
    description: "Personal website & portfolio, built from native with HTML & CSS basics.",
    image: "/images/projects/portfolio2-web.png",
    stacks: ["Native", "HTML", "CSS"],
    is_featured: false,
    is_show: true,
    link_demo: "https://ahmdryhn.github.io/myPortfolio-website/",
    content: ``
  },
  {
    id: 7,
    title: "International Student Mobility Program",
    slug: "mobility-program",
    description: "Participated in the 2024 international student mobility program through a collaboration between BEM FST UNAIR 2024 and PM FST UKM 2024 for 7 days, on November 04 - 08, 2024.",
    image: "/images/projects/student-mobility-ukm.jpg",
    stacks: ["",],
    is_featured: false,
    is_show: true,
    link_demo: "https://www.instagram.com/p/DCO49xKyZQP/?img_index=1",
    content: ``
  },
  {
    id: 8,
    title: "Bina Desa FST 2023 Project",
    slug: "bina-desa",
    description: "Conducted a 4-month village development project in Manduro MG village, Ngoro sub-district, Mojokerto district. Carrying out activities with the direction of a sustainable movement as the realization of an Independent Village, in the form of accelerating economic development and governance systems, training in maggot cultivation, empowering BUMDes, making village tourism gates, providing education for elementary and MI children.",
    image: "/images/projects/bina-desa-fst.jpg",
    stacks: ["",],
    is_featured: false,
    is_show: true,
    link_demo: "https://www.instagram.com/reel/CxcAleEgZLy/?utm_source=ig_web_button_share_sheet&igsh=Z2t6czZocGJ2czZz",
    content: ``
  },
  {
    id: 9,
    title: "Pengmas HIMSI 2022 Project",
    slug: "pengmas-himsi",
    description: "Conducting a community service project for elementary school children at SDN Banyu Urip X, for 2 months. Aimed to provide basic knowledge to children in the application of digital technology such as editing in Canva and how to write in Microsoft Word, as preparation for entering the next level.",
    image: "/images/projects/pengmas-himsi.jpg",
    stacks: ["",],
    is_featured: false,
    is_show: true,
    link_demo: "https://www.instagram.com/p/CgdR62VpuA0/?utm_source=ig_web_button_share_sheet&igsh=dnB1bmEwdDF6MTR5/",
    content: ``
  },
];

export const getProjectsData = async (): Promise<ProjectItem[]> => {
  return projects;
};

export const getProjectsDataBySlug = async (
  slug: string
): Promise<ProjectItem | undefined> => {
  return projects.find((project) => project.slug === slug);
};
