import { useState, useEffect } from 'react'

export default function App() {

  const [Nome, setNome] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Specializzazione, setSpecializzazione] = useState("");
  const [Testo, setTesto] = useState("");


  {/*qua ho scritto il codice del submit*/ }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui metti le tue validazioni:
    if (!Nome || !Username || !Password || !Specializzazione || !Descrizione) {
      alert("Compila tutti i campi!");
      return;
    }
    if (AnniEsperienza <= 0) {
      alert("Inserisci un numero di anni di esperienza positivo");
      return;
    }
    // Se è tutto ok:
    console.log({ Nome, Username, Password, Specializzazione, AnniEsperienza, Testo });
  };

  return (

    <div className="InputForms">


      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Scrivi il tuo nome"
          value={Nome}
          onChange={e => setNome(e.target.value)}
        />


        <input
          type="text"
          placeholder="Scrivi il tuo username"
          value={Username}
          onChange={e => setUsername(e.target.value)}
        />


        <input
          type="password"
          placeholder="Scrivi la tua password"
          value={Password}
          onChange={e => setPassword(e.target.value)}
        />


        <select
          value={Specializzazione}
          onChange={e => setSpecializzazione(e.target.value)}
        >
          <option value="">Seleziona la tua specializzazione </option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>


        <input
          type="text"
          placeholder="Scrivi la tua esperienza"
          value={Testo}
          onChange={e => setTesto(e.target.value)}
        />

        <button type="submit">Registrati</button>
      </form>



    </div>
  );


}