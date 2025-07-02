import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Form = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState([]);
  const [project, setProject] = useState([]);
  const [coding, setCoding] = useState([]);
  const [skill, setSkill] = useState([]);
  const [education, setEducation] = useState([]);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [desc, setDesc] = useState("");

  const [projectName, setprojectName] = useState("");
  const [projectFrom, setprojectFrom] = useState("");
  const [projectTo, setprojectTo] = useState("");
  const [projectDesc, setprojectDesc] = useState("");

  const [educationName, seteducationName] = useState("");
  const [educationFrom, seteducationFrom] = useState("");
  const [educationTo, seteducationTo] = useState("");
  const [educationPercentage, seteducationPercentage] = useState(0);

  const [siteName, setsiteName] = useState("");
  const [siteLink, setsiteLink] = useState("");

  const [newSkill, setnewSkill] = useState("");

  const handleChange = (func) => (e) => func(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name,
      email,
      number,
      summary,
      project,
      experience,
      education,
      skill,
      coding,
    };
    localStorage.setItem("data", JSON.stringify(newData));
    navigate("/port");
  };

  const handleExperience = () => {
    if (
      company !== "" &&
      role !== "" &&
      from !== "" &&
      to !== "" &&
      desc !== ""
    ) {
      const newExperience = { company, role, from, to, desc };
      setExperience([...experience, newExperience]);
      setCompany("");
      setFrom("");
      setTo("");
      setDesc("");
      setRole("");
    }
    else{
      toast.error("Add experience details properly")
    }
  };

  const handleProject = () => {
    if (
      projectName !== "" &&
      projectDesc !== "" &&
      projectFrom !== "" &&
      projectTo !== ""
    ) {
      const newProject = {
        name: projectName,
        from: projectFrom,
        to: projectTo,
        desc: projectDesc,
      };
      setProject([...project, newProject]);
      setprojectName("");
      setprojectFrom("");
      setprojectTo("");
      setprojectDesc("");
    } else {
      toast.error("Add project details properly");
    }
  };

  const handleEducation = () => {
    if (
      educationName !== "" &&
      educationPercentage !== "" &&
      educationFrom !== "" &&
      educationTo !== ""
    ) {
      const newEducation = {
        name: educationName,
        from: educationFrom,
        to: educationTo,
        percentage: educationPercentage,
      };
      setEducation([...education, newEducation]);
      seteducationName("");
      seteducationFrom("");
      seteducationTo("");
      seteducationPercentage(0);
    } else {
      toast.error("Add education details properly");
    }
  };

  const handleSkill = () => {
    if (newSkill !== "") {
      setSkill([...skill, newSkill]);
      setnewSkill("");
    } else {
      toast.error("Add skills");
    }
  };

  const handleCoding = () => {
    if (siteName !== "" && siteLink !== "") {
      const newSite = { name: siteName, link: siteLink };
      setCoding([...coding, newSite]);
      setsiteName("");
      setsiteLink("");
    } else {
      toast.error("Add coding profile details properly");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 text-white">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          🚀 Portfolio Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label>Name *</label>
              <input
                type="text"
                value={name}
                onChange={handleChange(setName)}
                required
                className="w-full p-2 rounded bg-white/20 text-white placeholder-white/70"
              />
            </div>
            <div>
              <label>Email *</label>
              <input
                type="email"
                value={email}
                onChange={handleChange(setEmail)}
                required
                className="w-full p-2 rounded bg-white/20 text-white placeholder-white/70"
              />
            </div>
            <div>
              <label>Phone *</label>
              <input
                type="tel"
                value={number}
                onChange={handleChange(setNumber)}
                required
                className="w-full p-2 rounded bg-white/20 text-white placeholder-white/70"
              />
            </div>
          </div>

          <div>
            <label>Summary *</label>
            <textarea
              rows="4"
              value={summary}
              onChange={handleChange(setSummary)}
              required
              className="w-full p-2 rounded bg-white/20 text-white placeholder-white/70"
            ></textarea>
          </div>

          <div>
            <label>Add Skill</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={newSkill}
                onChange={handleChange(setnewSkill)}
                className="flex-1 p-2 rounded bg-white/20 text-white placeholder-white/70"
              />
              <button
                type="button"
                onClick={handleSkill}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              {skill.map((s, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label>Project</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={handleChange(setprojectName)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="date"
                value={projectFrom}
                onChange={handleChange(setprojectFrom)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="date"
                value={projectTo}
                onChange={handleChange(setprojectTo)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <textarea
                placeholder="Project Description"
                value={projectDesc}
                onChange={handleChange(setprojectDesc)}
                className="p-2 rounded bg-white/20 text-white col-span-full"
              ></textarea>
              <button
                type="button"
                onClick={handleProject}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded col-span-full"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              {project.map((s, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label>Experience</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={handleChange(setCompany)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={handleChange(setRole)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="date"
                value={from}
                onChange={handleChange(setFrom)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="date"
                value={to}
                onChange={handleChange(setTo)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <textarea
                placeholder="Description"
                value={desc}
                onChange={handleChange(setDesc)}
                className="p-2 rounded bg-white/20 text-white col-span-full"
              ></textarea>
              <button
                type="button"
                onClick={handleExperience}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded col-span-full"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              {experience.map((s, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {s.role} at {s.company}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Education
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="School/College"
                value={educationName}
                onChange={handleChange(seteducationName)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="date"
                value={educationFrom}
                onChange={handleChange(seteducationFrom)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="date"
                value={educationTo}
                onChange={handleChange(seteducationTo)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="number"
                placeholder="%"
                value={educationPercentage}
                onChange={handleChange(seteducationPercentage)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <button
                type="button"
                onClick={handleEducation}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded col-span-full"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              {education.map((s, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <label>Coding Profiles</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Platform (e.g. GitHub)"
                value={siteName}
                onChange={handleChange(setsiteName)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <input
                type="url"
                placeholder="Profile Link"
                value={siteLink}
                onChange={handleChange(setsiteLink)}
                className="p-2 rounded bg-white/20 text-white"
              />
              <button
                type="button"
                onClick={handleCoding}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded col-span-full"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              {coding.map((s, idx) => (
                <span
                  key={idx}
                  className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
