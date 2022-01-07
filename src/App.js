import logo from './logo.svg';
import './App.css';
/* import MiModulo from './MiModulo' */
import { MiModulo } from './MiModulo'
import { NavBar } from '../src/components/NavBar'

function App() {
  return (
    <div className="App">

      <NavBar/>

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

console.log("HGFGOKDFOGHK");



export default App;
