import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Flame, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedWorkout = ({ workout }) => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/70 z-10"></div>
      <img  
        className="absolute inset-0 w-full h-full object-cover" 
        alt="Featured workout image"
       src="https://images.unsplash.com/photo-1689876593463-6678f2e8d4f2" />
      
      <div className="relative z-20 p-8 md:p-12 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <span className="bg-yellow-500/20 text-yellow-300 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Featured Workout
          </span>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            {workout.title}
          </h2>
          <p className="text-white/80 max-w-xl">
            {workout.description}
          </p>
        </motion.div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
            <Clock className="h-5 w-5 text-white/80 mr-2" />
            <span className="text-white">{workout.duration} min</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
            <Flame className="h-5 w-5 text-white/80 mr-2" />
            <span className="text-white">{workout.calories} calories</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-white">{workout.level} Level</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Button size="lg" className="group">
            Start Workout
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkout;