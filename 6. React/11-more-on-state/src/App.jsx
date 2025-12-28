import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    name: "Ali",
    age: 25,
  });

  const [skills, setSkills] = useState([]);

  const changeAge = () => {
    setUser({
      ...user,
      age: 30,
    });
  };

  const addSkill = () => {
    const newSkill = `Skill#${skills.length + 1}`;
    setSkills((prev) => [...prev, newSkill]);
  };

  const removeSkill = (currIndex) => {
    setSkills((prev) => prev.filter((_, index) => index !== currIndex));
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <button onClick={changeAge}>Change Age</button>

      <ul>
        {skills.map((skill, index) => (
          <li>
            {skill} -{" "}
            <button onClick={() => removeSkill(index)}>Remove Skill</button>
          </li>
        ))}
      </ul>
      <button onClick={addSkill}>Add skill</button>

      {/* <h1>Count: {count}</h1>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>Decrease</button> */}
    </div>
  );
}

export default App;
