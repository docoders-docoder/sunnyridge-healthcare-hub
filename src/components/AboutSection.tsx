import { Target, Eye, Shield } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower healthcare providers with seamless back-office solutions that drive growth, reduce overhead, and maximize revenue — all while maintaining the highest standards of compliance.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become the most trusted name in healthcare outsourcing, recognized for reliability, innovation, and an unwavering commitment to our clients' success.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    text: "HIPAA-compliant processes, dedicated account managers, and transparent reporting — because your practice deserves a partner you can count on.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            About Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Built on Trust, Driven by <span className="gradient-gold-text">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SunnyRidge Solutions is a US-based healthcare outsourcing company
            that partners with medical practices, hospitals, and healthcare
            organizations to streamline operations and boost financial
            performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-gold transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg gradient-gold flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <item.icon size={26} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
