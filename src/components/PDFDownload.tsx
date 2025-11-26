import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, CheckCircle2 } from "lucide-react";

// Updated list emphasizing actionable knowledge a client would want
const benefits = [
  "Strategic overview of our dual-skill approach.",
  "Measurable results from recent client success stories.",
  "Clear, transparent service packages and pricing.",
  "Checklist for launching your next campaign effectively.",
];

const PDFDownload = () => {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative elements - Using Indigo/Cyan glow effects */}
      <div className="absolute inset-0 opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card 
            className="p-10 md:p-12 bg-card/80 backdrop-blur-sm border-indigo-500/50 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon section - Brand Gradient */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Content section */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                  Download the <span className="text-cyan-500">Free Strategy Guide</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get instant access to my comprehensive guide featuring **actionable insights** and clear pricing to kickstart your next successful project.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {/* Using Indigo for Checkmark for contrast against text */}
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="group bg-indigo-600 hover:bg-indigo-700 text-white"
                  asChild
                >
                  <a href="/portfolio-guide.pdf" download="Freelance-Strategy-Guide.pdf">
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Guide Now
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PDFDownload;