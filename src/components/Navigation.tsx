import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement("a");
    link.href = "/KUNAAL_MANGAL_RESUME.pdf";
    link.download = "KUNAAL_MANGAL_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-medium border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-primary hover:text-accent transition-colors"
          >
            KM
          </Link>

          <div className="flex items-center gap-4">


            <Button
              onClick={handleDownloadResume}
              variant="secondary"
              size="sm"
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
