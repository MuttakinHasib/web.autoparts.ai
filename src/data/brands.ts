import type { IBrand } from "@/interfaces/brand";

export const brands: IBrand[] = [
  {
    slug: "bosch",
    name: "Bosch",
    country: "DE",
    image: "/images/brands/brand-1.png",
  },
  {
    slug: "brembo",
    name: "Brembo",
    country: "IT",
    image: "/images/brands/brand-2.png",
  },
  {
    slug: "ngk",
    name: "NGK",
    country: "JP",
    image: "/images/brands/brand-3.png",
  },
  {
    slug: "denso",
    name: "Denso",
    country: "JP",
    image: "/images/brands/brand-4.png",
  },
  {
    slug: "mobil",
    name: "Mobil",
    country: "US",
    image: "/images/brands/brand-5.png",
  },
  {
    slug: "valeo",
    name: "Valeo",
    country: "FR",
    image: "/images/brands/brand-6.png",
  },
];

export const brandsBySlug = new Map(brands.map((b) => [b.slug, b]));
