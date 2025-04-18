
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Avatar className="h-64 w-64 border-4 border-primary/20">
              <AvatarImage src="/lovable-uploads/1504b1cb-becc-460e-8456-7d7794aa5ff9.png" alt="Profile Image" />
              <AvatarFallback>CJ</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="text-lg mb-4">
              Experienced Software Developer with around 8 years of expertise in designing and building enterprise-level 
              applications across banking, healthcare, retail, and financial services domains.
            </p>
            <p className="text-lg mb-4">
              Proficient in Java, Spring Boot, Microservices, RESTful APIs, ReactJS, and Angular, with a strong focus on 
              developing scalable and high-performance applications using cutting-edge technologies.
            </p>
            <p className="text-lg mb-4">
              Deep expertise in cloud technologies including AWS, GCP, and Azure, with comprehensive experience in 
              serverless computing, containerization (Docker, Kubernetes), and CI/CD pipeline optimization.
            </p>
            <p className="text-lg mb-4">
              Specialized in implementing robust security solutions using OAuth2, JWT, Spring Security, and 
              creating efficient, event-driven architectures with technologies like Apache Kafka and RabbitMQ.
            </p>
            <p className="text-lg mb-4">
              Committed to Agile methodologies, Test-Driven Development, and continuous learning, 
              consistently delivering innovative solutions that drive business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
