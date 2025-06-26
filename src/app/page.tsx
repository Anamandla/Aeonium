import Contact from "@/components/landing/contact";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import Product from "@/components/landing/product";
import Testimonials from "@/components/landing/testimonials";
import Faq from "@/components/landing/faq";
import LogoCloud from "@/components/landing/logo-cloud";
import CodeFeature from "@/components/landing/code-feature";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Product />
        <Features />
        <CodeFeature />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
