import { ExternalLink, Smartphone } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      name: "NASM EDGE",
      description:
        "NASM (National Academy of Sports Medicine) – A global leader in fitness, nutrition, and wellness education since 1987. Known for pioneering the Certified Personal Trainer (CPT) credential and the OPT™ model, NASM has trained over 1.5 million professionals across 100+ countries.",
      website: "https://www.nasm.org/",
      android: "https://play.google.com/store/apps/details?id=com.nasm.edge",
      ios: "https://apps.apple.com/us/app/nasm-edge-personal-trainers/id1353245169",
    },
    {
      name: "TALENTNOVA",
      description:
        "A free, AI-powered career platform designed for justice-impacted job seekers. It helps users build professional resumes, find tailored job opportunities, practice interviews, and access live career coaching.",
      website: "https://talentnova.com/",
    },
    {
      name: "DREAMSCAPE",
      description:
        "An immersive VR-based educational platform created through a collaboration between Arizona State University and Dreamscape Immersive. It blends cinematic storytelling, interactive VR, and advanced pedagogy to revolutionize how students learn.",
      website: "https://www.dreamscapelearn.com/",
      additionalLink: {
        url: "https://dreamscapeimmersive.com/",
        label: "Dreamscape Immersive",
      },
    },
    {
      name: "AFUSE",
      description:
        "A social networking platform that bridges the gap between high school students and colleges. It enables prospective students to create interactive profiles showcasing their personalities, interests, and lifestyles.",
      website: "https://afuse.app/",
      android: "https://play.google.com/store/apps/details?id=com.afuse",
      ios: "https://apps.apple.com/in/app/afuse-your-college-circle/id6475763907",
    },
    {
      name: "WATCHPARTY",
      description:
        "An all-in-one multimedia entertainment platform for performers, DJs, producers, comedians, and speakers. Features include live-streamed performances, virtual competitions, collaborations, and booking promotions.",
      android: "https://play.google.com/store/apps/details?id=com.veereo",
    },
    {
      name: "FOOD SAFETY APPELLATE TRIBUNAL",
      description:
        "The Food Safety Appellate Tribunal (FSAT) is a government organization located in Jaipur, Rajasthan, responsible for monitoring and enforcing food safety rules and regulations.",
      website: "https://fsat-raj.in/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Key Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 shadow-medium hover:shadow-large transition-all group"
              >
                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.website && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Website
                      </a>
                    </Button>
                  )}
                  {project.additionalLink && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <a
                        href={project.additionalLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.additionalLink.label}
                      </a>
                    </Button>
                  )}
                  {project.android && (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                    >
                      <a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Smartphone className="w-4 h-4" />
                        Android
                      </a>
                    </Button>
                  )}
                  {project.ios && (
                    <Button
                      asChild
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                    >
                      <a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Smartphone className="w-4 h-4" />
                        iOS
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
