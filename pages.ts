import Setting from "./setting";

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about/",
    name: "About",
  },
  {
    path: "/contact/",
    name: "Contact",
  },
].map((page) => {
  return {
    path: `${Setting.basePath}${page.path}`,
    name: `${page.name}`,
  }
});

export default pages;
