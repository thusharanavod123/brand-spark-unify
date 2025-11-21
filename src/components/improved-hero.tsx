import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ImprovedHero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-hero-from to-hero-to">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Modern Problems Require Modern Solutions
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Step up your game with a design that's professional, engaging,
                and built to convert. Let's build something amazing together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="transition-transform duration-300 hover:scale-105">
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-transform duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center animate-fade-in [animation-delay:200ms]">
            <Card className="w-full max-w-md shadow-glow transition-shadow duration-500 hover:shadow-elegant">
              <CardContent className="flex flex-col items-center justify-center p-12 space-y-4 text-center">
                <div className="rounded-full bg-primary p-4 text-primary-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                </div>
                <h3 className="text-2xl font-bold">Feature Showcase</h3>
                <p className="text-muted-foreground">
                  This is where you can highlight a key feature or benefit of your product.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}