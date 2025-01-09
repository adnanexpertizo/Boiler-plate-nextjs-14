const allRoutes = {
  home: { name: "Home", href: "/" },
  affiliations: { name: "Affiliations", href: "/" },
  blog: { name: "Blogs", href: "/" },
  clients: { name: "Clients", href: "/" },
  practices: { name: "Practice Areas", href: "/practice" },
  about: { name: "About", href: "/" },
  contact: { name: "Contact Us", href: "/" },
  career: { name: "Career", href: "/" },
  login: { name: "LogIn", href: "/auth/login" },
  terms: { name: "Terms of use", href: "/" }
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
 
];
