import { GraduationCap, Award } from "lucide-react";

import { Card } from "@/components/ui/card";

interface EducationItem {
  type: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

interface AchievementItem {
  type: string;
  title: string;
  organization: string;
  award: string;
  description: string;
}

interface EducationProps {
  education: EducationItem[];
  achievements: AchievementItem[];
}

const Education = ({ education, achievements }: EducationProps) => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Education & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-8 shadow-medium hover:shadow-large transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-muted-foreground mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.location}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-semibold text-foreground">
                        {edu.period}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-primary font-semibold">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {achievements.map((ach, index) => (
              <Card
                key={index}
                className="p-8 shadow-medium hover:shadow-large transition-shadow text-accent-foreground"
                style={{ background: "var(--gradient-accent)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-background/10 rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {ach.title}
                    </h3>
                    <p className="opacity-90 mb-1">{ach.organization}</p>
                    <p className="font-semibold text-lg mb-2">{ach.award}</p>
                    <p className="text-sm opacity-90">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
