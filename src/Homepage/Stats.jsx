import React, { useState, useEffect } from "react";
import { BookOpen, Users, GraduationCap, Trophy } from "lucide-react";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatCard = ({ icon: Icon, number, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`flex flex-col items-center text-center transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Icon with orange shield background */}
      <div className="relative mb-4 md:mb-6">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-4 h-4 md:w-6 md:h-6 bg-red-300 rounded-full opacity-60"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 md:w-4 md:h-4 bg-orange-600 rounded-full opacity-40"></div>
      </div>

      {/* Number */}
      <div className="text-xl md:text-2xl font-bold  mb-2 drop-shadow-lg">
        {isVisible ? <AnimatedCounter end={number} /> : "0"}
      </div>

      {/* Label */}
      <div className="text-sm md:text-lg text-gray-800 font-medium tracking-wide px-2 leading-tight">
        {label}
      </div>

      {/* Decorative line */}
      <div className="w-12 md:w-16 h-1 bg-orange-400 mt-2 md:mt-3 rounded-full"></div>
    </div>
  );
};

export default function EducationStats() {
  return (
    <div className="relative bg-gradient-to-br from-teal-400/30 via-teal-500/30 to-emerald-600/30 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-6 py-8 md:py-12 ">
        <div className="max-w-7xl mx-auto w-full">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
            <StatCard
              icon={BookOpen}
              number={11}
              label="+ Years Of Experience"
              delay={200}
            />
            <StatCard
              icon={Users}
              number={5000}
              label="Alumni"
              delay={400}
            />
            <StatCard
              icon={GraduationCap}
              number={5}
              label="+ National Awards"
              delay={600}
            />
            <StatCard
              icon={Trophy}
              number={150}
              label="+ Entrepreneurs Developed"
              delay={800}
            />
            <StatCard
              icon={Trophy}
              number={100}
              label="% Job For All PG Students"
              delay={1000}
            />
            <StatCard
              icon={Trophy}
              number={20}
              label="+ Real Estate Startups Supports"
              delay={1200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}