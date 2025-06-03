import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AgeGroupSelector = ({ selectedGroup, onSelect }) => {
  const ageGroups = [
    { id: "young-adult", name: "Young Adult", range: "24-35", description: "Focus on building strength and endurance" },
    { id: "mid-adult", name: "Mid Adult", range: "36-50", description: "Balance and functional fitness" },
    { id: "senior-adult", name: "Senior Adult", range: "51-65", description: "Mobility and healthy aging" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {ageGroups.map((group) => (
        <motion.div
          key={group.id}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Card 
            className={`cursor-pointer h-full transition-colors ${
              selectedGroup === group.id 
                ? "border-primary bg-primary/5" 
                : "hover:border-primary/50"
            }`}
            onClick={() => onSelect(group.id)}
          >
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-1">{group.name}</h3>
              <p className="text-sm font-medium text-primary mb-2">Ages {group.range}</p>
              <p className="text-sm text-muted-foreground">{group.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default AgeGroupSelector;