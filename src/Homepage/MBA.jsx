import React from "react";
import mba from "../assets/mba/mba.jpg";

const ProgramStructureOverview2 = () => {
  return (
    <div className="flex justify-center items-center my-30" id="program">
      <div className="flex  gap-10 w-full max-w-[1200px] justify-start max-lg:flex-col max-lg:gap-10">
        <div className="">
          <img src={mba} alt="" className="object-cover rounded-xl" />
        </div>
        <div className="max-w-3xl max-lg:pl-5 mx-auto bg-white rounded-md">
          <h2 className="text-red-700 text-4xl max-lg:text-3xl font-bold mb-4 uppercase">
            Program Structure Overview
          </h2>

          <div className="space-y-4 text-sm text-gray-800">
            <div>
              <h3 className="font-bold text-2xl mb-2">Objective</h3>
              <p className="text-base">
                To prepare world class Real Estate and Constrcution professional for Global, Construction and Real Estate Market.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-y-2 gap-x-4 text-base">
              <span className="font-bold max-lg:text-lg text-gray-700">Duration:</span>
              <span>2 year</span>

              <span className="font-bold max-lg:text-lg text-gray-700">Intake:</span>
              <span>30 Students</span>

              <span className="font-bold max-lg:text-lg text-gray-700">
                Reservation of Seats:
              </span>
              <span>Open for all</span>

              <span className="font-bold max-lg:text-lg text-gray-700">Eligibility:</span>
              <span>
                Any fresher seeking admission to the program must possess a bachelor's degree from any Statutory University or any other recognized Foreign University with 45% Marks
              </span>

              <span className="font-bold max-lg:text-lg text-gray-700">
                Selection Procedure:
              </span>
              <span>Interview</span>

              <span className="font-bold max-lg:text-lg text-gray-700">
                Program Specialization:
              </span>
              <span>MBA - Real Estate Management (Anjaneya University)</span>

              <span className="font-bold max-lg:text-lg text-gray-700">
                Learning Mode:
              </span>
              <span>Classroom and Internship</span>

              <span className="font-bold max-lg:text-lg text-gray-700">Assessment:</span>
              <span>
                All courses will have 30% internal component and 70% external component exam.
              </span>

              <span className="font-bold max-lg:text-lg text-gray-700">
                Standard of Passing:
              </span>
              <span>
                Students securing more than or equal to 40% of absolute marks for passing/subject.
              </span>

              <span className="font-bold max-lg:text-lg text-gray-700">
                Award of Certificate:
              </span>
              <span>
                The certificate will be accredited by Anjaneya University, at the end of last semester's examination by considering the performance of all semester examinations after obtaining a minimum 40% aggregate out of 100%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramStructureOverview2;
