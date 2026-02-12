import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Career Summary
          </h2>

          <Card className="p-8 md:p-12 shadow-large">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Frontend Software Developer with{" "}
              <span className="font-semibold text-foreground">
                5+ years of experience
              </span>{" "}
              in React.js & React Native, building scalable, cross-platform web
              and mobile applications. Skilled in JavaScript, Redux, Firebase,
              REST APIs, and UI/UX. Recognized as{" "}
              <span className="font-semibold text-foreground">
                Top 100 Fellow in XROS Fellowship 2023
              </span>{" "}
              (supported by Meta) among 10,000 applicants. Passionate about
              delivering performant, user-centric applications and driving
              innovation in frontend development.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
