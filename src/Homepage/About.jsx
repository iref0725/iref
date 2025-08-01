import React from "react";
import { BookOpen, Globe, Phone } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import about1 from "../assets/about/about1.jpg";
import about2 from "../assets/about/about2.jpg";
import about3 from "../assets/about/about3.jpg";

export default function EducationAboutSection() {
  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-6" id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
          {/* Left Side - Images */}
          <div className="relative w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative flex gap-3 md:gap-6 scale-85 sm:scale-90 lg:scale-100">
              <div className="flex flex-col gap-6 md:gap-10 items-end">
                <div className="w-48 md:w-60 h-72 md:h-96 rounded-t-[40px] md:rounded-t-[60px] rounded-bl-[40px] md:rounded-bl-[60px] overflow-hidden shadow-xl z-10">
                  <img
                    src={about1}
                    alt="Woman studying"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-20 md:h-28 bg-orange-500 flex justify-center items-center rounded-b-[20px] md:rounded-b-[30px] rounded-tl-[20px] md:rounded-tl-[30px] p-3 md:p-4 text-white shadow-xl z-30">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-1.5 md:p-2">
                      <BookOpen className="w-4 h-4 md:w-6 md:h-6 text-black" />
                    </div>
                    <div className="text-sm md:text-lg">
                      <div className="font-bold">Build Your Nation</div>
                      <div className="font-medium">Your Passion!</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:gap-10">
                <div className="w-48 h-48 md:w-64 md:h-64 relative p-2 rounded-full overflow-hidden z-20">
                  <img
                    src={about2}
                    alt="Students collaborating"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div
                    style={{ animationDuration: "20s" }}
                    className="w-50 h-50 absolute top-0 left-0 animate-spin md:w-64 md:h-64 p-2 rounded-full border-2 border-gray-500 border-dashed"
                  ></div>
                </div>

                <div className="w-48 md:w-60 h-56 md:h-74 rounded-b-[40px] md:rounded-b-[60px] rounded-tr-[40px] md:rounded-tr-[60px] overflow-hidden shadow-xl z-10">
                  <img
                    src={about3}
                    alt="Students studying"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 md:space-y-8 w-full lg:w-auto flex-1">
            {/* Header */}
            <div>
              {/* <div className="flex items-center underline gap-2 text-orange-500 text-2xl font-semibold mb-3 md:mb-4">
                ABOUT US
              </div> */}
              <h2 className="text-4xl lg:text-5xl font-[roboto] font-bold text-red-700 leading-tight mb-3 md:mb-4">
             IREF - Institute of Real Estate and Finance 
              </h2>

              <p className="text-gray-600 leading-relaxed text-base">
                Institute of Real Estate and Finance – Global Management School
                (IREF-GMS) is dedicated to providing world-class, skill-based
                education in Real Estate, Construction, and Finance. Established
                in 2019, IREF-GMS has empowered thousands of students and
                professionals with industry-relevant knowledge, global exposure,
                and affordable education. Supported by CEOs, directors, and
                entrepreneurs across India, the institute combines practical
                learning, expert faculty, and advanced technology to shape
                future-ready leaders. With a strong alumni network and updated
                curriculum, IREF-GMS bridges the gap between academia and
                real-world industry demands.
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="grid gap-4 md:gap-6 w-full">
                {/* Education Services */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-orange-100 rounded-full p-2 md:p-3 flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-gray-900">
                      VISION
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Our Vision to deploy quality education to the students, professionals
                      and entrepreneurs and offer competitive and professional
                      human resources for the Real Estate and allied. industry
                      sector.
                    </p>
                  </div>
                </div>

                {/* International Hubs */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-orange-100 rounded-full p-2 md:p-3 flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-gray-900">
                      MISSION
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Our Mission to bring forth quality training in the Real Estate,
                      Construction and Housing Finance sector using all the
                      latest and highly advanced technologies and partnership
                      with various stakeholders.
                    
                    </p>
                  </div>
                </div>
                 {/* International Hubs */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-orange-100 rounded-full p-2 md:p-3 flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-gray-900">
                      OUR PHILOSOPHY
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                       Our Philosophy knowledge is
                      power and leadership is a skill. When these two combine,
                      the individuals get transformed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-6 md:pt-8">
              <button
                className="bg-red-700 hover:bg-red-800 text-white pr-4 md:pr-5 p-2
                rounded-t-4xl rounded-bl-4xl font-semibold transition-colors duration-300 flex items-center gap-3 text-sm md:text-base"
              >
                <span className="bg-white rounded-full p-4 flex items-center justify-center text-xl md:text-3xl font-bold">
                  <Phone className=" text-black" size={20} />
                </span>
                <div className="flex flex-col text-left">
                  <div className=" text-gray-300 text-base font-medium">
                    Call Now
                  </div>
                  <div className="text-white font-bold text-base">
                    +91 7620563627
                  </div>
                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
