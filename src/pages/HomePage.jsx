import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkoutCard from "@/components/WorkoutCard";
import FeaturedWorkout from "@/components/FeaturedWorkout";
import TestimonialCard from "@/components/TestimonialCard";
import AgeGroupSelector from "@/components/AgeGroupSelector";

const HomePage = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("young-adult");

  const featuredWorkout = {
    title: "Total Body Transformation",
    description: "A comprehensive workout designed for all fitness levels to build strength, improve cardio, and enhance flexibility.",
    duration: 45,
    calories: 450,
    level: "Intermediate"
  };

  const workouts = [
    {
      title: "Morning Energizer",
      level: "Beginner",
      duration: 20,
      calories: 180,
      category: "Cardio",
      imageUrl: ""
    },
    {
      title: "Strength Builder",
      level: "Intermediate",
      duration: 40,
      calories: 320,
      category: "Strength",
      imageUrl: ""
    },
    {
      title: "Flexibility Flow",
      level: "All Levels",
      duration: 30,
      calories: 200,
      category: "Flexibility",
      imageUrl: ""
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 32,
      ageGroup: "Young Adult",
      text: "FitLife has transformed my fitness journey. The personalized workouts are perfect for my busy schedule!",
      rating: 5,
      image: ""
    },
    {
      name: "Michael Chen",
      age: 45,
      ageGroup: "Mid Adult",
      text: "After turning 45, I needed a program that understood my body's changing needs. FitLife delivered exactly that.",
      rating: 4,
      image: ""
    },
    {
      name: "Patricia Garcia",
      age: 58,
      ageGroup: "Senior Adult",
      text: "The senior-focused workouts have improved my mobility and energy levels. I feel 10 years younger!",
      rating: 5,
      image: ""
    }
  ];

  const benefits = [
    {
      title: "Age-Appropriate Workouts",
      description: "Exercises designed specifically for your age group and fitness level."
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvements with detailed analytics and milestone celebrations."
    },
    {
      title: "Expert Guidance",
      description: "Workout plans created by certified trainers specializing in different age groups."
    },
    {
      title: "Community Support",
      description: "Connect with others in your age group for motivation and shared experiences."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/80 z-10"></div>
        <img  
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Diverse group of people exercising"
         src="https://images.unsplash.com/photo-1673922553727-fe98ea114d5e" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fitness for Every Age and Stage of Life
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Personalized workout plans designed specifically for adults aged 24-65, 
              helping you achieve your fitness goals regardless of your current fitness level.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Age Group Selection */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Fitness Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select your age group to discover workouts tailored specifically for your body's needs and fitness goals.
            </p>
          </div>
          
          <AgeGroupSelector 
            selectedGroup={selectedAgeGroup} 
            onSelect={setSelectedAgeGroup} 
          />
        </div>
      </section>

      {/* Featured Workout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedWorkout workout={featuredWorkout} />
        </div>
      </section>

      {/* Workout Categories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Explore Workouts</h2>
              <p className="text-muted-foreground">
                Discover workouts designed for your fitness level and goals
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 group">
              View All Workouts
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cardio">Cardio</TabsTrigger>
              <TabsTrigger value="strength">Strength</TabsTrigger>
              <TabsTrigger value="flexibility">Flexibility</TabsTrigger>
              <TabsTrigger value="balance">Balance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workouts.map((workout, index) => (
                  <WorkoutCard key={index} workout={workout} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cardio" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <WorkoutCard workout={workouts[0]} />
              </div>
            </TabsContent>
            
            <TabsContent value="strength" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <WorkoutCard workout={workouts[1]} />
              </div>
            </TabsContent>
            
            <TabsContent value="flexibility" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <WorkoutCard workout={workouts[2]} />
              </div>
            </TabsContent>
            
            <TabsContent value="balance" className="mt-0">
              <div className="p-8 text-center">
                <p className="text-muted-foreground">No balance workouts available yet. Check back soon!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose FitLife?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed to meet the unique fitness needs of adults at every stage of life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 shadow-sm border"
              >
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from people just like you who have transformed their fitness journey with FitLife.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
              <p className="text-white/90 text-lg max-w-xl">
                Join thousands of people who have transformed their lives with our age-appropriate fitness programs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="bg-white text-purple-600 hover:bg-white/90">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Fitness Community</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Connect with others in your age group who are on the same fitness journey. Share experiences, celebrate victories, and motivate each other.
              </p>
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-primary mr-3" />
                <span className="text-xl font-semibold">10,000+ active members</span>
              </div>
              <Button className="group">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="rounded-xl overflow-hidden">
                <img  
                  className="w-full h-auto" 
                  alt="Fitness community"
                 src="https://images.unsplash.com/photo-1563454621355-5ba92b92285c" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;