import React from "react";
import { useState } from React



function App() {

  const [fullName, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experienceYrs, setExperienceYrs] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <h1>Web developer Signup</h1>
    </div>
  );
}

export default App;