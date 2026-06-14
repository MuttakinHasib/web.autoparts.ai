import { brandsBySlug } from "@/data/brands";
import { categoriesBySlug } from "@/data/categories";
import type {
  IProduct,
  IProductStock,
  IProductType,
} from "@/interfaces/product";

const DEFAULT_TYPE: IProductType = {
  name: "Default",
  slug: "default",
  attributeGroups: [],
};

interface ProductSeed {
  badges?: string[];
  brand?: string;
  category?: string;
  compareAtPrice?: number;
  id: number;
  name: string;
  price: number;
  rating?: number;
  reviews?: number;
  slug: string;
  stock?: IProductStock;
}

function makeProduct(seed: ProductSeed): IProduct {
  const partNumber = `SP-${String(seed.id).padStart(5, "0")}`;
  return {
    id: seed.id,
    name: seed.name,
    slug: seed.slug,
    excerpt: `${seed.name} — quality replacement part with a 2-year warranty.`,
    description: `The ${seed.name} is an OEM-grade replacement engineered for reliable fit and long service life.`,
    partNumber,
    sku: partNumber,
    stock: seed.stock ?? "in-stock",
    price: seed.price,
    compareAtPrice: seed.compareAtPrice ?? null,
    images: [
      `/images/products/product-${seed.id}-1.jpg`,
      `/images/products/product-${seed.id}-2.jpg`,
    ],
    badges: seed.badges ?? [],
    rating: seed.rating ?? 4,
    reviews: seed.reviews ?? 0,
    compatibility: "all",
    brand: seed.brand ? (brandsBySlug.get(seed.brand) ?? null) : null,
    tags: [],
    type: DEFAULT_TYPE,
    categories: seed.category
      ? [categoriesBySlug.get(seed.category)].filter((c) => c != null)
      : [],
    attributes: [],
    options: [],
  };
}

const SEEDS: ProductSeed[] = [
  {
    id: 1,
    name: "Brake Disc Set, Front Axle",
    slug: "brake-disc-set-front-axle",
    price: 129,
    compareAtPrice: 159,
    brand: "brembo",
    category: "brakes-suspension",
    rating: 4.5,
    reviews: 28,
    badges: ["sale"],
  },
  {
    id: 2,
    name: "Spark Plug Iridium",
    slug: "spark-plug-iridium",
    price: 12.5,
    brand: "ngk",
    category: "engine-drivetrain",
    rating: 5,
    reviews: 64,
    badges: ["hot"],
  },
  {
    id: 3,
    name: "Oil Filter Cartridge",
    slug: "oil-filter-cartridge",
    price: 8.99,
    brand: "bosch",
    category: "oils-fluids",
    rating: 4,
    reviews: 12,
  },
  {
    id: 4,
    name: "LED Headlight Bulb H7",
    slug: "led-headlight-bulb-h7",
    price: 44.9,
    compareAtPrice: 59.9,
    brand: "valeo",
    category: "headlights-lighting",
    rating: 4.5,
    reviews: 41,
    badges: ["sale"],
  },
  {
    id: 5,
    name: "Electric Fuel Pump",
    slug: "electric-fuel-pump",
    price: 89,
    brand: "denso",
    category: "fuel-system",
    rating: 4,
    reviews: 9,
    badges: ["new"],
  },
  {
    id: 6,
    name: "Front Bumper Cover",
    slug: "front-bumper-cover",
    price: 215,
    brand: "valeo",
    category: "body-parts",
    rating: 3.5,
    reviews: 6,
  },
  {
    id: 7,
    name: "Cabin Air Filter",
    slug: "cabin-air-filter",
    price: 15.75,
    brand: "bosch",
    category: "interior-parts",
    rating: 4.5,
    reviews: 33,
  },
  {
    id: 8,
    name: 'Alloy Wheel 17"',
    slug: "alloy-wheel-17",
    price: 178,
    compareAtPrice: 199,
    category: "tires-wheels",
    rating: 4,
    reviews: 17,
    badges: ["sale"],
  },
  {
    id: 9,
    name: "Synthetic Motor Oil 5W-30",
    slug: "synthetic-motor-oil-5w30",
    price: 34.5,
    brand: "mobil",
    category: "oils-fluids",
    rating: 5,
    reviews: 88,
  },
  {
    id: 10,
    name: "Ignition Coil Pack",
    slug: "ignition-coil-pack",
    price: 56,
    brand: "denso",
    category: "engine-drivetrain",
    rating: 4,
    reviews: 21,
  },
  {
    id: 11,
    name: "Fog Light Assembly",
    slug: "fog-light-assembly",
    price: 67.25,
    brand: "valeo",
    category: "headlights-lighting",
    rating: 3.5,
    reviews: 8,
  },
  {
    id: 12,
    name: "Brake Pad Set, Ceramic",
    slug: "brake-pad-set-ceramic",
    price: 49.9,
    brand: "brembo",
    category: "brakes-suspension",
    rating: 4.5,
    reviews: 52,
    badges: ["hot"],
  },
  {
    id: 13,
    name: "Radiator Coolant Hose",
    slug: "radiator-coolant-hose",
    price: 22.4,
    brand: "bosch",
    category: "engine-drivetrain",
    rating: 4,
    reviews: 5,
    stock: "on-backorder",
  },
  {
    id: 14,
    name: "Shock Absorber, Rear",
    slug: "shock-absorber-rear",
    price: 95,
    category: "brakes-suspension",
    rating: 4,
    reviews: 14,
  },
  {
    id: 15,
    name: "Windshield Wiper Blades",
    slug: "windshield-wiper-blades",
    price: 18.99,
    brand: "bosch",
    category: "interior-parts",
    rating: 4.5,
    reviews: 73,
    badges: ["new"],
  },
  {
    id: 16,
    name: "Performance Air Filter",
    slug: "performance-air-filter",
    price: 39,
    compareAtPrice: 49,
    category: "engine-drivetrain",
    rating: 4,
    reviews: 26,
    badges: ["sale"],
    stock: "out-of-stock",
  },
];

export const products: IProduct[] = SEEDS.map(makeProduct);

export const productsBySlug = new Map(products.map((p) => [p.slug, p]));
