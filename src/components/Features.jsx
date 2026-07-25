import FeatureCard from "./FeatureCard";

function Features() {

  const features = [
    {
      icon: "📚",
      title: "Digital Library",
      desc: "Access notes, books and learning resources anytime."
    },
    {
      icon: "🎯",
      title: "Campus Events",
      desc: "Discover hackathons, workshops and college activities."
    },
    {
      icon: "🏠",
      title: "Hostel Finder",
      desc: "Find hostel information and room availability."
    },
    {
      icon: "💬",
      title: "Student Community",
      desc: "Connect with students and share knowledge."
    }
  ];


  return (
    <section className="bg-slate-100 py-20 px-8">

      <h1 className="text-4xl font-bold text-center mb-12">
        Powerful Campus Features
      </h1>


      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {
          features.map((item,index)=>(
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))
        }

      </div>

    </section>
  );
}

export default Features;