import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './component/PrimerComponente';
import { SegundoComponente } from './component/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prueba
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuevo proyecto
        </a>
        <p>
          <PrimerComponente></PrimerComponente> 
          <hr></hr>
          <SegundoComponente></SegundoComponente>
        </p>

        


      </header>
    </div>
  );
}

export default App;
