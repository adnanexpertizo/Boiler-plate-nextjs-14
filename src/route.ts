const allRoutes = {
  home: { name: "Home", href: "/" },
  affiliations: { name: "Affiliations", href: "/affiliation" },
  blog: { name: "Blogs", href: "/blog" },
  clients: { name: "Clients", href: "/client" },
  practices: { name: "Practice Areas", href: "/practice" },
  about: { name: "About", href: "/about" },
  contact: { name: "Contact Us", href: "/contact" },
  career: { name: "Career", href: "/career" },
  login: { name: "LogIn", href: "/auth/login" },
  terms: { name: "Terms of use", href: "/terms" },
  privacyPolicy: { name: "Privacy policy", href: "/privacy-policy" },
  cookiePolicy: { name: "Cookie policy", href: "/cookie-policy" },
};

export const navbarRoutes = [
  allRoutes.home,
  allRoutes.about,
  allRoutes.practices,
  allRoutes.clients,
  allRoutes.affiliations,
  allRoutes.blog,
  allRoutes.contact,
  allRoutes.login,

];



export const footerRoutes = [
  {
    title: "Pages",
    routes: [
      allRoutes.home,
      allRoutes.affiliations,
      allRoutes.blog,
      allRoutes.clients,
      allRoutes.practices,
    ],
  },
  {
    title: "Company",
    routes: [
      allRoutes.about,
      allRoutes.contact,
      allRoutes.career,
    ],
  },
  {
    title: "Legal",
    routes: [
      allRoutes.terms,
      allRoutes.privacyPolicy,
      allRoutes.cookiePolicy,
    ],
  },
];
