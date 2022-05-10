import './App.css';
import Header from './components/Header';


function App() {

  const dados = {
    name: "Paulo Lucena",
    empresa: "Avanadeaaaa",
    cargo: "Desenvolvedor",
    className: "App-link",
    site: "https://www.google.com"
  }

  return (
    <div className="App">
      <Header title="Bem-Vindo!" options={dados}/>
    </div>
  );
}
 
export default App;
