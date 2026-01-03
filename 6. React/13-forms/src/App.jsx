import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    jobTitle: "",
    skills: ["test"],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // submit action
    console.log("Submitted: ", form);
  };

  const handleSkillchange = (e, index) => {
    const value = e.target.value;

    setForm((prev) => {
      const newSkills = [...prev.skills];
      newSkills[index] = value;

      return {
        ...prev,
        skills: newSkills,
      };
    });
  };

  const addNewSkill = () => {
    setForm((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const removeSkill = (index) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Enter your name ..."
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Enter your email ..."
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Job title</label>
          <input
            name="jobTitle"
            onChange={handleChange}
            value={form.jobTitle}
            placeholder="Enter your Job title ..."
          />
        </div>

        <h3>Skills</h3>

        <p>
          <button type="button" onClick={addNewSkill}>
            Add new skill
          </button>
        </p>

        {form.skills.map((skill, index) => (
          <div key={index}>
            <input
              value={skill}
              onChange={(e) => handleSkillchange(e, index)}
            />
            <button type="button" onClick={() => removeSkill(index)}>
              Remove
            </button>
          </div>
        ))}

        <p>
          <button type="submit">Submit</button>
        </p>
      </form>

      {JSON.stringify(form, null, 2)}
    </div>
  );
}

export default App;
