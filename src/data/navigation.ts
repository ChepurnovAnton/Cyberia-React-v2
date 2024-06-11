interface INavigation {
  pathName: string;
  title: string;
  id: number;
}


export const navigations: INavigation[] = [
  { id: 1, pathName: "/agency", title: "Агенство" },
  { id: 2, pathName: "/services", title: "Услуги" },
  { id: 3, pathName: "/cases", title: "Кейсы" },
  { id: 4, pathName: "/blog", title: "Блог" },
  { id: 5, pathName: "/contacts", title: "Контакты" },
];