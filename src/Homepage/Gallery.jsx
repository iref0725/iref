import React from "react";
import gallery1 from "../assets/gallery/gallery1.png";
import gallery2 from "../assets/gallery/gallery2.png";
import gallery3 from "../assets/gallery/gallery3.png";
import gallery4 from "../assets/gallery/gallery4.png";
import gallery5 from "../assets/gallery/gallery5.png";
import gallery6 from "../assets/gallery/gallery6.png";
import gallery7 from "../assets/gallery/gallery7.png";
import gallery8 from "../assets/gallery/gallery8.png";
import gallery9 from "../assets/gallery/gallery9.png";
import gallery10 from "../assets/gallery/gallery10.png";
import gallery11 from "../assets/gallery/gallery11.png";
import gallery12 from "../assets/gallery/gallery12.png";
import gallery13 from "../assets/gallery/gallery13.png";
import gallery14 from "../assets/gallery/gallery14.png";
import gallery15 from "../assets/gallery/gallery15.png";
import gallery16 from "../assets/gallery/gallery16.png";
import gallery17 from "../assets/gallery/gallery17.png";

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11,
  gallery13, gallery14, gallery15, gallery16, gallery17
];

export default function SimpleGallery() {
  return (
    <section className="bg-white py-12 px-4 md:px-16" id="campus">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold font-[roboto] text-center text-red-700 mb-10">
          Campus Life & Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
