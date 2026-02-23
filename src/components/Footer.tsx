const footerLinks = {
  Services: [
    "Medical Billing",
    "Front Desk Management",
    "Insurance Verification",
    "Revenue Cycle Management",
    "Credentialing",
    "AR Follow-Up",
    "Virtual Assistant",
  ],
  Company: ["About Us", "Why Choose Us", "Testimonials", "Contact"],
};

const Footer = () => {
  return (
    <footer className="gradient-earth py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-primary-foreground">
              Sunny<span className="gradient-gold-text">Ridge</span>
            </span>
            <p className="text-primary-foreground/70 mt-4 leading-relaxed max-w-xs">
              Your trusted partner in healthcare outsourcing. Rooted in
              strength, rising with brilliance.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} SunnyRidge Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-primary-foreground/50 text-sm">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
