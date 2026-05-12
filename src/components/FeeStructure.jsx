import React from "react";

const FeeStructure = () => {
  const oneToOne = [
    { grade: "Elementary", aed: "AED 8,998", usd: "$2,450 USD" },
    { grade: "Middle School", aed: "AED 10,650", usd: "$2,900 USD" },
    { grade: "High School", aed: "AED 15,057", usd: "$4,100 USD" },
  ];
  const group = [
    { grade: "Elementary", aed: "AED 6,978", usd: "$1,900 USD" },
    { grade: "Middle School", aed: "AED 8,263", usd: "$2,250 USD" },
    { grade: "High School", aed: "AED 12,119", usd: "$3,300 USD" },
  ];
  return (
    <div className="py-16 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Fee Structure
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-400">One-to-One Learning</h3>
            <div className="space-y-4">
              {oneToOne.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="font-semibold">{item.grade}</span>
                  <span className="text-gray-300">{item.aed}</span>
                  <span className="text-gray-400 text-sm">{item.usd}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-6">Final fees may vary based on student requirements and enrollment plan.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-400">Group Learning</h3>
            <div className="space-y-4">
              {group.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="font-semibold">{item.grade}</span>
                  <span className="text-gray-300">{item.aed}</span>
                  <span className="text-gray-400 text-sm">{item.usd}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-6">Final fees may vary based on student requirements and enrollment plan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeeStructure;