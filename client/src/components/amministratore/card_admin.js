import { useState } from 'react';
import './card_admin.css'
import Admin from './admin'
import service from '../../services/service';

function CardAdmin(props){

    const [cardStatus,setCardStatus]= useState(true)

    
    const Elimina =()=>{
        console.log('eliminazione della stanza')
        const requestBody = { 
            nome: props.item.nome
        } 
        console.log(requestBody)

        service.deleteStanza(requestBody).then(alert(`la stanza ${props.item.nome} è stata eliminata`))
        setCardStatus(false);
    }


if(cardStatus){
       return(
        <div className="colonna">
            <div className="card_admin">
                <div className="card-body_admin">
                    <p className="id">{props.item.id}</p>
                    <h1 className="nome_stanza"> {props.item.nome}</h1> 
                    <p className="descrizione">{props.item.descrizione}</p>
                    <p className="num_persone"> per {props.item.numPersone} persone</p>
                    <p className="prezzo">{props.item.prezzo}€ a notte</p>
                    <p className="dataDisponibilità"> Disponibile dal: {props.item.primaDataDisponibile}</p>

                    <div className='BOTTONE'>
                        <button className="btn_elimina_stanza" onClick={Elimina}>Elimina</button>
                    </div>

                </div>
            </div>
        </div>
     ); 
   
    
}else{

   return(
    <></>
   )

}
}
export default CardAdmin;