import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import InteractiveBackground from "./InteractiveBackground";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-primary-foreground relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <InteractiveBackground />
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              KUNAAL MANGAL
            </h1>
            <p className="text-2xl md:text-3xl font-light text-secondary-foreground">
              Software Developer
            </p>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
            Frontend Software Developer with 5+ years of experience building
            scalable, cross-platform applications. Top 100 Fellow in XROS
            Fellowship 2023 (Meta supported).
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <a
              href="tel:+918955448707"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 89554 48707
            </a>
            <span className="opacity-50">|</span>
            <a
              href="mailto:ksmangal1998@gmail.com"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Mail className="w-4 h-4" />
              ksmangal1998@gmail.com
            </a>
            <span className="opacity-50">|</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Jaipur, Rajasthan
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <a
                href="https://www.linkedin.com/in/kunaalmangal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-primary"
            >
              <a
                href="https://github.com/KunaalMangal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-secondary-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
