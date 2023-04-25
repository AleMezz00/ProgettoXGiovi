import React, { useState } from 'react';
import service from '../../services/service';
import ElencoStanze from './elencoStanze';
import './scegliStanza.css'

function ScegliStanza(){

    const d = new Date()
    const giorno = d.getDay();
    const mese = d.getMonth();
    const anno= d.getFullYear();

    const [ricerca, setRicerca]= useState(true)


    const [dataPartenza, setDataPartenza] = useState(giorno+"/"+mese+"/"+anno)
    const [dataArrivo, setDataArrivo] = useState(giorno+"/"+mese+"/"+anno)
    const [numPersone, setnumPersone] = useState("")
    

    if(ricerca){
        return (
                <>
                    <div className='Ricerca'>
                    <nav>
                        <h1 className= "scritta_ricerca_stanza">Ricerca una stanza!</h1>
                        <ul>
                        <li><a href='/'>Torna alla pagina precedente</a></li>
                        </ul>
                    </nav>

                        <div className= "Sfondo">

                            <div className= "Container_principale">
                                <div className="form" >
                                    <form >

                                        
                                    <div className='form-group-dataArrivo'>
                                            <label htmlFor='dataArrivo'> Data Arrivo : </label>
                                            <input type='text' required value={dataArrivo} onChange={(e)=>setDataArrivo(e.target.value)}
                                            name="dataArrivo"  placeholder='Data Arrivo'/>
                                        </div>

                                        
                                        <div className='form-group-dataPartenza'>
                                            <label htmlFor='dataPartenza'> Data Partenza : </label>
                                            <input type='text' required value={dataPartenza} onChange={(e)=>setDataPartenza(e.target.value)}
                                            name="dataPartenza"  placeholder='Data Partenza'/>
                                        </div>

                                        <div className='form-group-numPersone'>
                                            <label htmlFor='num_persone'> Numero Persone : </label>
                                            <input type='text' required value={numPersone} onChange={(e)=>setnumPersone(e.target.value)}
                                            name="numPersone"  placeholder='Numero Persone'/>
                                        </div>


                                        <button type='submit' className='btn_research' onClick={()=>setRicerca(false)}>Ricerca stanza</button> 
                                
                                    </form>

                                </div>

                            </div>
                    
                        </div>

                </div>

                    <footer> Copyright 2022 by @Alessandro Mezzina </footer>
                </>
        )
    }else if (!ricerca){
        return(
            <ElencoStanze
            dataArrivo={dataArrivo}
            dataPartenza={dataPartenza}
            numPersone={numPersone}/>
        )
        }
   
}

export default ScegliStanza;