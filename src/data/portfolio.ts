import heroImage from "../assets/hero.webp";
import projectVakul from "../assets/img1.webp";
import projectSchool from "../assets/img3.png";
import projectGlampro from "../assets/img4.png";
import projectKenpetmed from "../assets/img5.png";

export const navItems = [
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "Work", href: "#work" },
  { index: "03", label: "Contact", href: "#contact" }
];

export const skills = [
  "PHP",
  "JavaScript",
  "TypeScript",
  "Vue",
  "React",
  "Node.js",
  "Laravel",
  "Tailwind CSS",
  "MySQL",
  "API Development",
  "GitHub",
  "Remote Collaboration"
];

export const skillGroups = [
  {
    label: "Languages / data",
    items: ["PHP", "JavaScript", "TypeScript", "MySQL"]
  },
  {
    label: "Frameworks / tools",
    items: ["Vue", "React", "Node.js", "Laravel", "Tailwind CSS", "GitHub"]
  },
  {
    label: "Practice",
    items: ["API Development", "Remote Collaboration"]
  }
];

export const stats = [
  {
    label: "Years building remote products",
    value: "4+"
  },
  {
    label: "Frontend to backend delivery",
    value: "Full stack"
  },
  {
    label: "Async teamwork and handoff quality",
    value: "Remote-first"
  }
];

export const projects = [
  {
    name: "Vakul Project",
    href: "https://vakul.tv",
    image: projectVakul,
    summary:
      "Streaming-focused product work with a polished public experience and production-minded delivery."
  },
  {
    name: "ThaPyayNyo",
    href: "https://sms.tpn.edu.mm",
    image: projectSchool,
    summary:
      "Private school management platform built to support structured day-to-day operations."
  },
  {
    name: "Glampro",
    href: "https://cms.browsecretsbeauty.com/",
    image: projectGlampro,
    summary:
      "Salon management system with admin workflows for service, staff, and business coordination."
  },
  {
    name: "Kenpetmed",
    href: "https://cms.kenpetmed.com",
    image: projectKenpetmed,
    summary:
      "Clinic management platform focused on practical internal tools and reliable process support."
  }
];

export const contactLinks = [
  {
    label: "Email",
    value: "singkhantuang97@gmail.com",
    href: "mailto:singkhantuang97@gmail.com"
  },
  {
    label: "Phone",
    value: "+95 9265 826 622",
    href: "tel:+959265826622"
  },
  {
    label: "GitHub",
    value: "github.com/Tuangpi",
    href: "https://github.com/Tuangpi"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/singkhantuang",
    href: "https://www.linkedin.com/in/singkhantuang/"
  },
  {
    label: "Facebook",
    value: "facebook.com/SingKhanTuang",
    href: "https://www.facebook.com/SingKhanTuang"
  }
];

export const profile = {
  heroImage,
  initials: "ST",
  name: "Sing Khan Tuang",
  role: "Full Stack Web Developer",
  timeZone: "Asia/Yangon",
  headline: "Building thoughtful web products with clean systems and modern UX.",
  intro:
    "I’m Sing Khan Tuang, a full stack developer with 4+ years of remote experience building high-quality web and SaaS applications.",
  description:
    "I work across PHP, JavaScript, TypeScript, Vue, Node.js, and API-driven systems with a focus on maintainable code, async collaboration, and polished product delivery.",
  aboutTitle: "A practical builder with a product mindset.",
  aboutBody: [
    "I build maintainable web applications for teams that care about reliability, clarity, and forward momentum. My background includes PHP, JavaScript, TypeScript, Vue, Node.js, API development, and production support across remote environments.",
    "I enjoy creating solid foundations, learning fast, and improving systems over time. Right now I’m continuing to grow in software architecture, scalable design, and AI integration.",
    "I’m especially interested in fully remote opportunities with innovative startups and product-focused companies."
  ],
  resumeHref:
    "https://drive.google.com/file/d/185MC_D8OCYMcBL5iBB2EFF_VEpi-qtWU/view?usp=sharing"
};
