export interface IMenuItems {
  id: number;
  label: string;
  title: string;
  url: string;
}

export const menuItems: IMenuItems[] = [
  { id: 0, label: "home", title: "home page", url: "/" },
  { id: 2, label: "about", title: "about me page", url: "/about" },
  // { id: 1, label: "projectables", title: "cases page", url: "/cases" },
  // { id: 4, label: "readables", title: "blog page", url: "/blog" },
  { id: 5, label: "stickables", title: "collection", url: "/merch" },
  { id: 3, label: "contactables", title: "contact page", url: "/contact" },
];
