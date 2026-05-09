import { Card } from "@/components/ui/card";

interface AboutProps {
  data: {
    summery: string;
  };
}

const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Career Summary
          </h2>

          <Card className="p-8 md:p-12 shadow-large">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {data.summery}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
