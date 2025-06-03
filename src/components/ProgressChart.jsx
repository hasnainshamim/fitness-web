import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressChart = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{metric.name}</span>
                <span className="text-sm text-muted-foreground">
                  {metric.value}/{metric.target} {metric.unit}
                </span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Progress value={(metric.value / metric.target) * 100} />
              </motion.div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;