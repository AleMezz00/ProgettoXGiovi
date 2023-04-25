import service from '../../services/service';
import './card_cliente.css'

function CardCliente(props){

    const Prenota= ()=>{
      
        const prodottoModificato = { 
            id:props.item.id,
            primaDataDisponibile: props.dataPartenza
        }
        service.aggiornaStanza(prodottoModificato)
        alert("prenotazione avvenuta con successo")  
                props.setElencoPrenotazioni([...props.elencoPrenotazioni,props.item]);
                props.setNumero(props.numero +1)
    }

    return(
        <div className="colonna">
            <div className="card_cliente">
                <div className="card-body_cliente">
                    <h1 className="nome_stanza">{props.item.nome}</h1>
                    <p className="descrizione">Caratteristiche: {props.item.descrizione}</p>
                    <p className="num_persone">per {props.item.numPersone} persone</p>
                    <p className="prezzo">{props.item.prezzo} € a Notte </p>
                    <button className="btn_prenota_stanza_cliente" onClick={Prenota}>Prenota stanza</button>
                </div>
            </div>
        </div>
    );
}

export default CardCliente;