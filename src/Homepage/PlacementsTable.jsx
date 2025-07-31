import React from "react";

export default function PlacementsTable() {
  const data = [
    {
      employer: "HFC/NBFC/Bank",
      role1: "Mortgage and Housing Finance",
      role2: "Other types of loans/Asset Division",
      role3: "Product and Process",
    },
    {
      employer: "Real Estate Construction Services",
      role1: "Project Manager",
      role2: "RERA Consultant/Government Licensing",
      role3: "Project Coordinator",
    },
    {
      employer: "Real Estate Construction",
      role1:
        "Construction Supervisor and Manager, Billing Estimation and Contracting Manager, Safety and Quality Manager",
      role2: "Marketing Manager / Project Licensing / Land Acquisition",
      role3: "ERP, MS Project and Design Manager",
    },
    {
      employer: "Construction and Infrastructure",
      role1: "Construction Supervisor and Manager",
      role2: "Business Development Manager",
      role3: "Construction Project Manager",
    },
    {
      employer: "Equity/MFs/Investment Banking",
      role1: "Transactional Advisory",
      role2: "Research",
      role3: "Portfolio Management",
    },
    {
      employer: "Real Estate/IPC/Facility Management",
      role1: "Business Development / Investment Consultant / Marketing Manager",
      role2: "Funding and Investments",
      role3: "Research and Advisory",
    },
    {
      employer: "E-Commerce & Warehouse",
      role1: "Property Acquisition Manager",
      role2: "Property Development Manager",
      role3: "Facility and Operation Manager",
    },
    {
      employer: "Start-up/Co-working",
      role1: "Business Development",
      role2: "Property Transformation Manager",
      role3: "Property Acquisition Manager",
    },
    {
      employer: "Hospitality/Hotel Industry",
      role1: "Property Acquisition and Development Manager",
      role2: "Business Development Manager",
      role3: "Property Development Manager",
    },
    {
      employer: "International Companies",
      role1: "Project Management",
      role2: "Business Development Manager",
      role3: "Construction Project Manager",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50" id="employment">
      <div className="max-w-7xl mx-auto">
        {/* Headline Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
   Employment Opportunities After the Course
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
Kickstart your career with roles in real estate, finance, investment advisory, and property management. Our training prepares you for high-demand positions across the industry.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="min-w-full text-left border border-gray-300 text-sm md:text-base">
            <thead className="bg-red-700 text-white">
              <tr>
                <th className="py-3 px-4 border border-gray-300 font-semibold">
                  Employer
                </th>
                <th className="py-3 px-4 border border-gray-300 font-semibold">
                  Role 1
                </th>
                <th className="py-3 px-4 border border-gray-300 font-semibold">
                  Role 2
                </th>
                <th className="py-3 px-4 border border-gray-300 font-semibold">
                  Role 3
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-3 px-4 border border-gray-300 font-medium">
                    {row.employer}
                  </td>
                  <td className="py-3 px-4 border border-gray-300">{row.role1}</td>
                  <td className="py-3 px-4 border border-gray-300">{row.role2}</td>
                  <td className="py-3 px-4 border border-gray-300">{row.role3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
