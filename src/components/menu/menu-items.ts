export interface IMenuItems {
  id: number;
  label: string;
  title: string;
  url: string;
}

export const menuItems: IMenuItems[] = [
  { id: 0, label: "home", title: "home page", url: "/" },
  { id: 1, label: "cases", title: "cases page", url: "/cases" },
  { id: 2, label: "about me", title: "about me page", url: "/about-me" },
  { id: 3, label: "contact", title: "contact page", url: "/contact" },
  { id: 4, label: "blog", title: "blog page", url: "/blog" },
];
