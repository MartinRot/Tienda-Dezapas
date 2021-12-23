import logo from './logo.svg';
import './App.css';
/* import MiModulo from './MiModulo' */
import { MiModulo } from './MiModulo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          BIENVENIDOS - REACT JS 2021
        </p>      

        <section>
          <h2>
            holA!
          </h2>
        </section>

      </header>

        <section>
          <h3>
            hola !
          </h3>
        </section>

        <MiModulo/>   

    </div>
  );
}

export default App;
