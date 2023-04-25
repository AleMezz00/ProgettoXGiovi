import './elencoStanze.css'
import { useEffect, useState } from 'react';
import CardCliente from './card_cliente';
import ScegliStanza from './scegliStanza';
import Prenotazioni from './prenotazioni';

function ElencoStanze(props){

  const [data,setData] = useState([])
  const [precedente, setPrecedente]= useState(true)
  const [numero, setNumero]= useState(0)
  const [prenotazioni, setPrenotazioni]= useState(true)

  const [elencoPrenotazioni, setElencoPrenotazioni]= useState([])
  

  //get del menu

  useEffect(()=>{
    fetch('http://localhost:9000/elencoStanze')
    .then(res=>res.json())
    .then(res=>setData(res))
  },[])

  if(precedente && prenotazioni){
    return(
      <div className="scroll">
        <div className="ElencoStanze">
          <nav>
            <h1 className= "scritta_ElencoStanze">Elenco Stanze</h1>
            <ul>
            <li><button className="pagina_precedente" onClick={()=>setPrecedente(false)}>Torna alla pagina precedente</button></li>
            </ul>
          </nav>

          <div className="pren">
            <div className="contenitore_numero">
            <p className='numero'>{numero}</p>
            </div>
            <button className="btn_pren" onClick={()=> setPrenotazioni(false)}>Visualizza Prenotazioni</button>
          </div>

          <div className="riga">

          {data.map((item)=>{
            if(item.numPersone == props.numPersone){
              if(item.primaDataDisponibile <= props.dataArrivo){
                return(
                  <CardCliente
                  key={item._id}
                  item={item}
                  elencoPrenotazioni={elencoPrenotazioni}
                  setElencoPrenotazioni={setElencoPrenotazioni}
                  numero={numero}
                  setNumero={setNumero}
                  dataPartenza ={props.dataPartenza}
                  />
                )
              }
            } 
                 
          })}
          </div>

      
        </div>
        
    </div>
    )
  }else if(!precedente) {
    return(
     <ScegliStanza/> 
    )
  }else if(!prenotazioni) {
    return(
      <Prenotazioni
      elencoPrenotazioni={elencoPrenotazioni}
      setElencoPrenotazioni={setElencoPrenotazioni}
      />
    )
  } 
}

export default ElencoStanze;