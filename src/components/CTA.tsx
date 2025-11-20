import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Results-driven execution",
  "Professional, cohesive branding",
  "Proven conversion strategies",
  "One unified communication partner"
];

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-hero-from to-hero-to relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Ready to Elevate Your Marketing?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Let's transform your ideas into powerful marketing assets that drive real results. 
            Partner with a specialist who understands the complete digital landscape.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-primary-foreground/90 text-left"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg shadow-glow transition-all hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 pt-4">
            Hire me as your unified partner for guaranteed professional execution
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
