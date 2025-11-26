import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail, Video, BookOpen, Palette, Sparkles, Layout, Target, Zap, CheckCircle2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const WRITING_PROJECTS = [
    { title: "SEO Blog Post Series", description: "Drove 40% organic traffic increase for a niche SaaS brand.", icon: FileText, tags: ["SEO", "Content Strategy", "Long-Form"] },
    { title: "High-Converting Email Funnel", description: "Achieved 3x lift in lead-to-sale conversion rate for e-commerce.", icon: Mail, tags: ["Email Marketing", "Automation", "A/B Testing"] },
    { title: "Explainer Video Script", description: "Scripted a 60-second video that reduced customer support inquiries by 20%.", icon: Video, tags: ["Video Scripts", "Clarity", "Retention"] },
    { title: "Brand Messaging Guide", description: "Defined brand voice and tone for consistent marketing across all channels.", icon: BookOpen, tags: ["Brand Voice", "Messaging", "Guidelines"] },
];

const DESIGN_PROJECTS = [
    { title: "E-commerce Product Listing Graphics", description: "Increased click-through rate (CTR) by 25% with optimized carousel images.", icon: Sparkles, tags: ["Fiverr Gigs", "E-commerce", "Visual Selling"] },
    { title: "Complete Brand Identity Suite", description: "Delivered logo, color palette, and typography guide for a new startup.", icon: Palette, tags: ["Branding", "Logo Design", "Identity"] },
    { title: "Social Media Campaign Visuals", description: "Created 15 reusable templates for Instagram and Facebook engagement.", icon: Layout, tags: ["Social Media", "Templates", "Engagement"] },
    { title: "Landing Page Mockup (Figma)", description: "Designed UX/UI flow focused on single-goal conversion.", icon: Target, tags: ["UI/UX", "Wireframing", "Conversion"] },
];

// Helper component for project card display
const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    return (
        <Card className="p-6 bg-card border-border/50 transition-all duration-300 hover:shadow-lg h-full">
            <div className="flex flex-col h-full space-y-4">
                <div className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <CardTitle className="text-xl font-semibold leading-snug">{project.title}</CardTitle>
                </div>
                
                <CardDescription className="flex-grow text-base">
                    {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-2.5 py-0.5 text-xs bg-secondary border border-border text-foreground/80 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const Showcase = () => {
  return (
    <section id="showcase" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            See the Power of Dual Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select an area below to view recent project demos that consistently drive client success.
          </p>
        </div>

        <Tabs defaultValue="writing" className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
                <TabsList className="grid w-full grid-cols-2 h-14 bg-card/70 border border-primary/10 p-1 rounded-xl shadow-lg">
                    <TabsTrigger 
                        value="writing" 
                        className="text-lg font-semibold data-[state=active]:bg-indigo-500 data-[state=active]:text-white transition-all rounded-lg"
                    >
                        <FileText className="w-5 h-5 mr-2" />
                        Writing Portfolio
                    </TabsTrigger>
                    <TabsTrigger 
                        value="design" 
                        className="text-lg font-semibold data-[state=active]:bg-cyan-500 data-[state=active]:text-white transition-all rounded-lg"
                    >
                        <Palette className="w-5 h-5 mr-2" />
                        Design Portfolio
                    </TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="writing">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {WRITING_PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <p className="text-center text-muted-foreground pt-8 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-500" />
                    All projects focused on clear messaging and high conversion goals.
                </p>
            </TabsContent>

            <TabsContent value="design">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {DESIGN_PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                 <p className="text-center text-muted-foreground pt-8 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-indigo-500" />
                    All visuals optimized for platform standards (Fiverr, social media, web).
                </p>
            </TabsContent>
        </Tabs>

      </div>
    </section>
  );
};

export default Showcase;