import { Briefcase } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "SOFTWARE DEVELOPER",
      company: "Konstant Info Solutions, Pvt. Ltd.",
      location: "Jaipur, Rajasthan",
      period: "August 2023 – present",
      current: true,
      achievements: [
        "Developed cross-platform web & mobile applications using React.js and React Native.",
        "Integrated REST APIs and third-party services, improving application efficiency and user experience.",
        "Collaborated with designers and backend teams to deliver scalable, maintainable solutions.",
      ],
    },
    {
      title: "REACT NATIVE DEVELOPER",
      company: "Emizen Tech, Pvt. Ltd.",
      location: "Jaipur, Rajasthan",
      period: "February 2022 – June 2023",
      current: false,
      achievements: [
        "Developed cross-platform iOS and Android mobile applications using React Native.",
        "Integrating REST APIs and third-party services such as Firebase, Google Maps, and push notifications.",
        "Optimized app performance by reducing load time and improving navigation flow, achieving 40% faster response.",
        "Upgrading Application frameworks old to latest to streamline the latest mobile application standards.",
      ],
    },
    {
      title: "WEB DEVELOPER (FREELANCER)",
      company: "WFH",
      location: "Jaipur, Rajasthan",
      period: "August 2020 – September 2021",
      current: false,
      achievements: [
        "Delivered HTML templates, WordPress websites and customized plugins/themes for multiple clients.",
        "Developed responsive UIs with JavaScript, React.js, and CSS.",
        "Implemented UI optimization and performance improvements.",
      ],
    },
    {
      title: "WEB DEVELOPER",
      company: "Amazing IT",
      location: "Jaipur, Rajasthan",
      period: "September 2019 – July 2020",
      current: false,
      achievements: [
        "Built and customized HTML templates, PHP websites, WordPress websites and themes as per client requirements.",
        "Developed frontend components and assisted in backend API integration.",
        "Contributed to FSAT Web Application, a government portal for food safety monitoring.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
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
                        {exp.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge variant={exp.current ? "default" : "secondary"}>
                      {exp.period}
                    </Badge>
                    {exp.current && (
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
                  {exp.achievements.map((achievement, achIndex) => (
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
