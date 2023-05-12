import { Post } from "types/global";

const ITALY = {
  it: {
    name: "Italia",
    slug: "italy",
    continent: {
      name: "Europa",
      slug: "europe",
    },
  },
  en: {
    name: "Italy",
    slug: "italy",
    continent: {
      name: "Europe",
      slug: "europe",
    },
  },
};

export const POSTS_IN_ITALIAN: Post[] = [
  {
    title: "Un post a caso",
    description: "Una descrizione a caso di un post",
    href: "/europe/italy/un-post-a-caso",
    slug: "a-random-post",
    author: {
      name: "John Doe",
    },
    country: ITALY.it,
    mainImage: {
      url: "https://i.natgeofe.com/n/075e4f53-f271-4f7a-855a-5eccdba43587/01_Europe.jpg",
      description: "random image",
      details: {
        height: 120,
        width: 120,
      },
    },
  },
  {
    title: "Un altro post a caso",
    description: "Un altra descrizione a caso di un post",
    href: "/europe/italy/un-altro-post-a-caso",
    slug: "another-random-post",
    author: {
      name: "John Doe",
    },
    country: ITALY.it,
    mainImage: {
      url: "https://i.natgeofe.com/n/075e4f53-f271-4f7a-855a-5eccdba43587/01_Europe.jpg",
      description: "random image",
      details: {
        height: 120,
        width: 120,
      },
    },
  },
];

export const POSTS_IN_ENGLISH: Post[] = [
  {
    title: "A random post",
    description: "A random post description",
    href: "/europe/italy/a-random-post",
    slug: "a-random-post",
    author: {
      name: "John Doe",
    },
    country: ITALY.en,
    mainImage: {
      url: "https://i.natgeofe.com/n/075e4f53-f271-4f7a-855a-5eccdba43587/01_Europe.jpg",
      description: "random image",
      details: {
        height: 120,
        width: 120,
      },
    },
  },
  {
    title: "Another random post",
    description: "Another random description of another random post",
    href: "/europe/italy/another-random-post",
    slug: "another-random-post",
    author: {
      name: "John Doe",
    },
    country: ITALY.en,
    mainImage: {
      url: "https://i.natgeofe.com/n/075e4f53-f271-4f7a-855a-5eccdba43587/01_Europe.jpg",
      description: "random image",
      details: {
        height: 120,
        width: 120,
      },
    },
  },
];
