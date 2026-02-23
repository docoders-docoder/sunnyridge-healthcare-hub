import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <img
        src={heroBg}
        alt="Golden mountain ridges at sunrise"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-gold-light font-sans text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            Healthcare Solutions Partner
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Rooted in Strength,{" "}
            <span className="gradient-gold-text">Rising with Brilliance</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 font-sans max-w-xl">
            SunnyRidge Solutions delivers premium healthcare outsourcing — from
            medical billing to revenue cycle management — so you can focus on
            what matters most: patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="gradient-gold text-accent-foreground px-8 py-4 rounded-lg font-semibold shadow-gold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-base"
            >
              Schedule a Consultation <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors text-center text-base"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
