import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, TrendingUp, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import ProgressChart from "@/components/ProgressChart";
import FitnessGoalCard from "@/components/FitnessGoalCard";

const ProgressPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  
  const weeklyProgress = {
    title: "Weekly Activity",
    metrics: [
      { name: "Workouts Completed", value: 4, target: 5, unit: "workouts" },
      { name: "Active Minutes", value: 180, target: 200, unit: "min" },
      { name: "Calories Burned", value: 1200, target: 1500, unit: "cal" }
    ]
  };
  
  const monthlyProgress = {
    title: "Monthly Progress",
    metrics: [
      { name: "Workouts Completed", value: 16, target: 20, unit: "workouts" },
      { name: "Active Minutes", value: 720, target: 800, unit: "min" },
      { name: "Calories Burned", value: 4800, target: 6000, unit: "cal" }
    ]
  };
  
  const fitnessGoals = [
    {
      title: "Improve Cardio Endurance",
      description: "Complete cardio workouts to build stamina",
      completed: false,
      steps: [
        { text: "Complete 5 cardio sessions", completed: true },
        { text: "Increase workout duration to 30 minutes", completed: true },
        { text: "Maintain heart rate in target zone", completed: false },
        { text: "Complete a 5K run/walk", completed: false }
      ]
    },
    {
      title: "Build Core Strength",
      description: "Focus on core exercises for better stability",
      completed: false,
      steps: [
        { text: "Complete 8 core workouts", completed: true },
        { text: "Hold plank for 60 seconds", completed: false },
        { text: "Master proper form for 5 core exercises", completed: true },
        { text: "Incorporate core work 3x weekly", completed: false }
      ]
    },
    {
      title: "Improve Flexibility",
      description: "Enhance range of motion through stretching",
      completed: true,
      steps: [
        { text: "Complete 10 flexibility sessions", completed: true },
        { text: "Hold each stretch for 30 seconds", completed: true },
        { text: "Practice yoga 2x weekly", completed: true },
        { text: "Touch toes without bending knees", completed: true }
      ]
    }
  ];
  
  const recentWorkouts = [
    { name: "Morning Energizer", date: "Today", duration: 20, calories: 180 },
    { name: "Strength Builder", date: "Yesterday", duration: 40, calories: 320 },
    { name: "Flexibility Flow", date: "3 days ago", duration: 30, calories: 200 },
    { name: "Core Power", date: "5 days ago", duration: 25, calories: 220 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Progress</h1>
        <p className="text-lg text-muted-foreground">
          Track your fitness journey and celebrate your achievements
        </p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Calendar className="h-8 w-8 text-primary" />
                <span className="text-sm text-muted-foreground">This Month</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold">16</h3>
                <p className="text-sm text-muted-foreground">Workouts Completed</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Clock className="h-8 w-8 text-primary" />
                <span className="text-sm text-muted-foreground">This Month</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold">720</h3>
                <p className="text-sm text-muted-foreground">Active Minutes</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <span className="text-sm text-muted-foreground">This Month</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold">4,800</h3>
                <p className="text-sm text-muted-foreground">Calories Burned</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Award className="h-8 w-8 text-primary" />
                <span className="text-sm text-muted-foreground">All Time</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold">5</h3>
                <p className="text-sm text-muted-foreground">Achievements Earned</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      {/* Progress Charts */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Activity Progress</h2>
          <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {selectedPeriod === "week" ? (
            <ProgressChart data={weeklyProgress} />
          ) : (
            <ProgressChart data={monthlyProgress} />
          )}
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Recent Workouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentWorkouts.map((workout, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div>
                      <h4 className="font-medium">{workout.name}</h4>
                      <p className="text-sm text-muted-foreground">{workout.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{workout.duration} min</p>
                      <p className="text-sm text-muted-foreground">{workout.calories} cal</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Fitness Goals */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Your Fitness Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fitnessGoals.map((goal, index) => (
            <FitnessGoalCard key={index} goal={goal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;