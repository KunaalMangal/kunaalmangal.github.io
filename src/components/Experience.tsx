import { Briefcase } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  achievements: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((expItem, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 shadow-medium hover:shadow-large transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {expItem.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {expItem.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {expItem.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant={expItem.current ? "default" : "secondary"}>
                      {expItem.period}
                    </Badge>
                    {expItem.current && (
                      <Badge
                        variant="outline"
                        className="bg-secondary text-secondary-foreground"
                      >
                        Current
                      </Badge>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 ml-8 md:ml-8">
                  {expItem.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="text-muted-foreground list-disc"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
