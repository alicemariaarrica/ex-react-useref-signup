import React from "react";
import { useState } from React



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
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default App;