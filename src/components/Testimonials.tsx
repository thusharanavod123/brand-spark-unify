import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    feedback: "The copywriting transformed our conversion rate by **65%**. Every word was crafted to perfection, and our customers finally understand our value proposition.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "James Rodriguez",
    role: "Marketing Director, GrowthLab",
    feedback: "Outstanding graphic design work! Our brand identity is now instantly recognizable. The visual consistency has strengthened our market position.",
    rating: 5,
    initials: "JR",
  },
  {
    name: "Emily Chen",
    role: "Founder, EcoStyle",
    feedback: "The email funnel sequences are pure gold. We've seen a **3x increase** in customer engagement and our sales pipeline has never been stronger.",
    rating: 5,
    initials: "EC",
  },
  {
    name: "Michael Thompson",
    role: "Product Manager, InnovateCo",
    feedback: "The video scripts captured our message perfectly. Our YouTube engagement went through the roof - **10x more views and comments** in just one month.",
    rating: 5,
    initials: "MT",
  },
];

const Testimonials = () => {
  // Select the top 3 testimonials to display prominently
  const featuredTestimonials = testimonials.slice(0, 3); 

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Client <span className="text-indigo-500">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients who trusted me with their brand communication
          </p>
        </div>

        {/* Dynamic Card Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredTestimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-1 h-full flex flex-col justify-between"
            >
              <div className="flex flex-col items-start text-left h-full">
                
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-indigo-500 mb-6" />
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                {/* Feedback with strong text for results */}
                <p 
                  className="text-lg text-card-foreground mb-6 leading-relaxed flex-grow"
                  dangerouslySetInnerHTML={{ __html: testimonial.feedback.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-cyan-400">$1</span>') }}
                />
              </div>
              
              {/* Client Metadata - Anchored at the bottom */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                <Avatar className="w-14 h-14 border-2 border-cyan-500 flex-shrink-0">
                  <AvatarFallback className="bg-indigo-600 text-white font-bold text-lg">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-base font-semibold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to view more reviews (retains ArrowRight fix) */}
        <div className="text-center mt-12">
            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-medium text-lg flex items-center justify-center">
                See 20+ More Verified Reviews <ArrowRight className="ml-2 h-5 w-5" />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;