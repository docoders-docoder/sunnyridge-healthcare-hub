import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Family Practice, Texas",
    text: "SunnyRidge transformed our billing process. Our collections improved by 35% in the first quarter, and their team feels like an extension of our own office.",
  },
  {
    name: "James Okafor",
    role: "Practice Manager, Florida",
    text: "Their credentialing team got our new providers enrolled in record time. Professional, responsive, and incredibly detail-oriented.",
  },
  {
    name: "Dr. Linda Chen",
    role: "Multi-Specialty Group, California",
    text: "We switched from a large billing company to SunnyRidge and haven't looked back. The personal attention and transparency are unmatched.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Trusted by Practices{" "}
            <span className="gradient-gold-text">Nationwide</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-gold transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
