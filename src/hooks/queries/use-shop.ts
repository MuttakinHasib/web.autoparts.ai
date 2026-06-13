"use client";

import { useQuery } from "@tanstack/react-query";
import {
  type GetProductsListOptions,
  getCategories,
  getCategoryBySlug,
  getFeaturedProducts,
  getProductBySlug,
  getProductsList,
  getRelatedProducts,
} from "@/mock/shop.service";

export const shopKeys = {
  all: ["shop"] as const,
  productsList: (options: GetProductsListOptions) =>
    [...shopKeys.all, "products", options] as const,
  product: (slug: string) => [...shopKeys.all, "product", slug] as const,
  related: (slug: string) => [...shopKeys.all, "related", slug] as const,
  featured: (limit: number) => [...shopKeys.all, "featured", limit] as const,
  categories: () => [...shopKeys.all, "categories"] as const,
  category: (slug: string) => [...shopKeys.all, "category", slug] as const,
};

export function useProductsList(options: GetProductsListOptions = {}) {
  return useQuery({
    queryKey: shopKeys.productsList(options),
    queryFn: () => getProductsList(options),
  });
}

export function useProduct(slug: string) {
  return useQuery({
    queryKey: shopKeys.product(slug),
    queryFn: () => getProductBySlug(slug),
    enabled: Boolean(slug),
  });
}

export function useRelatedProducts(slug: string, limit = 4) {
  return useQuery({
    queryKey: shopKeys.related(slug),
    queryFn: () => getRelatedProducts(slug, limit),
    enabled: Boolean(slug),
  });
}

export function useFeaturedProducts(limit = 8) {
  return useQuery({
    queryKey: shopKeys.featured(limit),
    queryFn: () => getFeaturedProducts(limit),
  });
}

export function useCategories() {
  return useQuery({
    queryKey: shopKeys.categories(),
    queryFn: () => getCategories(),
  });
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: shopKeys.category(slug),
    queryFn: () => getCategoryBySlug(slug),
    enabled: Boolean(slug),
  });
}
