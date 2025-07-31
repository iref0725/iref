import React from "react";

// Import all 28 logos
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import logo12 from "../assets/logos/logo12.png";
import logo13 from "../assets/logos/logo13.png";
import logo14 from "../assets/logos/logo14.png";
import logo15 from "../assets/logos/logo15.png";
import logo16 from "../assets/logos/logo16.png";
import logo17 from "../assets/logos/logo17.png";
import logo18 from "../assets/logos/logo18.png";
import logo19 from "../assets/logos/logo19.png";
import logo20 from "../assets/logos/logo20.png";
import logo21 from "../assets/logos/logo21.png";
import logo22 from "../assets/logos/logo22.png";
import logo23 from "../assets/logos/logo23.png";
import logo24 from "../assets/logos/logo24.png";
import logo25 from "../assets/logos/logo25.png";
import logo26 from "../assets/logos/logo26.png";
import logo27 from "../assets/logos/logo27.png";
import logo28 from "../assets/logos/logo28.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
  logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
  logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24,
  logo25, logo26, logo27, logo28
];

export default function Placements() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12" id="placements">
      <div className="max-w-7xl mx-auto gap-10 items-center">

        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Placement & Internship
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Institute of Real Estate and Finance has a dedicated team for placement
            and internship which includes faculty members, students, and corporate
            professional members. The team has created a unique platform allowing
            students to interact and work under business leaders from the industry.
            Students also get opportunities to be placed during internship through
            pre-placement offers. Placement is the core objective of this entire
            program. We assure 100% placements to all our full-time students. We
            have value partners and associates who ensure students are placed in
            good organizations.
          </p>
        </div>

        {/* Logos */}
        <div className="w-full mt-10">
          <div className="flex flex-wrap justify-center gap-6 p-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company logo ${index + 1}`}
                className="w-40 max-lg:w-30 h-auto rounded-xl object-contain"
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
