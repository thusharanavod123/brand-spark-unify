import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WritingShowcase from "@/components/WritingShowcase";
import DesignShowcase from "@/components/DesignShowcase";
import Testimonials from "@/components/Testimonials";
import PDFDownload from "@/components/PDFDownload";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WritingShowcase />
      {/* <DesignShowcase /> */}
      <Testimonials />
      <PDFDownload />
      <CTA />
    </div>
  );
};

export default Index;
