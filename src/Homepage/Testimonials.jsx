import React from "react";

const testimonials = [
  {
    name: "Abisha Wachenuka",
    image: "/images/abisha.jpg", // Replace with actual path
    designation:
      "Entrepreneur, Founder – Inspired Relentless Innovators Symposium (Pty) Ltd",
    country: "Botswana",
    message:
      "I have taken several courses including Real Estate Professional and Real Estate Marketing and found the instructors to be professional and knowledgeable. The content was engaging and offered opportunities to apply my skills in real-world scenarios.",
  },
  {
    name: "Amit Sharma",
    image: "/images/amit.jpg", // Replace with actual path
    designation: "Business Development Executive, Shree Infra Realty",
    country: "India",
    message:
      "The practical knowledge and industry connections I gained at IREF were beyond my expectations. The mentorship and case-based learning helped me land my first job within two months of completing the program.",
  },
  {
    name: "Nokuthula Moyo",
    image: "/images/nokuthula.jpg", // Replace with actual path
    designation: "Real Estate Analyst, Urban Futures Group",
    country: "Zimbabwe",
    message:
      "IREF gave me global exposure and technical know-how in real estate development and finance. I’m now confident working on complex feasibility reports and investment strategies with international teams.",
  },
];

export default function StudentTestimonial() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-2 uppercase">
          Testimonials
        </h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-12">
          STUDENT SPEAKS
        </h3>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((student, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-24 h-24 rounded-lg object-cover border border-gray-300 mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">{student.name}</h4>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Designation:</strong> {student.designation}
                <br />
                <strong>Country:</strong> {student.country}
              </p>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {student.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
