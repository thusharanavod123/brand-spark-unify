import { Card, CardContent } from "@/components/ui/card";
import { Palette, PenTool, Video, Mail } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "High-impact visual designs that ensure immediate brand recognition and create lasting impressions across all touchpoints.",
    features: ["Brand Identity", "Visual Assets", "Marketing Materials"]
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description: "Persuasive, conversion-focused copy that motivates your audience to take action—whether that's clicking, subscribing, or buying.",
    features: ["Sales Copy", "Website Content", "Ad Campaigns"]
  },
  {
    icon: Video,
    title: "Script Writing",
    description: "Engaging video scripts that capture attention in the first three seconds and maintain viewer interest throughout your content.",
    features: ["Video Scripts", "Social Media", "Ads & Promos"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email funnels designed to nurture leads systematically and convert prospects into loyal, paying customers.",
    features: ["Email Sequences", "Lead Nurturing", "Sales Funnels"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Complete Marketing Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four core services, one unified partner. Professional execution across all essential marketing channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
