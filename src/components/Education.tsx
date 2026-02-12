import { GraduationCap, Award } from "lucide-react";

import { Card } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Education & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 shadow-medium hover:shadow-large transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    Appex Institute of Management & Science
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Jaipur, India
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-semibold text-foreground">
                      2016 – 2020
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-primary font-semibold">60.5%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card
              className="p-8 shadow-medium hover:shadow-large transition-shadow text-accent-foreground"
              style={{ background: "var(--gradient-accent)" }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background/10 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    XROS Fellowship 2023
                  </h3>
                  <p className="opacity-90 mb-1">Meta Supported Program</p>
                  <p className="font-semibold text-lg mb-2">Top 100 Fellow</p>
                  <p className="text-sm opacity-90">
                    Selected among Top 100 from 10,000+ applicants in
                    open-source fellowship.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
