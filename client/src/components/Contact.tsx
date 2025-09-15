import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { trackEvent } from "@/lib/analytics";
import { Phone, MessageCircle, MapPin, Rocket } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  location: z.string().min(1, "Please select your location"),
  budget: z.string().optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { id: "seo", label: "SEO" },
  { id: "social-media", label: "Social Media" },
  { id: "website", label: "Website" },
  { id: "ppc", label: "PPC Ads" },
  { id: "content", label: "Content Creation" },
  { id: "full-package", label: "Full Package" },
];

const locations = [
  { value: "mohali", label: "Mohali" },
  { value: "chandigarh", label: "Chandigarh" },
  { value: "panchkula", label: "Panchkula" },
  { value: "zirakpur", label: "Zirakpur" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "10k-25k", label: "₹10K-25K" },
  { value: "25k-50k", label: "₹25K-50K" },
  { value: "50k-1l", label: "₹50K-1L" },
  { value: "1l+", label: "₹1L+" },
];

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      location: "",
      budget: "",
      services: [],
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you within 24 hours with your personalized audit.",
      });
      form.reset();
      trackEvent('form_submit', 'contact', 'success');
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      trackEvent('form_submit', 'contact', 'error');
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    trackEvent('form_submit', 'contact', 'attempt');
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              <span data-testid="text-contact-title">Ready to Grow Your Business</span><br/>
              <span className="gradient-text" data-testid="text-contact-subtitle">in Mohali & Tricity?</span>
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-contact-description">
              Request a free strategy consultation. Includes competitive analysis tailored to your region.
            </p>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field} 
                            data-testid="input-name"
                          />
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
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your@email.com" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp Number *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="+91-XXXXX-XXXXX" 
                            {...field} 
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your business name" 
                            {...field} 
                            data-testid="input-company"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-location">
                              <SelectValue placeholder="Select your location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {locations.map((location) => (
                              <SelectItem key={location.value} value={location.value}>
                                {location.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-budget">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range.value} value={range.value}>
                                {range.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <FormLabel>Services Needed *</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {services.map((service) => (
                          <FormField
                            key={service.id}
                            control={form.control}
                            name="services"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={service.id}
                                  className="flex items-center space-x-3 space-y-0 p-3 rounded-xl border border-input hover:bg-muted transition-colors duration-200"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(service.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, service.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== service.id
                                              )
                                            )
                                      }}
                                      data-testid={`checkbox-service-${service.id}`}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    {service.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us about your business goals</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your current challenges, goals, and what success looks like for your business..."
                          className="resize-none"
                          rows={4}
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-xl font-semibold text-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-form"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  {submitMutation.isPending ? "Submitting..." : "Get My Free Strategy Session"}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground" data-testid="text-response-time">
                  We'll respond within 24 hours with your personalized audit and strategy recommendations.
                </p>
              </form>
            </Form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-contact-call">Call Us</h3>
              <p className="text-muted-foreground" data-testid="text-contact-phone">+91-9780267246</p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-contact-whatsapp">WhatsApp</h3>
              <p className="text-muted-foreground" data-testid="text-contact-whatsapp-desc">Quick Response Guaranteed</p>
            </div>
            
            <div className="glass rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2" data-testid="text-contact-visit">Visit Us</h3>
              <p className="text-muted-foreground" data-testid="text-contact-address">Mohali, Punjab</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
