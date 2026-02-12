import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["JavaScript (ES6+)", "React.js", "React Native"],
    },
    {
      title: "State Management",
      skills: ["Context API", "Redux", "Zustand"],
    },
    {
      title: "Libraries & Integrations",
      skills: [
        "Firebase",
        "Google Maps",
        "Social Sign-In",
        "Deep Linking",
        "REST APIs",
        "WebSocket",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "VSCode",
        "Android Studio",
        "Xcode",
        "Postman",
      ],
    },
    {
      title: "Web Development",
      skills: ["ReactJS","WordPress"],
    },
    {
      title: "Other",
      skills: ["Performance Optimization", "Responsive Design", "Agile/Scrum"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 shadow-medium hover:shadow-large transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1.5 px-3"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
