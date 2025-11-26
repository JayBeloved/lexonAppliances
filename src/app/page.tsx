import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary font-headline">
            Premium Appliances, Perfect Prices.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Lexon Appliance brings you a new era of kitchen and home essentials.
            Experience the blend of superior quality, sleek design, and
            affordability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/about">Discover Our Mission</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center text-accent-foreground transition-shadow hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold font-headline">
                Premium Quality
              </h3>
              <p className="mt-2">
                Built to last with the finest materials and cutting-edge
                technology.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center text-accent-foreground transition-shadow hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold font-headline">
                Modern Design
              </h3>
              <p className="mt-2">
                Sleek, minimalist aesthetics that complement any modern home.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center text-accent-foreground transition-shadow hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold font-headline">
                Pocket-Friendly
              </h3>
              <p className="mt-2">
                Top-tier appliances that don't break the bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Teaser Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight font-headline">
              Anticipate Excellence
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              We're putting the finishing touches on our first collection. Get
              ready.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline">
                  The Lexon Kettle
                </CardTitle>
                <CardDescription>Coming Soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Boil water with precision and style. Our upcoming kettle is
                  designed for speed, safety, and a perfect pour every time.
                </p>
              </CardContent>
            </Card>
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="font-headline">
                  The Lexon Toaster
                </CardTitle>
                <CardDescription>Coming Soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Achieve the perfect shade of toast. With even heating and wide
                  slots, your breakfast is about to get a serious upgrade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
