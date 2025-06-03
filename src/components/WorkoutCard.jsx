import React from "react";
import { motion } from "framer-motion";
import { Clock, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WorkoutCard = ({ workout }) => {
  const { title, level, duration, calories, imageUrl, category } = workout;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="workout-card h-full overflow-hidden relative" style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}>
        <div className="p-6 flex flex-col h-full">
          <div className="mb-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-3">
              {category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80 text-sm mb-4">
              Perfect for {level} fitness levels
            </p>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-white/90">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{duration} min</span>
              </div>
              <div className="flex items-center text-white/90">
                <Flame className="h-4 w-4 mr-1" />
                <span className="text-sm">{calories} cal</span>
              </div>
            </div>
            
            <Button className="w-full group" variant="default">
              Start Workout
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default WorkoutCard;