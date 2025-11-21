import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    feedback: "The copywriting transformed our conversion rate by 65%. Every word was crafted to perfection, and our customers finally understand our value proposition.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Marketing Director, GrowthLab",
    feedback: "Outstanding graphic design work! Our brand identity is now instantly recognizable. The visual consistency across all platforms has strengthened our market position.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder, EcoStyle",
    feedback: "The email funnel sequences are pure gold. We've seen a 3x increase in customer engagement and our sales pipeline has never been stronger.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Product Manager, InnovateCo",
    feedback: "The video scripts captured our message perfectly. Our YouTube engagement went through the roof - 10x more views and comments in just one month.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients who trusted me with their brand communication
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-2">
                  <Card className="p-10 bg-card hover:shadow-glow transition-all duration-300 border-border/50">
                    <div className="flex flex-col items-center text-center">
                      <Quote className="w-12 h-12 text-primary/30 mb-6" />
                      
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <p className="text-lg text-card-foreground mb-8 leading-relaxed italic">
                        "{testimonial.feedback}"
                      </p>
                      
                      <div className="mt-auto">
                        <h4 className="text-xl font-semibold text-card-foreground mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
