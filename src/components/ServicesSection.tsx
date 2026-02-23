import {
  FileText,
  Monitor,
  ShieldCheck,
  TrendingUp,
  Award,
  PhoneCall,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Medical Billing",
    subtitle: "End-to-End",
    desc: "Complete charge entry, claims submission, payment posting, and denial management to maximize your reimbursements.",
  },
  {
    icon: Monitor,
    title: "Front Desk Management",
    subtitle: "Patient Support",
    desc: "Professional patient scheduling, appointment reminders, and front-office coordination to keep your practice running smoothly.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Verification",
    subtitle: "Eligibility & Benefits",
    desc: "Real-time eligibility checks, benefits verification, and prior authorization to reduce claim denials from the start.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Cycle Management",
    subtitle: "Financial Performance",
    desc: "End-to-end RCM solutions that optimize your financial lifecycle — from patient intake through final payment.",
  },
  {
    icon: Award,
    title: "Credentialing & Enrollment",
    subtitle: "Provider Onboarding",
    desc: "Hassle-free provider credentialing, CAQH management, and payer enrollment to get you in-network faster.",
  },
  {
    icon: PhoneCall,
    title: "AR Follow-Up",
    subtitle: "Collections Recovery",
    desc: "Aggressive yet professional accounts receivable follow-up to recover aged claims and reduce your days in AR.",
  },
  {
    icon: Headphones,
    title: "Virtual Medical Assistant",
    subtitle: "Remote Support",
    desc: "Dedicated virtual assistants trained in healthcare workflows — from documentation to patient communication.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-3">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Comprehensive Healthcare{" "}
            <span className="gradient-gold-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From billing to virtual assistance, we provide the full spectrum of
            healthcare back-office services your practice needs to thrive.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-7 shadow-soft hover:shadow-gold hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5 group-hover:gradient-gold transition-colors duration-300">
                <s.icon
                  size={22}
                  className="text-accent group-hover:text-accent-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {s.title}
              </h3>
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                {s.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
