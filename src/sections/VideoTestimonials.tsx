"use client";

const videos = [
  "/videos/testimony1.mp4",
  "/videos/testimony2.mp4",
  "/videos/testimony3.mp4",
  "/videos/testimony4.mp4",
];

export default function VideoTestimonials() {
  return (
    <section
      id="video-testimonials"
      className="py-28 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-widest text-[#166534] font-semibold">
            Video Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
            Watch Real Stories & Experiences
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Hear directly from people whose lives have
            been positively impacted through our programs
            and wellness solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              <video
                controls
                className="w-full h-[400px] object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}