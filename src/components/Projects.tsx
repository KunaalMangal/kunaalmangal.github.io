import { ExternalLink, Smartphone } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  name: string;
  description: string;
  website?: string;
  android?: string;
  ios?: string;
  additionalLink?: {
    url: string;
    label: string;
  };
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
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
                  {project?.website && (
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
                  {project?.additionalLink && (
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
                  {project?.android && (
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
                  {project?.ios && (
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
