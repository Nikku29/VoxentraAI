import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="mb-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-neon">Get In Touch</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:nikhilsharma.gdscgenai@gmail.com"
              className="group flex items-center gap-2 rounded-lg border border-border bg-background p-4 transition-all hover:border-neon hover:bg-card"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-neon transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-neon">
                Email
              </span>
            </a>

            <a
              href="tel:+917877490044"
              className="group flex items-center gap-2 rounded-lg border border-border bg-background p-4 transition-all hover:border-neon-green hover:bg-card"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6 text-neon-green transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-neon-green">
                Phone
              </span>
            </a>

            <a
              href="https://www.instagram.com/nothing__09___/?igsh=Z21lZnJkbDZiOG9k#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-border bg-background p-4 transition-all hover:border-neon-purple hover:bg-card"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-neon-purple transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-neon-purple">
                Instagram
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil-sharma-21a184265"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-border bg-background p-4 transition-all hover:border-neon hover:bg-card"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-neon transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-neon">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="mb-2 text-sm font-bold text-neon">VoxentraAI</p>
          <p className="text-sm text-muted-foreground">
            All Rights Reserved. |{" "}
            <span className="font-medium text-neon">HIPAA & PCI DSS Compliance by Design.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
