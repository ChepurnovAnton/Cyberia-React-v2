interface IGeo {
  lat: null;
  lng: null
}

interface ICategories {
  id: number;
  name: string;
}



interface IProjects {
  id: number,
  title: string,
  slug: string,
  project_url: string | null,
  image: string,
  image_dark: string,
  description: string,
  geo: IGeo
  categories: ICategories[]
}


export const projects: IProjects[] = [
  {
    "id": 2,
    "title": "Foodzo",
    "slug": "foodzo",
    "project_url": null,
    "image": "https://api.test.cyberia.studio/storage/2024/05/01/7a0e7f6cae809a77fb4ef39281ac50e47b399a4f.png",
    "image_dark": "https://api.test.cyberia.studio/storage/2024/05/01/7a0e7f6cae809a77fb4ef39281ac50e47b399a4f.png",
    "description": "Foodzo",
    "geo": {
      "lat": null,
      "lng": null
    },
    "categories": [
      {
        "id": 4,
        "name": "Разработка"
      }
    ]
  },
  {
    "id": 3,
    "title": "Interior Agency",
    "slug": "interior-agency",
    "project_url": null,
    "image": "https://api.test.cyberia.studio/storage/2024/05/01/2ccf85c53f7ac606de4a2b53ace0cb3431b18c11.png",
    "image_dark": "https://api.test.cyberia.studio/storage/2024/05/01/2ccf85c53f7ac606de4a2b53ace0cb3431b18c11.png",
    "description": "Interior Agency",
    "geo": {
      "lat": null,
      "lng": null
    },
    "categories": [
      {
        "id": 5,
        "name": "Мобильные приложения"
      }
    ]
  },
  {
    "id": 4,
    "title": "The one",
    "slug": "the-one",
    "project_url": null,
    "image": "https://api.test.cyberia.studio/storage/2024/05/01/7a8d1e9c83bdf6f7f81bac0d8d1d29d38a62ca55.png",
    "image_dark": "https://api.test.cyberia.studio/storage/2024/05/01/7a8d1e9c83bdf6f7f81bac0d8d1d29d38a62ca55.png",
    "description": "The one",
    "geo": {
      "lat": null,
      "lng": null
    },
    "categories": [
      {
        "id": 4,
        "name": "Разработка"
      }
    ]
  },
  {
    "id": 5,
    "title": "Flowers Store",
    "slug": "flowers-store",
    "project_url": null,
    "image": "https://api.test.cyberia.studio/storage/2024/05/01/d48c1705f17969a76bbbc2945e8b82a396a7b8c4.png",
    "image_dark": "https://api.test.cyberia.studio/storage/2024/05/01/d48c1705f17969a76bbbc2945e8b82a396a7b8c4.png",
    "description": "Flowers Store",
    "geo": {
      "lat": null,
      "lng": null
    },
    "categories": [
      {
        "id": 6,
        "name": "Юзабилити-аудит"
      }
    ]
  },
  {
    "id": 6,
    "title": "Sweater",
    "slug": "sweater",
    "project_url": null,
    "image": "https://api.test.cyberia.studio/storage/2024/05/01/3c779b54cf9cbe91474aeb0dc2c918213d5a194a.png",
    "image_dark": "https://api.test.cyberia.studio/storage/2024/05/01/3c779b54cf9cbe91474aeb0dc2c918213d5a194a.png",
    "description": "Sweater",
    "geo": {
      "lat": null,
      "lng": null
    },
    "categories": [
      {
        "id": 3,
        "name": "Продвижение"
      }
    ]
  },
  {
    "id": 7,
    "title": "Газпром",
    "slug": "gazprom",
    "project_url": null,
    "image": "https://api.test.cyberia.studio/storage/2024/05/01/0da272fb3427d9f040ccc6c2d2dc673114bcd5ef.png",
    "image_dark": "https://api.test.cyberia.studio/storage/2024/05/01/0da272fb3427d9f040ccc6c2d2dc673114bcd5ef.png",
    "description": "Газпром",
    "geo": {
      "lat": null,
      "lng": null
    },
    "categories": [
      {
        "id": 5,
        "name": "Мобильные приложения"
      }
    ]
  }
]