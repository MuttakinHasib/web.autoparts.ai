"use client";

import { GitCompare, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { Price } from "@/components/shared/price";
import { Rating } from "@/components/shared/rating";
import { SectionHeader } from "@/components/shared/section-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFeaturedProducts } from "@/hooks/queries/use-shop";
import type { IProduct, IProductStock } from "@/interfaces/product";
import { formatCurrency } from "@/lib/format";
import {
  selectCartCount,
  selectCartSubtotal,
  useCartStore,
} from "@/store/cart.store";
import { useCompareStore } from "@/store/compare.store";
import { useHydrated } from "@/store/hydration";
import { useWishlistStore } from "@/store/wishlist.store";

const STOCK_BADGE: Record<
  IProductStock,
  { type: "success" | "failure" | "warning"; text: string }
> = {
  "in-stock": { type: "success", text: "In Stock" },
  "out-of-stock": { type: "failure", text: "Out of Stock" },
  "on-backorder": { type: "warning", text: "On Backorder" },
};

export function StateDemo() {
  const { data: products, isLoading } = useFeaturedProducts(8);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded bg-primary px-2 py-1 font-black text-primary-foreground text-xl tracking-tight">
            AUTO
          </span>
          <span className="font-black text-xl tracking-tight">PARTS</span>
        </div>
        <div className="flex items-center gap-3">
          <CartSummary />
          <ThemeToggle />
        </div>
      </header>

      <SectionHeader title="State + data demo (React Query · Zustand)" />

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {isLoading || !products
          ? Array.from({ length: 8 }, (_, i) => i).map((i) => (
              <Card key={`skeleton-${i}`}>
                <CardContent className="space-y-3 pt-6">
                  <Skeleton className="aspect-square w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))
          : products.map((product) => (
              <ProductTile key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}

function CartSummary() {
  const hydrated = useHydrated();
  const cartCount = useCartStore(selectCartCount);
  const subtotal = useCartStore(selectCartSubtotal);
  const wishlistCount = useWishlistStore((s) => s.items.length);
  const compareCount = useCompareStore((s) => s.items.length);

  // Until hydration completes, render server-neutral zeros to avoid mismatch.
  const counts = hydrated
    ? { cart: cartCount, wishlist: wishlistCount, compare: compareCount }
    : { cart: 0, wishlist: 0, compare: 0 };

  return (
    <div className="flex items-center gap-2 text-sm">
      <Badge variant="secondary">
        <ShoppingCart className="size-3.5" /> {counts.cart}
      </Badge>
      <span className="text-muted-foreground">
        {hydrated ? formatCurrency(subtotal) : formatCurrency(0)}
      </span>
      <Badge variant="secondary">
        <Heart className="size-3.5" /> {counts.wishlist}
      </Badge>
      <Badge variant="secondary">
        <GitCompare className="size-3.5" /> {counts.compare}
      </Badge>
    </div>
  );
}

function ProductTile({ product }: { product: IProduct }) {
  const addToCart = useCartStore((s) => s.add);
  const toggleWishlist = useWishlistStore((s) => s.toggle);
  const toggleCompare = useCompareStore((s) => s.toggle);
  const inWishlist = useWishlistStore((s) =>
    s.items.some((p) => p.id === product.id)
  );
  const inCompare = useCompareStore((s) =>
    s.items.some((p) => p.id === product.id)
  );

  const stock = STOCK_BADGE[product.stock];
  const image = product.images?.[0];

  return (
    <Card className="overflow-hidden">
      <CardContent className="space-y-3 pt-6">
        <div className="relative aspect-square overflow-hidden rounded-sm bg-muted">
          {image ? (
            <Image
              alt={product.name}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              src={image}
            />
          ) : null}
        </div>
        <StatusBadge showIcon text={stock.text} type={stock.type} />
        <h3 className="line-clamp-2 font-medium text-sm leading-snug">
          {product.name}
        </h3>
        <Rating count={product.reviews} value={product.rating ?? 0} />
        <Price
          oldValue={product.compareAtPrice ?? undefined}
          value={product.price}
        />
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          className="flex-1"
          disabled={product.stock === "out-of-stock"}
          onClick={() => {
            addToCart(product);
            toast.success(`Added ${product.name} to cart`);
          }}
          size="sm"
        >
          <ShoppingCart /> Add
        </Button>
        <Button
          aria-label="Toggle wishlist"
          onClick={() => toggleWishlist(product)}
          size="icon"
          variant={inWishlist ? "default" : "outline"}
        >
          <Heart />
        </Button>
        <Button
          aria-label="Toggle compare"
          onClick={() => toggleCompare(product)}
          size="icon"
          variant={inCompare ? "default" : "outline"}
        >
          <GitCompare />
        </Button>
      </CardFooter>
    </Card>
  );
}
