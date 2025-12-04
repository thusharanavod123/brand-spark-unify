import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Updated benefits to be more results-focused
const CTA_BENEFITS = [
  "Guaranteed professional, cohesive brand output.",
  "Conversion-focused design and persuasive copywriting.",
  "One unified partner simplifies communication and delivery.",
  "Fast turnaround times tailored for Fiverr requirements."
];

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-900 to-cyan-900 relative overflow-hidden text-white">
      {/* Decorative Elements - Using Cyan and Indigo accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Elevate Your Marketing?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's transform your ideas into powerful marketing assets that drive real results. 
            Click the button below to view my available Fiverr Gigs.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-6">
            {CTA_BENEFITS.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-white/90 text-left"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Button 
              size="lg"
              // Use Cyan for the primary conversion button
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-10 py-6 text-lg shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a href="https://www.fiverr.com/your-profile-link" target="_blank" rel="noopener noreferrer">
                View My Fiverr Gigs
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-white/70 pt-4">
            Unified Communication Specialist: Design & Copywriting in one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;