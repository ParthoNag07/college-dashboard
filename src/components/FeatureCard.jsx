function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold mb-3 text-gray-800">
        {title}
      </h2>

      <p className="text-gray-600">
        {desc}
      </p>

      <button className="mt-5 text-blue-600 font-semibold hover:underline">
        Explore →
      </button>

    </div>
  );
}

export default FeatureCard;