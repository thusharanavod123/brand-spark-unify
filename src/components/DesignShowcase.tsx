import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Palette, Sparkles, Layout, Target } from "lucide-react";

const designProjects = [
  {
    title: "Brand Identity Systems",
    description: "Complete visual identities that ensure immediate brand recognition across all platforms",
    icon: Palette,
    tags: ["Branding", "Logo Design", "Visual Identity"],
  },
  {
    title: "Social Media Graphics",
    description: "Eye-catching visuals optimized for maximum engagement and shareability",
    icon: Sparkles,
    tags: ["Social Media", "Graphics", "Engagement"],
  },
  {
    title: "Landing Page Design",
    description: "High-converting page layouts that guide visitors to take action",
    icon: Layout,
    tags: ["Web Design", "UI/UX", "Conversion"],
  },
  {
    title: "Marketing Collateral",
    description: "Professional materials that elevate your brand and drive results",
    icon: Target,
    tags: ["Print Design", "Digital Assets", "Marketing"],
  },
];

const DesignShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Design That <span className="text-primary">Converts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stunning visuals that capture attention and drive your audience to action
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {designProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="p-8 h-full bg-card hover:shadow-glow transition-all duration-300 border-border/50">
                      <div className="flex flex-col h-full">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-sm bg-primary/5 text-primary rounded-full border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default DesignShowcase;
