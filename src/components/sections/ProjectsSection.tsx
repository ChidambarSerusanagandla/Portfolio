import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Shield, ShoppingCart, CreditCard, Calendar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const projectCategories = ["All", "Banking", "Healthcare", "E-commerce", "FinTech"];

const projects = [
  {
    id: 1,
    title: "Secure Banking Platform",
    role: "Senior Java Full Stack Developer",
    timeframe: "April 2023 – Present",
    description: "Built a secure, scalable banking application for handling transactions, loans, and account management.",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1000&auto=format&fit=crop",
    category: "Banking",
    company: "First Citizens Bank",
    tags: ["Spring Boot", "Microservices", "AWS", "Kubernetes", "ReactJS"],
    tools: ["Spring Boot", "ReactJS", "AWS", "Kubernetes", "OAuth2", "JWT", "Kafka", "Jenkins", "Docker"],
    problem: "The bank needed a modern, secure platform to replace legacy systems that couldn't efficiently handle the growing volume of digital transactions and account activities.",
    solution: "Designed and implemented a microservices architecture using Spring Boot, deployed on AWS with Kubernetes for scalability, and built responsive ReactJS dashboards for users and staff.",
    outcome: "Successfully modernized the banking infrastructure, improved transaction processing time by 40%, enhanced security with OAuth2 and JWT, and enabled real-time fraud detection with Kafka.",
    keyPoints: [
      "Designed microservices using Spring Boot, deployed via Kubernetes on AWS",
      "Developed secure REST APIs with OAuth2, JWT, and RBAC",
      "Enabled real-time updates using Kafka for fraud detection & transaction events",
      "Built responsive dashboards in ReactJS for user and staff experiences",
      "Integrated CI/CD with Jenkins, automated testing, and feature toggles for smooth rollouts"
    ],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Healthcare Management System",
    role: "Java Full Stack Developer",
    timeframe: "February 2021 – March 2023",
    description: "Developed a modern platform to manage patients, appointments, medical records, and billing.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    category: "Healthcare",
    company: "NextGen Healthcare",
    tags: ["Angular", "Spring Boot", "AWS Lambda", "GraphQL", "Microservices"],
    tools: ["Angular", "Spring Boot", "AWS Lambda", "GraphQL", "Elasticsearch", "Redis", "OAuth2", "JWT", "Microservices"],
    problem: "Healthcare providers needed an integrated system to efficiently manage patient data, appointments, medical records, and billing while maintaining HIPAA compliance.",
    solution: "Implemented a microservices architecture for different healthcare workflows, built with Angular frontend and Spring Boot backend, utilizing AWS Lambda for notifications.",
    outcome: "Delivered a HIPAA-compliant platform that streamlined patient management, reduced appointment no-shows by 35% through automated reminders, and accelerated billing processes.",
    keyPoints: [
      "Implemented microservices for patient flows, billing, and claims",
      "Built the frontend with Angular and backend with Spring Boot",
      "Used AWS Lambda for appointment reminders and notifications",
      "Integrated GraphQL, Elasticsearch, and Redis for fast, efficient data access",
      "Followed HIPAA-compliant security with OAuth2, JWT, and secure API Gateway"
    ],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "E-commerce Order Processing System",
    role: "Full Stack Developer",
    timeframe: "January 2019 – January 2021",
    description: "Delivered an order processing system handling customer purchases, payments, and inventory.",
    image: "https://images.unsplash.com/photo-1526570207772-784d36084510?q=80&w=1000&auto=format&fit=crop",
    category: "E-commerce",
    company: "Office Depot",
    tags: ["Spring Boot", "Docker", "AWS ECS", "ReactJS", "Kafka"],
    tools: ["Spring Boot", "Docker", "AWS ECS", "ReactJS", "Kafka", "RabbitMQ", "MongoDB", "Redis", "OAuth2", "JWT"],
    problem: "Office Depot needed a modern order processing system to replace their legacy platform that struggled with high-volume periods and lacked real-time inventory updates.",
    solution: "Created a microservices architecture using Spring Boot and deployed with Docker on AWS ECS, implementing message queues with Kafka and RabbitMQ for reliable order processing.",
    outcome: "The new system handled 3x the order volume during peak periods, reduced order processing time by 65%, and provided real-time inventory and order status updates.",
    keyPoints: [
      "Created microservices with Spring Boot, deployed via Docker & AWS ECS",
      "Built a real-time order tracking dashboard using ReactJS",
      "Integrated Kafka and RabbitMQ for messaging between services",
      "Secured the platform using OAuth2, JWT, and API rate limiting",
      "Optimized performance with MongoDB sharding and Redis caching"
    ],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 4,
    title: "FinTech Payment Gateway",
    role: "Java Developer",
    timeframe: "June 2017 – December 2018",
    description: "Built a real-time payment gateway integrated with banks, merchants, and financial APIs.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    category: "FinTech",
    company: "Lister Technologies",
    tags: ["Spring Boot", "Kafka", "MongoDB", "Docker", "Kubernetes"],
    tools: ["Spring Boot", "Kafka", "MongoDB", "Docker", "Kubernetes", "GCP", "OAuth2", "JWT", "Jenkins", "ELK Stack"],
    problem: "Financial institutions needed a secure, reliable payment gateway to process transactions across multiple channels while detecting and preventing fraudulent activities.",
    solution: "Developed secure services with Spring Boot, implemented real-time transaction processing with Kafka and MongoDB, and deployed using Docker and Kubernetes on GCP.",
    outcome: "Successfully delivered a payment platform that processed 10,000+ transactions per minute with 99.99% uptime, reducing transaction failures by 75% and fraud instances by 60%.",
    keyPoints: [
      "Developed secure services using Spring Boot, OAuth2, and JWT",
      "Implemented real-time transaction processing using Kafka and MongoDB",
      "Used Docker + Kubernetes on GCP for scalable, resilient deployments",
      "Enabled fraud detection via rule-based logic and real-time event tracking",
      "Set up CI/CD pipelines with Jenkins, and monitoring with the ELK Stack"
    ],
    liveLink: "#",
    repoLink: "#"
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="experiences" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Professional Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          A selection of enterprise experiences I've developed throughout my career, showcasing my expertise in building secure, scalable applications.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Banking":
        return <Building className="h-5 w-5" />;
      case "Healthcare":
        return <Shield className="h-5 w-5" />;
      case "E-commerce":
        return <ShoppingCart className="h-5 w-5" />;
      case "FinTech":
        return <CreditCard className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              {project.company} | {project.role}
            </CardDescription>
            <div className="flex items-center mt-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {project.timeframe}
            </div>
          </div>
          <div className="flex items-center">
            {getCategoryIcon(project.category)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm mb-4">{project.description}</p>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details">
            <AccordionTrigger className="text-sm font-medium">
              Project Details
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold">Problem:</h4>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Solution:</h4>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Outcome:</h4>
                  <p>{project.outcome}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="keyPoints">
            <AccordionTrigger className="text-sm font-medium">
              Key Contributions
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {project.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <Badge key={index} variant="outline" className="text-xs">{tool}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
