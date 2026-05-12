import React from "react";
import { Award, Clock, Languages, Compass, Home, Eye } from "lucide-react";

const WhyChoose = () => {
  const features = [
    { icon: <Award className="w-8 h-8" />, title: "Accredited & University-Ready", problem: "Parents want a credible U.S. high school qualification.", solution: "Your child earns recognized transcripts and a U.S. High School Diploma from a fully accredited school." },
    { icon: <Clock className="w-8 h-8" />, title: "Schedules That Fit UAE Life", problem: "Busy routines make fixed school timings difficult.", solution: "We offer Live one-to-one or group classes designed for maximum flexibility." },
    { icon: <Languages className="w-8 h-8" />, title: "Built for Multilingual Learners", problem: "Students need strong academic English support.", solution: "Our teachers, from 50+ countries speaking 40+ languages, guide learners with patient instruction." },
    { icon: <Compass className="w-8 h-8" />, title: "Great for Families Who Travel", problem: "Relocation interrupts learning in traditional systems.", solution: "Your child can continue the same program seamlessly, even if you move across cities or countries." },
    { icon: <Home className="w-8 h-8" />, title: "Comfortable & Safe Learning", problem: "Commute time creates unnecessary stress.", solution: "Students learn from home with a consistent, stress-free routine." },
    { icon: <Eye className="w-8 h-8" />, title: "Parent Visibility", problem: "Parents want clear insight into their child's progress.", solution: "We provide live performance tracking and regular updates." },
  ];
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Why UAE Families Choose International Online School in UAE
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-400 mb-4">{feat.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
              <p className="text-red-400 text-sm mb-2">Problem: {feat.problem}</p>
              <p className="text-green-400 text-sm">Solution: {feat.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;