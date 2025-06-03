import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  const { name, age, text, rating, image, ageGroup } = testimonial;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12 mr-4">
              {image ? (
                <AvatarImage src={image} alt={name} />
              ) : (
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
            <div>
              <h4 className="font-medium">{name}</h4>
              <p className="text-sm text-muted-foreground">Age {age}, {ageGroup}</p>
            </div>
          </div>
          
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          
          <p className="text-sm italic">"{text}"</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;