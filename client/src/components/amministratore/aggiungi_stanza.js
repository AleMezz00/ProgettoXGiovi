import React, { useState } from 'react';
import service from '../../services/service';
import Admin from './admin';
import './aggiungi_stanza.css'

function AggiungiStanza(){

    
    const [principale, setPrincipale] = useState(true)
    const [precedente, setPrecedente]= useState(true)

    
    const d = new Date()
    const giorno = d.getDay();
    const mese = d.getMonth();
    const anno= d.getFullYear();

    const [id, setId]= useState('')
    const [nome, setNome]= useState('')
    const [descrizione, setDescrizione]= useState('')
    const [numPersone, setnumPersone]= useState('')
    const [prezzo, setPrezzo]= useState('')
    const [primaDataDisponibile, setPrimaDataDisponibile] = useState(giorno+"/"+mese+"/"+anno)

    
    const handleSubmit = (e)=>{
        try{
            e.preventDefault()
            const requestBody = { 
                id:id,
                nome: nome,
                descrizione: descrizione,
                numPersone:numPersone,
                prezzo:prezzo,
                primaDataDisponibile: primaDataDisponibile
            } 

            console.log(requestBody)

            service.getStanza(requestBody).then(console.log('elemento inserito correttamente'))
            setPrincipale(false)
        
        }catch(err){
            console.log('ERRORE NEL SERVER')
        }
     
    }


    
    if( principale && precedente){
        return (
                <>
                    <div className='Add'>
                    <nav>
                        <h1 className= "scritta_add_stanza">Aggiungi una nuova stanza!</h1>
                        <ul>
                        <li><button className="pagina_precedente" onClick={()=>setPrecedente(false)}>Torna alla pagina precedente</button></li>
                        </ul>
                    </nav>

                        <div className= "Sfondo">

                            <div className= "Container_principale_add">
                                <div className="form" >
                                    <form onSubmit={e => {handleSubmit(e)}} >

                                         <div className='form-group-id'>
                                            <label htmlFor='IdStanza'> Id : </label>
                                            <input type='text' required value={id} onChange={(e)=>setId(e.target.value)}
                                            name="IdStanza"  placeholder='Id della stanza'/>
                                        </div>

                                        <div className='form-group-nome'>
                                            <label htmlFor='NomeStanza'> Nome Stanza : </label>
                                            <input type='text' required value={nome} onChange={(e)=>setNome(e.target.value)}
                                            name="nomeStanza"  placeholder='Nome del Stanza'/>
                                        </div>

                                        <div className='form-group-descrizione'>
                                            <label htmlFor='descrizione'> Descrizione : </label>
                                            <input type='text' required value={descrizione} onChange={(e)=>setDescrizione(e.target.value)}
                                            name="descrizione"  placeholder='Descrizione'/>
                                        </div>

                                        <div className='form-group-numPersone_adm'>
                                            <label htmlFor='descrizione'> Numero Persone : </label>
                                            <input type='text' required value={numPersone} onChange={(e)=>setnumPersone(e.target.value)}
                                            name="numPersone"  placeholder='Numero Persone'/>
                                        </div>

                                        <div className='form-group-prezzo'>
                                            <label htmlFor='prezzo'> Prezzo : </label>
                                            <input type='text' required value={prezzo} onChange={(e)=>setPrezzo(e.target.value)}
                                            name="prezzo"  placeholder='Prezzo'/>
                                        </div>

                                        <div className='form-group-data'>
                                            <label htmlFor='data'> Data Disponibilità : </label>
                                            <input type='text' required value={primaDataDisponibile} onChange={(e)=>setPrimaDataDisponibile(e.target.value)}
                                            name="primaDataDisponibile"  placeholder='PrimaDataDisponibile'/>
                                        </div>


                                        <button type='submit' className='btn_add_new'>Aggiungi stanza</button> 
                                
                                    </form>

                                </div>

                            </div>
                    
                        </div>

                </div>

                    <footer> Copyright 2022 by @Alessandro Mezzina </footer>
                </>
        )
    }else if(!principale || !precedente){
        return(
           <Admin/> 
        )
    }
}

export default AggiungiStanza;