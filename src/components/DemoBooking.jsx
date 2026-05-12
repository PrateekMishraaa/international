import React, { useState } from "react";
import { Calendar, Clock, MapPin, X } from "lucide-react";

const DemoBooking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", grade: "", date: "", time: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Demo booked! We'll contact you soon."); setIsOpen(false); };
  return (
    <div className="py-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Book Free School Demo
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Our academic expert will guide you through our programs and answer your questions.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
        >
          Schedule Your Free Demo
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6 relative border border-white/10">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
            <h3 className="text-2xl font-bold mb-4">Book Your Free Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none" required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none" required />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none" required />
              <select name="grade" value={formData.grade} onChange={handleChange} className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600" required>
                <option value="">Select Grade</option><option>KG-5</option><option>6-8</option><option>9-12</option>
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600" required />
                <input type="time" name="time" value={formData.time} onChange={handleChange} className="px-4 py-2 bg-gray-700 rounded-lg border border-gray-600" required />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default DemoBooking;