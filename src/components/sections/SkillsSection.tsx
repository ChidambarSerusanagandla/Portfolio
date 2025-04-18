import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Database, Server, Cloud, GitBranch, TestTube, 
  Layers, LayoutGrid, Workflow, ArrowRightLeft, Package, 
  Component, Landmark
} from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: Code,
    items: ["Java (8/11/17)", "JavaScript (ES6+)", "TypeScript", "Python"],
    expertise: ["Java", "JavaScript", "TypeScript"]
  },
  {
    category: "Front-End",
    icon: LayoutGrid,
    items: ["ReactJS", "Angular", "HTML5", "CSS3", "Bootstrap", "Redux", "Material UI"],
    expertise: ["ReactJS", "Angular", "Redux"]
  },
  {
    category: "Back-End",
    icon: Server,
    items: ["Spring Boot", "Spring MVC", "Spring Security", "REST APIs", "Hibernate", "Node.js"],
    expertise: ["Spring Boot", "REST APIs", "Hibernate"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Cassandra"],
    expertise: ["PostgreSQL", "MongoDB", "Cassandra"]
  },
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS (Lambda, S3, RDS, EKS, CloudWatch)", "GCP", "Azure"],
    expertise: ["AWS", "GCP"]
  },
  {
    category: "DevOps & Containerization",
    icon: Component,
    items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS CodePipeline", "GitHub Actions"],
    expertise: ["Docker", "Kubernetes", "Terraform"]
  },
  {
    category: "Messaging & Streaming",
    icon: ArrowRightLeft,
    items: ["Apache Kafka", "RabbitMQ"],
    expertise: ["Apache Kafka", "RabbitMQ"]
  },
  {
    category: "Testing",
    icon: TestTube,
    items: ["JUnit", "Mockito", "Cypress", "Jest", "Selenium"],
    expertise: ["JUnit", "Mockito", "Cypress"]
  },
  {
    category: "Version Control & CI/CD",
    icon: GitBranch,
    items: ["Git", "Bitbucket", "SVN", "GitHub Actions", "Jenkins"],
    expertise: ["Git", "GitHub Actions"]
  },
  {
    category: "Build & Dependency Management",
    icon: Package,
    items: ["Maven", "Gradle"],
    expertise: ["Maven", "Gradle"]
  },
  {
    category: "Project Management & Agile",
    icon: Workflow,
    items: ["Jira", "Confluence", "Scrum", "Kanban"],
    expertise: ["Jira", "Scrum"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive expertise across the full software development stack, with specialized knowledge in Java backends, modern frontends, and cloud infrastructure.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-primary/40">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-primary/10 mr-3">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                
                {/* Expertise section */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Top Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.expertise.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">All Skills:</h4>
                  <ul className="grid grid-cols-1 gap-y-1">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
