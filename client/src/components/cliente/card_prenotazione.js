import './card_prenotazione.css'

function CardPrenotazione(props){

    return(
        <div className="colonna">
            <div className="card_prenotazione">
                <div className="card-body_prenotazione">
                    <h1 className="nome_stanza">{props.item.nome}</h1>
                    <p className="descrizione">Caratteristiche: {props.item.descrizione}</p>
                    <p className="num_persone">per {props.item.numPersone} persone</p>
                    <p className="prezzo">{props.item.prezzo} € a Notte </p>
                </div>
            </div>
        </div>
    );
}

export default CardPrenotazione;