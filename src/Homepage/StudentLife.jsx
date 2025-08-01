import React from "react";
  import Studentlife1 from "../assets/studentlife/studentlife1.png";
  import Studentlife2 from "../assets/studentlife/studentlife2.png";
  import Studentlife3 from "../assets/studentlife/studentlife3.png";

export default function StudentLife() {
  return (
    <section className="bg-gray-50 py-8 md:py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
          {/* Images Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              {/* Main tall image */}
              <div className="flex-shrink-0">
                <img
                  src={Studentlife1}
                  alt="Campus building"
                  className="rounded-xl shadow-md object-cover w-full sm:w-48 md:w-60 h-64 sm:h-80 md:h-[500px]"
                />
              </div>
              
              {/* Two stacked images */}
              <div className="flex flex-row sm:flex-col gap-4 md:gap-5 flex-1">
                <img
                  src={Studentlife2}
                  alt="Students in classroom"
                  className="rounded-xl shadow-md object-cover flex-1 sm:w-full w-20 h-32 sm:h-36 md:h-48 lg:h-56"
                />
                <img
                  src={Studentlife3}
                  alt="Student activities"
                  className="rounded-xl shadow-md object-cover flex-1 sm:w-full w-20 h-32 sm:h-36 md:h-48 lg:h-56"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-gray-700 order-1 lg:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-700 mb-4 md:mb-6 lg:mb-8">
                STUDENT LIFE
              </h2>
              <h3 className="font-semibold text-base md:text-lg mb-2">
                Student Development Activities
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                The numerous student development activities of IREF facilitate the overall progress and commitment of the students.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base md:text-lg mb-2">
                International Academic and Industry Exposure
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                IREF helps the student obtain international academic and industry exposure during the study period by introducing them to the global real estate markets like Dubai, Kuala Lumpur and Singapore. It helps the students get a comprehensive understanding of the international job and industry along with preparing them to be the global managers of the industry.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base md:text-lg mb-2">
                Soft Skills Training and Grooming
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                Soft skill development tends to develop the overall personality of an individual, hence IREF has introduced soft skills and personality in their curriculum conducting several training sessions to develop the skills. It implements the communication skills, knowledge and presentation skills of the students to create a long-lasting impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base md:text-lg mb-2">
                Allied Training Cell
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                The software and skill development training offered by IREF for allied topics like Microsoft Project, BIM and Primavera help the students ameliorate their skill as per the requirement of the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}