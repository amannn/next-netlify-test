export type AppLocale = "en" | "it";

export interface Continent {
  name: string;
  slug: string;
}

export interface Country {
  name: string;
  slug: string;
  continent: Continent;
}

export interface Author {
  name: string;
}

export interface Image {
  url: string;
  description: string;
  details: {
    height?: number;
    width?: number;
  };
}

export interface Post {
  title: string;
  slug: string;
  mainImage: Image;
  description: string;
  href: string;
  author: Author;
  country: Country;
}
