
import { ArrowDown, Code, Database, Cloud, Server, Mail, Settings } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-10 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex gap-3 mb-6 animate-fade-in">
          <Code className="h-8 w-8 text-primary" />
          <Cloud className="h-8 w-8 text-primary" />
          <Database className="h-8 w-8 text-primary" />
          <Server className="h-8 w-8 text-primary" />
          <Settings className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-primary">Chidambar Serusanagandla</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Software Developer
        </h2>
        
        <p className="text-lg max-w-3xl mb-10 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Crafting innovative software solutions with passion and precision.
        </p>
        
        <a 
          href="#about" 
          className="mt-16 animate-bounce block hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
