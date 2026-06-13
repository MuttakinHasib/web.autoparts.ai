import type { IShopCategory } from "@/interfaces/category";

interface CategorySeed {
  id: number;
  image: string;
  items: number;
  name: string;
  slug: string;
}

const SEEDS: CategorySeed[] = [
  {
    id: 1,
    name: "Headlights & Lighting",
    slug: "headlights-lighting",
    image: "/images/categories/category-1.jpg",
    items: 21,
  },
  {
    id: 2,
    name: "Fuel System",
    slug: "fuel-system",
    image: "/images/categories/category-2.jpg",
    items: 18,
  },
  {
    id: 3,
    name: "Body Parts",
    slug: "body-parts",
    image: "/images/categories/category-3.jpg",
    items: 24,
  },
  {
    id: 4,
    name: "Interior Parts",
    slug: "interior-parts",
    image: "/images/categories/category-4.jpg",
    items: 15,
  },
  {
    id: 5,
    name: "Tires & Wheels",
    slug: "tires-wheels",
    image: "/images/categories/category-5.jpg",
    items: 30,
  },
  {
    id: 6,
    name: "Engine & Drivetrain",
    slug: "engine-drivetrain",
    image: "/images/categories/category-6.jpg",
    items: 27,
  },
  {
    id: 7,
    name: "Brakes & Suspension",
    slug: "brakes-suspension",
    image: "/images/categories/category-7.jpg",
    items: 22,
  },
  {
    id: 8,
    name: "Oils & Fluids",
    slug: "oils-fluids",
    image: "/images/categories/category-8.jpg",
    items: 12,
  },
];

export const categories: IShopCategory[] = SEEDS.map((seed) => ({
  ...seed,
  type: "shop",
  layout: "products",
  parent: null,
  children: [],
  customFields: {},
}));

export const categoriesBySlug = new Map(categories.map((c) => [c.slug, c]));
