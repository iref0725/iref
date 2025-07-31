import React from "react";
import methodology1 from "../assets/methodology/methodology1.png";
import methodology2 from "../assets/methodology/methodology2.png";

export default function TrainingMethodology() {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="text-gray-800 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight font-[roboto] text-gray-900">
            Training <br /> Methodology
          </h2>

          <p className="text-base leading-relaxed">
            A competent and experienced team of trainers at the Institute of Real Estate and Finance (IREF) ensures comprehensive student development. Activities such as classroom programs, case studies, group projects, practicals, and site/industry visits form an integral part of the curriculum.
          </p>

          <p className="text-base leading-relaxed">
            The training approach balances classroom sessions with hands-on experiences, group activities, and real-world exposure. To stay aligned with the evolving real estate sector, IREF organizes regular site visits showcasing the latest developments and technologies.
          </p>

          <p className="text-base leading-relaxed">
            Our Student Managers consistently make a mark in the corporate world due to their strong exposure and refined skillsets. Annual seminars and conclaves connect them directly with CEOs and industry leaders, enhancing their professional insight.
          </p>
        </div>

        {/* Image Section */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={methodology1}
              alt="Classroom Training"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src={methodology2}
              alt="Site Visit"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
