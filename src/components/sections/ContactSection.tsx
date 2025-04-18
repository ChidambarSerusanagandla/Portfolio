import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Rss } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from 'emailjs-com';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const serviceId = 'service_syuapqm';
      const templateId = 'template_wuxd0gd';
      const userId = 'mkibvP5qrRh6GN1bW';
      
      const templateParams = {
        user_name: data.name,
        user_email: data.email,
        user_message: data.message,
        reply_to: data.email
      };
      
      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-md border-primary/10">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:chidambarraos12@gmail.com" className="hover:text-primary transition-colors">
                  chidambarraos12@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:+19402901606" className="hover:text-primary transition-colors">
                  +1 (940)-290-1606
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>Texas, United States</span>
              </div>
              
              <div className="pt-4 flex gap-4">
                <Button asChild size="icon" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  <a href="https://github.com/ChidambarSerusanagandla" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  <a href="https://www.linkedin.com/in/chidambar-serusanagandla/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="outline" className="border-primary/20 hover:bg-primary/10">
                  <a href="https://medium.com/@chidambarraos12" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                    <Rss className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-primary/10">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
