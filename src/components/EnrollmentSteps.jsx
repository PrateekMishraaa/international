import React from "react";
import { FileText, User, BookOpen, CreditCard, PlayCircle } from "lucide-react";

const EnrollmentSteps = () => {
  const steps = [
    { icon: <FileText className="w-8 h-8" />, title: "Fill in student's details" },
    { icon: <User className="w-8 h-8" />, title: "Fill in parent/guardian details" },
    { icon: <BookOpen className="w-8 h-8" />, title: "Choose learning program and grade" },
    { icon: <CreditCard className="w-8 h-8" />, title: "Select payment plan" },
    { icon: <PlayCircle className="w-8 h-8" />, title: "Complete payment and start classes" },
  ];
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Enroll Your Child in Just 5 Minutes
        </h2>
        <p className="text-center text-gray-300 mb-12">Fast, simple & completely hassle-free.</p>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 -translate-y-1/2"></div>
                )}
              </div>
              <div className="font-semibold">
                <span className="text-blue-400">Step {i + 1}</span>
                <p className="text-sm mt-1">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EnrollmentSteps;