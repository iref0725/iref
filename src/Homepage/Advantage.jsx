import React from "react";
import advantage from "../assets/advantage/advantage.jpg";

export default function Advantage() {
  return (
    <div className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
           {/* Right Image */}
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-10 font-[roboto]">
            Institute of Real Estate and Finance Advantages
          </h1>
          {/* <p className="mb-4 text-lg text-gray-700">
            Gain real-world skills with expert-led training in real estate and
            finance. IREF offers practical learning, career support, and
            flexible programs to help you succeed in today’s competitive market.
          </p> */}
          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed list-disc pl-5">
            <li>
              Institute of Real Estate and Finance has vast Alumni network in
              Real Estate, Construction and Finance Sectorin India.
            </li>
            <li>
              Institute of Real Estate and Finance offers best education at
              affordable prices. Also it has tie up with financial institutions
              for student loan.
            </li>
            <li>
              Institute of Real Estate and Finance provides certification which
              is well recognized in Real Estate, Construction and Finance
              Industry
            </li>
            <li>
              Institute of Real Estate and Finance is backed up by various CEO,
              Directors and Entrepreneur across India and world wide.
            </li>
            <li>
              Institute of Real Estate and Finance continuously update the
              course curriculum as per the requirement of the industry.
            </li>
            <li>
              Institute of Real Estate and Finance is focused on problem solving
              oriented education.
            </li>
          </ul>
        </div>
        {/* Left Content */}

        <div className="w-full h-full">
          <img
            src={advantage} // Replace with your actual image path
            alt="IREF Advantages"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

     
      </div>
    </div>
  );
}
