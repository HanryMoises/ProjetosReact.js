import './App.css';
import Componente from "./components/Exemple";
// import Componente from "./components/Exemple";


export default function App() {
  const nome = "Hanry"
 
  return (
    <div className="App">
      <h1>Minha primeira aplicação react</h1>
      <p>{nome} está aprendendo react sozinho!</p>
      <Componente.Botao texto="parametro" />
      <Componente.Parametro texto="<TextoRecebido>" />
    </div>
  );
}

