import Setting from "./setting";

const pages = [
  {
    emoji: "🏠",
    path: "/",
    name: "Home",
  },
  {
    emoji: "📖",
    path: "/about/",
    name: "About",
  },
  {
    emoji: "💓",
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
