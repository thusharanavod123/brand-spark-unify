import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WritingShowcase from "@/components/WritingShowcase";
import DesignShowcase from "@/components/DesignShowcase";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WritingShowcase />
      <DesignShowcase />
      <CTA />
    </div>
  );
};

export default Index;
