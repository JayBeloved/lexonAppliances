import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Rocket, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary font-headline sm:text-5xl">
          About Lexon Appliance
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          We believe that everyone deserves to have beautiful, high-performing
          appliances in their home. That's why we're on a mission to redefine
          the industry.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Rocket className="h-6 w-6" />
            </div>
            <CardTitle className="mt-4 font-headline">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To design and create premium, reliable, and aesthetically pleasing
              kitchen and home appliances that are accessible to everyone at
              pocket-friendly prices.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Eye className="h-6 w-6" />
            </div>
            <CardTitle className="mt-4 font-headline">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To become a trusted household name, synonymous with quality,
              innovation, and value, enriching homes and lives across the
              globe.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Handshake className="h-6 w-6" />
            </div>
            <CardTitle className="mt-4 font-headline">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Customer-centricity, uncompromising quality, integrity in all we
              do, and a passion for continuous innovation and elegant design.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
