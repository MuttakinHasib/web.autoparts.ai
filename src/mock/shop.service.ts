import { categories, categoriesBySlug } from "@/data/categories";
import { products, productsBySlug } from "@/data/products";
import type { IShopCategory } from "@/interfaces/category";
import type { IProduct, IProductsList } from "@/interfaces/product";
import { delay } from "@/mock/delay";

export interface GetProductsListOptions {
  category?: string;
  limit?: number;
  page?: number;
  sort?: string;
}

const SORTERS: Record<string, (a: IProduct, b: IProduct) => number> = {
  default: (a, b) => a.id - b.id,
  name_asc: (a, b) => a.name.localeCompare(b.name),
  name_desc: (a, b) => b.name.localeCompare(a.name),
  price_asc: (a, b) => a.price - b.price,
  price_desc: (a, b) => b.price - a.price,
};

export function getProductsList(
  options: GetProductsListOptions = {}
): Promise<IProductsList> {
  const { category, sort = "default", page = 1, limit = 12 } = options;

  let items = [...products];
  if (category) {
    items = items.filter((p) => p.categories?.some((c) => c.slug === category));
  }

  items.sort(SORTERS[sort] ?? SORTERS.default);

  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(Math.max(1, page), pages);
  const start = (safePage - 1) * limit;
  const pageItems = items.slice(start, start + limit);

  const list: IProductsList = {
    items: pageItems,
    sort,
    filters: [],
    navigation: {
      type: "page",
      page: safePage,
      limit,
      total,
      pages,
      from: total === 0 ? 0 : start + 1,
      to: start + pageItems.length,
    },
  };

  return delay(list);
}

export function getProductBySlug(slug: string): Promise<IProduct | null> {
  return delay(productsBySlug.get(slug) ?? null);
}

export function getFeaturedProducts(limit = 8): Promise<IProduct[]> {
  const featured = [...products]
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, limit);
  return delay(featured);
}

export function getRelatedProducts(
  slug: string,
  limit = 4
): Promise<IProduct[]> {
  const product = productsBySlug.get(slug);
  const related = products
    .filter((p) => p.slug !== slug)
    .filter((p) =>
      product?.categories?.length
        ? p.categories?.some((c) =>
            product.categories?.some((pc) => pc.slug === c.slug)
          )
        : true
    )
    .slice(0, limit);
  return delay(related);
}

export function getCategories(): Promise<IShopCategory[]> {
  return delay(categories);
}

export function getCategoryBySlug(slug: string): Promise<IShopCategory | null> {
  return delay(categoriesBySlug.get(slug) ?? null);
}
