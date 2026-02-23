import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Ready to{" "}
              <span className="gradient-gold-text">Elevate</span> Your
              Practice?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Schedule a free consultation and discover how SunnyRidge Solutions
              can streamline your operations, increase revenue, and let you
              focus on patient care.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <p className="text-muted-foreground">info@sunnyridgesolutions.com</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground">(555) 987-6543</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Hours</p>
                <p className="text-muted-foreground">Monday – Friday, 8 AM – 6 PM EST</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-soft">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We've received your message and will get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Practice Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                    placeholder="ABC Medical Group"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gradient-gold text-accent-foreground py-4 rounded-lg font-semibold shadow-gold hover:opacity-90 transition-opacity text-base"
                >
                  Request Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
