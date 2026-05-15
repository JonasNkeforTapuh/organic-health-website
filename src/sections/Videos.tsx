export default function Videos() {
  return (
    <section className="py-28 bg-gray-100 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-widest text-[#166534] font-semibold">
          Video Showcase
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
          Watch Our Impact
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Explore inspiring moments from our outreach,
          wellness programs, seminars, and testimonials.
        </p>

        {/* VIDEO */}
        <div className="mt-16 aspect-video rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Company Video"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}