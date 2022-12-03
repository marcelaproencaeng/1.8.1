import { useState } from "react";
import "./styles.css";
const Personagens = () => {};
export default function App() {
  const personagens = [
    "Jill Valentine",
    "Jack Baker",
    "Claire Redfield",
    "Ada Wong",
    "Chris Redfield",
    "Leon S. Kennedy",
    "Albert Wesker",
    "Lucas Baker"
  ];
  const [nome, setNome] = useState("");
  function onClickRedfield() {    
    const Redfield=(event)=>{
      setNome('Redfield')
}
  }
  function onClickBaker() {
    const Baker=(event)=>{
      setNome('Baker')
    }
  }

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <button onClick={onClickRedfield}>listar Redfield</button>

      <button onClick={onClickBaker}>listar Baker</button>
      <ul>
        {personagens
          .filter(() => true)
          .map((personagem) => (
            <li>{personagem}</li>
          ))}
      </ul>
    </div>
  );
}
