import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FileText, Mail, Video, BookOpen } from "lucide-react";

const writingProjects = [
  {
    title: "Sales Copy That Converts",
    description: "Persuasive product descriptions that boost conversion rates by 40%+",
    icon: FileText,
    tags: ["Sales Copy", "Conversion", "E-commerce"],
  },
  {
    title: "Email Funnel Sequences",
    description: "Strategic email campaigns that nurture leads and drive consistent sales",
    icon: Mail,
    tags: ["Email Marketing", "Automation", "Lead Nurturing"],
  },
  {
    title: "Video Script Writing",
    description: "Engaging scripts with powerful hooks that capture attention in 3 seconds",
    icon: Video,
    tags: ["Video Scripts", "Engagement", "Storytelling"],
  },
  {
    title: "Brand Storytelling",
    description: "Compelling narratives that build emotional connections with your audience",
    icon: BookOpen,
    tags: ["Brand Voice", "Content Strategy", "Storytelling"],
  },
];

const WritingShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Writing That <span className="text-primary">Sells</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every word crafted to persuade, engage, and convert your audience into loyal customers
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
            {writingProjects.map((project, index) => {
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

export default WritingShowcase;
