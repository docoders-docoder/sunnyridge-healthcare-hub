import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "500+", label: "Healthcare Clients" },
  { value: "98%", label: "Claim Approval Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const reasons = [
  "HIPAA-Compliant & SOC 2 Processes",
  "US-Based Management Team",
  "Dedicated Account Managers",
  "Transparent Real-Time Reporting",
  "Scalable Solutions for Any Practice Size",
  "No Long-Term Contracts Required",
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            The SunnyRidge{" "}
            <span className="gradient-gold-text">Advantage</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="gradient-earth rounded-xl p-8 text-center shadow-soft"
            >
              <p className="font-display text-3xl md:text-4xl font-bold gradient-gold-text mb-2">
                {s.value}
              </p>
              <p className="text-primary-foreground/80 text-sm font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-card rounded-2xl p-10 shadow-soft max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            What Sets Us Apart
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
