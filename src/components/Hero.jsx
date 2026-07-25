function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white py-24 px-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Smart Campus Hub 🎓
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            A smart platform where students can manage events,
            resources, communication and campus activities easily.
          </p>

          <div className="flex gap-4">

            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Explore Campus
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Get Started
            </button>

          </div>

        </div>


        {/* Right Image Card */}
        <div className="flex justify-center">

          <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl">

            <div className="text-7xl">
              🏫
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Digital Campus
            </h2>

            <p className="text-gray-200 mt-2">
              Learn, connect and grow together.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;