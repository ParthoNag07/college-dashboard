function Dashboard() {
  return (
    <section className="py-20 px-8 bg-white">

      <h1 className="text-4xl font-bold text-center mb-12">
        Student Dashboard 📊
      </h1>


      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        <div className="p-6 rounded-2xl shadow-lg bg-blue-50">
          <h2 className="text-3xl font-bold text-blue-600">
            85%
          </h2>
          <p className="mt-2">
            Attendance
          </p>
        </div>


        <div className="p-6 rounded-2xl shadow-lg bg-green-50">
          <h2 className="text-3xl font-bold text-green-600">
            12
          </h2>
          <p className="mt-2">
            Assignments
          </p>
        </div>


        <div className="p-6 rounded-2xl shadow-lg bg-purple-50">
          <h2 className="text-3xl font-bold text-purple-600">
            5
          </h2>
          <p className="mt-2">
            Upcoming Events
          </p>
        </div>


        <div className="p-6 rounded-2xl shadow-lg bg-yellow-50">
          <h2 className="text-3xl font-bold text-yellow-600">
            24
          </h2>
          <p className="mt-2">
            Community Posts
          </p>
        </div>

      </div>


      <div className="max-w-6xl mx-auto mt-10 bg-slate-100 p-8 rounded-2xl">

        <h2 className="text-2xl font-bold mb-5">
          Recent Activities
        </h2>

        <ul className="space-y-3">

          <li>✅ Joined Web Development Workshop</li>
          <li>📚 Uploaded new study notes</li>
          <li>🏆 Participated in Hackathon</li>

        </ul>

      </div>


    </section>
  );
}

export default Dashboard;