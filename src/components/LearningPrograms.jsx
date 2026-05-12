import React from "react";
import { Users, User, BookOpen, Calendar, Clock, Award, CheckCircle } from "lucide-react";

const LearningPrograms = () => {
  const programs = [
    { icon: <Users className="w-12 h-12" />, title: "Live Group Classes", sub: "1 Teacher | 10-15 Students", desc: "Dynamic classroom experience with fixed timings and collaborative projects.", features: ["Group Live Classes", "Fixed Timings", "60 min each", "Fixed Assessments", "Collaborative Assignments", "3 Counseling Sessions", "3 Career Sessions", "3 Parent Meetings"] },
    { icon: <User className="w-12 h-12" />, title: "Live One-to-One Classes", sub: "1 Teacher | 1 Student", desc: "Personalized live classes designed to fit your schedule.", features: ["One-To-One Live", "Flexible Timings", "50 min each", "Flexible Assessments", "Exempt from group work", "6 Counseling", "6 Career Sessions", "6 Parent Meetings"] },
    { icon: <BookOpen className="w-12 h-12" />, title: "Self-Learning", sub: "500+ Courses", desc: "Self-paced study with teacher feedback.", features: ["Self-paced Study", "Flexible timings", "No Live Classes", "Flexible dates", "Personalized material", "No deadlines", "24/7 support", "500+ courses"] },
    { icon: <Calendar className="w-12 h-12" />, title: "Self-Learning Plus", sub: "500+ Courses + 1 Live Class/Week", desc: "Self-paced plus doubt clearing sessions.", features: ["Self-paced with doubt clearing", "Flexible timings", "1 live class/week (60 min)", "Flexible assessments", "Personalized material", "No deadlines", "Mon-Fri support", "500+ courses"] },
  ];
  return (
    <div className="py-16 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Choose the Learning Plan That Fits Your Child
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-400 mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-1">{program.title}</h3>
              <p className="text-blue-400 text-sm mb-3">{program.sub}</p>
              <p className="text-gray-300 text-sm mb-4">{program.desc}</p>
              <ul className="space-y-2">
                {program.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LearningPrograms;