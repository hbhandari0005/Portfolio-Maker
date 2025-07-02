import { useEffect } from 'react';
import Navbar from "./Navbar";

function Port() {
  const data = JSON.parse(localStorage.getItem("data"));
  const skill = Array.isArray(data.skill)? data.skill: data.skill?.split(",").map(s => ({ name: s.trim() })) || [];
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <h3 className="text-2xl">No portfolio data found</h3>
        <p>Please enter your information first.</p>
      </div>
    );
  }

  const navLinks = [
    data.skill?.length > 0 && { id: 'skills', label: 'Skills' },
    data.project?.length > 0 && { id: 'projects', label: 'Projects' },
    data.experience?.length > 0 && { id: 'experience', label: 'Experience' },
    data.education?.length > 0 && { id: 'education', label: 'Education' },
    data.coding?.length > 0 && { id: 'coding', label: 'Coding' }
  ].filter(Boolean);

  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
    <Navbar navLinks={navLinks} name={data.name} />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold break-words">{data.name}</h2>
        <p className="text-base sm:text-lg break-all">📧 {data.email}</p>
        <p className="break-all">📞 {data.number}</p>
        <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base">{data.summary}</p>
      </div>

      {skill?.length > 0 && (
        <section id="skills">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">💡 Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skill.map((s, i) => (
              <span key={i} className="bg-purple-700 px-3 py-1 rounded-full text-sm sm:text-base">
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {data.project?.length > 0 && (
        <section id="projects">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">📁 Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.project.map((p, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/10 shadow">
                <h4 className="text-lg sm:text-xl font-bold mb-1">{p.name}</h4>
                <p className="text-white/70 text-sm mb-1">
                  {p.from} - {p.to}
                </p>
                <p className="text-sm sm:text-base">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.experience?.length > 0 && (
        <section id="experience">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">🏢 Experience</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.experience.map((e, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/10 shadow">
                <h4 className="text-lg font-bold mb-1">{e.company}</h4>
                <p className="text-white/70 text-sm">{e.role}</p>
                <p className="text-white/70 text-sm">{e.from} - {e.to}</p>
                <p className="text-sm sm:text-base">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education?.length > 0 && (
  <section id="education">
    <h3 className="text-xl sm:text-2xl font-semibold mb-3">🎓 Education</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {data.education.map((e, i) => (
        <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/10 shadow">
          <h4 className="text-lg font-bold mb-1">{e.degree || e.role}</h4>
          <p className="text-white/70 text-sm">{e.start || e.from} - {e.end || e.to}</p>
          <p className="text-white/80 text-sm">Percentage: {e.percentage}%</p>
        </div>
      ))}
    </div>
  </section>
)}


      {data.coding?.length > 0 && (
        <section id="coding">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">💻 Coding Profiles</h3>
          <div className="space-y-3 text-sm sm:text-base break-all">
            {data.coding.map((c, i) => (
              <div key={i}>
                <span className="font-semibold">{c.name}: </span>
                <a href={c.link} className="text-blue-300 underline" target="_blank" rel="noreferrer">
                  {c.link}
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  </div>
);

}

export default Port;
