import React, { lazy, Suspense, useState } from "react";
import {
  Users,
  Globe,
  BookOpen,
  Calendar,
  Star,
  ChevronDown,
  CheckCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Lazy load non-critical sections
const DemoBooking = lazy(() => import("../components/DemoBooking"));
const WhyChoose = lazy(() => import("../components/WhyChoose"));
const LearningPrograms = lazy(() => import("../components/LearningPrograms"));
const Benefits = lazy(() => import("../components/Benefits"));
const FeeStructure = lazy(() => import("../components/FeeStructure"));
const EnrollmentSteps = lazy(() => import("../components/EnrollmentSteps"));
const FAQ = lazy(() => import("../components/FAQ"));

const UAE = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "2,500+", label: "Students from UAE" },
    { icon: <Globe className="w-8 h-8" />, value: "600+", label: "Certified Teachers" },
    { icon: <BookOpen className="w-8 h-8" />, value: "500+", label: "Course Options" },
    { icon: <Calendar className="w-8 h-8" />, value: "11+", label: "Years of Trust" },
  ];
  const logos = [
    { name: "NEASC", bg: "from-blue-600 to-blue-800" },
    { name: "WASC", bg: "from-purple-600 to-purple-800" },
    { name: "Cognia", bg: "from-emerald-600 to-emerald-800" },
    { name: "College Board", bg: "from-rose-600 to-rose-800" },
    { name: "NCAA", bg: "from-amber-600 to-amber-800" },
  ];
  const reviews = [
    { quote: "International Schooling provided my child with a seamless and high-quality education.", name: "Parent From Colombia, Living in UAE" },
    { quote: "The flexibility and support have been amazing for our family.", name: "Parent From Malaysia, Living in UAE" },
    { quote: "My child's academic growth has been remarkable since joining.", name: "Parent From UAE" },
  ];
  const faqs = [
    { q: "Is your diploma accepted in the UAE and internationally?", a: "Yes. Our accreditation supports recognition of transcripts and diploma for admissions and transfers." },
    { q: "Are class timings suitable for UAE time zones?", a: "Yes. Group schedules are GST-friendly, and one-to-one classes are fully flexible." },
    { q: "Is it suitable for expat families?", a: "Yes. It works well for families who relocate or travel often." },
    { q: "What grades do you offer?", a: "We offer a full KG-12 American curriculum." },
    { q: "How do students socialize?", a: "Through live classes, group projects, clubs, and online activities." },
  ];
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <main className="pt-20">
        <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Most Trusted & Recommended Online School in UAE
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Trusted by families in the UAE since 2014 | 2,000+ UAE families
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Free School Demo
              </button>
            </div>
          </div>
        </div>
        <div className="py-16 bg-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fully Accredited By
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {logos.map((logo, i) => (
                <div key={i} className={`bg-gradient-to-r ${logo.bg} px-6 py-3 rounded-full font-semibold text-white shadow-lg`}>
                  {logo.name}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 max-w-3xl mx-auto">
              International Schooling, since 2014, is the most trusted international online school
              in Dubai & UAE, offering American Curriculum, accredited by NEASC, WASC, and Cognia.
            </p>
          </div>
        </div>
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Satisfied and Happy Parents
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <Star className="w-8 h-8 text-yellow-400 mb-4" />
                  <p className="text-gray-300 italic mb-4">"{review.quote}"</p>
                  <p className="font-semibold text-blue-400">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Suspense fallback={<div className="text-center py-8">Loading sections...</div>}>
          <DemoBooking />
          <WhyChoose />
          <LearningPrograms />
          <Benefits />
          <FeeStructure />
          <EnrollmentSteps />
          <div className="py-16 bg-gray-800/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:bg-white/10 transition-colors"
                    >
                      {faq.q}
                      <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-4 text-gray-300 border-t border-white/10 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default UAE;