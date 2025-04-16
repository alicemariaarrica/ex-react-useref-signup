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
      <form onSubmit={handleSubmit}></form>   {/* Appena viene premuto il Submit nel Form, viene eseguita la funzione(handleSubmit) che generalmente può: Controllare che tutti i campi siano validi, Se tutto è ok, stampare i dati in console, Mandare i dati a un'API e come in questo caso(e.preventDefault(): impedire il comportamento di Default di far ricaricare la pagina. }
    </div>
  );
}

export default App;