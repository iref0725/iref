import React from 'react';

// Data for the testimonials
const testimonials = [
  {
    name: 'Abhishek Taru',
    quote: "IREF Institute has exceeded my expectations. The knowledgeable and engaging faculty, practical curriculum, and strong emphasis on real-world applications have significantly enriched my learning experience. The institute's supportive environment and modern facilities make it an ideal choice.",
    stars: 5,
  },
  {
    name: 'Bhushan Gaikwad',
    quote: 'Attending IREF was a transformative experience. The dedicated faculty, diverse range of courses, and vibrant campus community provided an enriching environment for both academic and personal growth. The knowledge I gained will doubtless shape my future endeavors positively.',
    stars: 5,
  },
  {
    name: 'Akshada Agre',
    quote: 'As a pharmacy student, it has been a great experience learning with the Institution of Real Estate, Construction, and Finance. It has enhanced my skills and provided a lot of great opportunities.',
    stars: 5,
  },
];

// Star component for rating
const StarRating = ({ count }) => {
  return (
    <div className="flex items-center">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear From Our Students
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover how our dedicated faculty and practical curriculum shape successful futures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="flex-grow">
                <blockquote className="text-gray-700">
                  <p>{`“${testimonial.quote}”`}</p>
                </blockquote>
              </div>
              <footer className="mt-6">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                {testimonial.stars && (
                  <div className="mt-2">
                    <StarRating count={testimonial.stars} />
                  </div>
                )}
              </footer>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <a
          href='https://www.google.com/search?q=irefglobal&sca_esv=bdc65ffe85f8e301&sxsrf=AE3TifPNIZ1rXDV-Ij6G2y8_ZgFXdK1BFg%3A1754117935750&ei=L7eNaLTHLZam2roPye328AU&ved=0ahUKEwj0mtHDxuuOAxUWk1YBHcm2HV4Q4dUDCBA&uact=5&oq=irefglobal&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmlyZWZnbG9iYWwyBxAAGIAEGA0yBxAAGIAEGA0yBhAAGA0YHjIGEAAYDRgeMgYQABgNGB4yCBAAGKIEGIkFSIMbUPMFWPgRcAF4AZABAJgBjQKgAaYKqgEFMC4yLjS4AQPIAQD4AQGYAgagAukKwgILEAAYgAQYkQIYigXCAgcQABiABBgKwgIFEAAY7wXCAgsQABiABBiGAxiKBcICCBAAGIAEGKIEmAMAiAYBkgcFMC4xLjWgB6UYsgcFMC4xLjW4B-kKwgcHMi0zLjIuMcgHPQ&sclient=gws-wiz-serp#'
            type="button"
            className="rounded-md bg-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
           
          >
            More Reviews
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;