import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Get In Touch</h3>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/kunaalmangal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/KunaalMangal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-6 border-t border-primary-foreground/20">
              <p className="text-sm opacity-75">
                © {new Date().getFullYear()} Kunaal Mangal. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
