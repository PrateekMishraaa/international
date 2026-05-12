import React from "react";
import { Award, Trophy, Heart, Lightbulb, Languages, DollarSign, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { icon: <Award className="w-8 h-8" />, title: "Fully Accredited U.S. Schooling", desc: "Receive a globally recognized U.S. High School Diploma accepted by universities worldwide." },
    { icon: <Trophy className="w-8 h-8" />, title: "NCAA & College Board Approved", desc: "Ideal for students aiming for international universities, AP courses, or scholarships." },
    { icon: <Heart className="w-8 h-8" />, title: "Inclusive for All Learning Styles", desc: "Ideal for advanced learners, struggling students, or children needing personalized pacing." },
    { icon: <Lightbulb className="w-8 h-8" />, title: "Strong Academic Foundation", desc: "U.S. curriculum focused on critical thinking, creativity, and practical skills." },
    { icon: <Languages className="w-8 h-8" />, title: "Multilingual Teacher Support", desc: "Teachers from 50+ countries speaking 40+ languages support diverse learners." },
    { icon: <DollarSign className="w-8 h-8" />, title: "Lower Fees Than Traditional Schools", desc: "Premium American education at the most affordable cost in the UAE." },
    { icon: <Users className="w-8 h-8" />, title: "Support for Multicultural Families", desc: "Designed for families from 200+ nationalities living in the UAE." },
  ];
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Benefits of Online School for UAE Families
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-400 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Benefits;