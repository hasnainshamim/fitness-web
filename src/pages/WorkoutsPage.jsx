import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import WorkoutCard from "@/components/WorkoutCard";

const WorkoutsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [durationRange, setDurationRange] = useState([15]);
  
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
    },
    {
      title: "Core Power",
      level: "Intermediate",
      duration: 25,
      calories: 220,
      category: "Strength",
      imageUrl: ""
    },
    {
      title: "Senior Mobility",
      level: "Beginner",
      duration: 35,
      calories: 150,
      category: "Mobility",
      imageUrl: ""
    },
    {
      title: "HIIT Challenge",
      level: "Advanced",
      duration: 45,
      calories: 450,
      category: "Cardio",
      imageUrl: ""
    },
    {
      title: "Balance & Stability",
      level: "All Levels",
      duration: 30,
      calories: 180,
      category: "Balance",
      imageUrl: ""
    },
    {
      title: "Gentle Yoga",
      level: "Beginner",
      duration: 40,
      calories: 160,
      category: "Flexibility",
      imageUrl: ""
    },
    {
      title: "Functional Fitness",
      level: "Intermediate",
      duration: 35,
      calories: 280,
      category: "Strength",
      imageUrl: ""
    }
  ];

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredWorkouts = workouts.filter((workout) => {
    // Filter by search query
    if (searchQuery && !workout.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by duration
    if (workout.duration < durationRange[0]) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Workouts</h1>
        <p className="text-lg text-muted-foreground">
          Discover workouts tailored for your age group and fitness level
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search workouts..."
              className="pl-10"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={toggleFilters}
          >
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </Button>
        </div>
        
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-muted/30 rounded-lg p-6 mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Workout Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="cardio">Cardio</SelectItem>
                    <SelectItem value="strength">Strength</SelectItem>
                    <SelectItem value="flexibility">Flexibility</SelectItem>
                    <SelectItem value="balance">Balance</SelectItem>
                    <SelectItem value="mobility">Mobility</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Age Group</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Ages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ages</SelectItem>
                    <SelectItem value="young-adult">24-35</SelectItem>
                    <SelectItem value="mid-adult">36-50</SelectItem>
                    <SelectItem value="senior-adult">51-65</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-3">
                <label className="block text-sm font-medium mb-2">
                  Duration: {durationRange[0]} minutes or more
                </label>
                <Slider
                  value={durationRange}
                  min={5}
                  max={60}
                  step={5}
                  onValueChange={setDurationRange}
                  className="py-4"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Workouts Grid */}
      {filteredWorkouts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout, index) => (
            <WorkoutCard key={index} workout={workout} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No workouts found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
          <Button onClick={() => {
            setSearchQuery("");
            setDurationRange([15]);
          }}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default WorkoutsPage;