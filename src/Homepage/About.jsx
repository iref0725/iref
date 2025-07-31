import React from "react";
import { BookOpen, Globe, Phone } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function EducationAboutSection() {
  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-6" id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
            {/* Left Side - Images */}
          <div className="relative w-full lg:w-auto flex justify-center lg:justify-start">
            {/* Main layout container */}
            <div className="relative flex gap-3 md:gap-6 scale-85 sm:scale-90 lg:scale-100">
              <div className="flex flex-col gap-6 md:gap-10 items-end">
                {/* Top left rectangular image */}
                <div className="w-48 md:w-60 h-72 md:h-96 rounded-t-[40px] md:rounded-t-[60px] rounded-bl-[40px] md:rounded-bl-[60px] overflow-hidden shadow-xl z-10">
                  <img
                    src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Woman studying"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Orange badge - 30 Years */}
                <div
                  className="w-full h-20 md:h-28 bg-red-700 flex justify-center items-center rounded-b-[20px] md:rounded-b-[30px] rounded-tl-[20px] md:rounded-tl-[30px] 
                p-3 md:p-4 text-white shadow-xl z-30"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-1.5 md:p-2">
                      <BookOpen className="w-4 h-4 md:w-6 md:h-6 text-black" />
                    </div>
                    <div className="text-sm md:text-lg">
                      <div className="font-bold">30 Years Of</div>
                      <div className="font-medium">Quality Service</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:gap-10">
                {/* Top right circular image */}
                <div className="w-48 h-48 md:w-64 md:h-64 p-2 rounded-full border-2 border-dashed overflow-hidden shadow-xl z-20">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Students collaborating"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Bottom center rounded rectangle */}
                <div className="w-48 md:w-60 h-56 md:h-74 rounded-b-[40px] md:rounded-b-[60px] rounded-tr-[40px] md:rounded-tr-[60px] overflow-hidden shadow-xl z-10">
                  <img
                    src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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
              <div className="flex items-center underline gap-2 text-orange-500 text-2xl font-semibold mb-3 md:mb-4">
                ABOUT US
              </div>
              <h2 className="text-4xl lg:text-5xl font-[roboto] font-bold text-gray-900 leading-tight mb-3 md:mb-4">
                Our Education System Inspires You More.
              </h2>

              <p className="text-gray-600 leading-relaxed text-base">
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected humour
                randomised words which don't look even slightly believable. If
                you are going to use passage.
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="grid gap-4 md:gap-6 w-full lg:w-1/2">
                {/* Education Services */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-orange-100 rounded-full p-2 md:p-3 flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-gray-900">
                      Education Services
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      It is a long established fact that reader will to using
                      content.
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
                      International Hubs
                    </h4>
                    <p className="text-gray-600 text-base leading-relaxed">
                      It is a long established fact that reader will to using
                      content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left w-full lg:w-1/2">
                <p className="text-gray-600 text-base leading-relaxed">
                  It is a long established fact that a reader will be distracted
                  by the content of a page when looking at its reader for the
                  long words layout.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-6 md:pt-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
