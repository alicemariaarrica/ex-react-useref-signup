import React, { useState } from "react";





function App() {

  const [fullName, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experienceYrs, setExperienceYrs] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => { e.preventDefault(); }

  return (
    <div>
      <h1>Web developer Signup</h1>
      <form onSubmit={handleSubmit}>
        {/* Appena viene premuto il Submit nel Form, viene eseguita la funzione(handleSubmit) che generalmente può: Controllare che tutti i campi siano validi, Se tutto è ok, stampare i dati in console, Mandare i dati a un'API e come in questo caso(e.preventDefault(): impedire il comportamento di Default di far ricaricare la pagina.*/}
        <label>
          <p>Fullname</p>
          <input type="text"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)} />
        </label>
        <label>
          <p>Username</p>
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          <p>Specialization</p>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <label>
          <p>Years of experience</p>
          <input type="number"
            value={experienceYrs}
            onChange={(e) => setExperienceYrs(e.target.value)} />
        </label>
        <label>
          <p>Brief description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

        </label>
      </form>
    </div >
  );
}

export default App;