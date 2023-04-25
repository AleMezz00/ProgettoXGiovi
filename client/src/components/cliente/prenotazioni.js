import { useState } from 'react';
import './prenotazioni.css'
import CardCliente from './card_cliente';
import ElencoStanze from './elencoStanze';
import CardPrenotazione from './card_prenotazione';


function Prenotazioni(props){

  const [precedente, setPrecedente]= useState(true)

    
    if(precedente){
        return(

        <div className="sfondo_prenotazioni"> 

        <div className="scroll_prenotazioni">

        <nav>
            <h1 className= "scritta_prenotazioni">Le tue prenotazioni</h1>
            <ul>
              <li><button className="btn_torna_elenco" onClick={()=>setPrecedente(false)}>Torna alla pagina precedente</button></li>
            </ul>
          </nav>


            <div className="contenitore_prenotazione">

              <div className="riga_pren">
              {props.elencoPrenotazioni.map((item)=>{
                return(
                  <CardPrenotazione
                  key={item._id}
                  item={item}
                  dataPartenza = {props.dataPartenza}
                  />
                )
              })}
              </div>
            </div>

        </div>

    </div>

    );
  }else if(!precedente){
    return(
      <ElencoStanze/>
    )
  }
}

export default Prenotazioni;