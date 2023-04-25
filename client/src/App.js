import './App.css';
import {useState} from 'react'
import Login from './components/amministratore/login';
import ScegliStanza from './components/cliente/scegliStanza';

function App() {

  const [accedi, setAccedi] = useState(true);
  const [stanze, setStanze] = useState(true);

  if(accedi && stanze){
    return (
        <>
        <div className="App">
          <nav>
            <h1 className= "ScrittaBenvenuto"> Benvenuto/a nel nostro sito!</h1>
            <ul>
              <li><button className= "admin_btn" onClick={()=>setAccedi(false)}>Sei un amministratore?</button></li>
            </ul>
          </nav>

          <div className= "ContainerPrincipale">
            <h1>Qui puoi prenotare una stanza!</h1>
            <button className="btn_stanze" onClick={()=>setStanze(false)}>Stanze</button>
          </div>
        </div>

        <footer>Copyright 2022 by @Alessandro Maria Mezzina</footer>
        </>
      );
  }
  else if(!accedi){
    return(<Login/>)
  }

  else if(!stanze){
    return(<ScegliStanza/>)
  }
  
}

export default App;
