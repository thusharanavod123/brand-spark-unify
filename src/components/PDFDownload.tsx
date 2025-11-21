import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, CheckCircle } from "lucide-react";

const benefits = [
  "Comprehensive portfolio overview",
  "Case studies and success metrics",
  "Service packages and pricing",
  "Quick reference guide",
];

const PDFDownload = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon section */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <FileText className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>

              {/* Content section */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                  Download My <span className="text-primary">Portfolio Guide</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get instant access to my comprehensive portfolio guide featuring case studies, 
                  success metrics, and detailed service offerings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="group"
                  asChild
                >
                  <a href="/portfolio-guide.pdf" download="Portfolio-Guide.pdf">
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Free PDF Guide
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