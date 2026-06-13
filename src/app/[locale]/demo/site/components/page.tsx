import { ShoppingCart } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { InputNumber } from "@/components/shared/input-number";
import { Price } from "@/components/shared/price";
import { Rating } from "@/components/shared/rating";
import { SectionHeader } from "@/components/shared/section-header";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default async function ComponentsStyleGuide({
  params,
}: PageProps<"/[locale]/demo/site/components">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      {/* page header with theme switch */}
      <header className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded bg-primary px-2 py-1 font-black text-primary-foreground text-xl tracking-tight">
            AUTO
          </span>
          <span className="font-black text-xl tracking-tight">PARTS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground text-sm">
            Style guide — light / dark
          </span>
          <ThemeToggle />
        </div>
      </header>

      <div className="space-y-12">
        <Typography />
        <Buttons />
        <Badges />
        <FormControls />
        <Indicators />
        <Surfaces />
        <Schemes />
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-5">
      <SectionHeader title={title} />
      {children}
    </section>
  );
}

function Typography() {
  return (
    <Block title="Typography">
      <div className="space-y-2">
        <h1 className="font-bold text-4xl tracking-tight">Heading 1</h1>
        <h2 className="font-bold text-3xl tracking-tight">Heading 2</h2>
        <h3 className="font-semibold text-2xl tracking-tight">Heading 3</h3>
        <h4 className="font-semibold text-xl">Heading 4</h4>
        <p className="text-base text-foreground">
          Body text in Roboto. The quick brown fox jumps over the lazy dog.
        </p>
        <p className="text-muted-foreground text-sm">
          Muted small text for secondary information and captions.
        </p>
        <a
          className="font-medium text-primary underline underline-offset-4"
          href="#top"
        >
          A themed link
        </a>
      </div>
    </Block>
  );
}

function Buttons() {
  return (
    <Block title="Buttons">
      <div className="flex flex-wrap items-center gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <ShoppingCart />
        </Button>
        <Button disabled>Disabled</Button>
        <Button>
          <ShoppingCart /> Add to cart
        </Button>
      </div>
    </Block>
  );
}

function Badges() {
  return (
    <Block title="Badges">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Out of stock</Badge>
        <Badge>Sale</Badge>
        <Badge className="bg-blue-500 text-white">New</Badge>
        <Badge className="bg-purple-600 text-white">Hot</Badge>
        <Badge className="bg-emerald-600 text-white">In stock</Badge>
      </div>
    </Block>
  );
}

function FormControls() {
  return (
    <Block title="Form controls">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="sg-email">Email</Label>
          <Input id="sg-email" placeholder="you@example.com" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sg-brand">Brand</Label>
          <Select defaultValue="bosch">
            <SelectTrigger id="sg-brand">
              <SelectValue placeholder="Select a brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bosch">Bosch</SelectItem>
              <SelectItem value="brembo">Brembo</SelectItem>
              <SelectItem value="ngk">NGK</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <span className="font-medium text-sm">Quantity</span>
          <InputNumber defaultValue={1} max={10} min={1} />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox defaultChecked id="sg-check" />
            <Label htmlFor="sg-check">In stock only</Label>
          </div>
          <RadioGroup className="flex gap-4" defaultValue="new">
            <div className="flex items-center gap-2">
              <RadioGroupItem id="sg-new" value="new" />
              <Label htmlFor="sg-new">New</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem id="sg-used" value="used" />
              <Label htmlFor="sg-used">Used</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </Block>
  );
}

function Indicators() {
  return (
    <Block title="Indicators">
      <div className="flex flex-wrap items-center gap-8">
        <div className="space-y-2">
          <Rating count={142} value={4.5} />
          <Rating size="sm" value={3} />
          <Rating size="lg" value={5} />
        </div>
        <Separator className="h-12" orientation="vertical" />
        <div className="space-y-1">
          <Price oldValue={249.99} value={199.99} />
          <Price value={49} />
        </div>
        <Separator className="h-12" orientation="vertical" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Free shipping over $50</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Block>
  );
}

function Surfaces() {
  return (
    <Block title="Surfaces">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Brake Disc Set</CardTitle>
            <CardDescription>Front axle · ventilated</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Rating count={28} value={4} />
            <Price oldValue={159} value={129} />
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <ShoppingCart /> Add to cart
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Tabs defaultValue="desc">
            <TabsList>
              <TabsTrigger value="desc">Description</TabsTrigger>
              <TabsTrigger value="specs">Specs</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent className="text-muted-foreground text-sm" value="desc">
              High-performance replacement part with a 2-year warranty.
            </TabsContent>
            <TabsContent
              className="text-muted-foreground text-sm"
              value="specs"
            >
              Material: carbon steel · Diameter: 320mm
            </TabsContent>
            <TabsContent
              className="text-muted-foreground text-sm"
              value="reviews"
            >
              28 verified reviews.
            </TabsContent>
          </Tabs>

          <Accordion collapsible type="single">
            <AccordionItem value="ship">
              <AccordionTrigger>Shipping & returns</AccordionTrigger>
              <AccordionContent>
                Free delivery in 2–4 business days. 30-day returns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fit">
              <AccordionTrigger>Fitment</AccordionTrigger>
              <AccordionContent>
                Check your vehicle in the garage before ordering.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    </Block>
  );
}

function Schemes() {
  const schemes = [
    "scheme-theme",
    "scheme-accent",
    "scheme-dark",
    "scheme-light",
  ];

  return (
    <Block title="Section schemes (header / topbar)">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {schemes.map((scheme) => (
          <div
            className={`${scheme} flex flex-col gap-1 rounded-lg border border-[var(--s-divider)] bg-[var(--s-main)] p-4 text-[var(--s-opposite)]`}
            key={scheme}
          >
            <span className="font-semibold text-sm">{scheme}</span>
            <span className="text-[var(--s-opposite-alt)] text-xs">
              Self-contained region
            </span>
            <span className="text-[var(--s-muted)] text-xs">Muted text</span>
          </div>
        ))}
      </div>
    </Block>
  );
}
