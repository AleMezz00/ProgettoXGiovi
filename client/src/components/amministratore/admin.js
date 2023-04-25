import { useState, useEffect } from 'react';
import './admin.css'
import AggiungiStanza from './aggiungi_stanza';
import CardAdmin from './card_admin';

function Admin(){
 
  const [stanza, setStanza] = useState({})
  const [aggiungi, setAggiungi] = useState(true)
  const [data,setData] = useState([])
  

  //get del menu

  useEffect(()=>{
    fetch('http://localhost:9000/elencoStanze')
    .then(res=>res.json())
    .then(res=>setData(res))
  },[])


  //rendering

  if(aggiungi){

    return(
      <div className="scroll">
        <div className="schermata_admin">
          <nav>
            <h1 className= "scritta_ElencoStanze">Elenco stanze: </h1>
            <ul>
              <li><a className="scritta_logout" href='/'>Logout</a></li>
            </ul>
          </nav>

          <div className="Aggiungi">
            <button className="btn_aggiungi_stanza_admin" onClick={()=> setAggiungi(false)}>Aggiungi Stanza</button>

          </div>

          <div className="riga">

            {data.map((item)=>{
              return(
                <CardAdmin
                key={item._id}
                item={item}
                />
              )
            })}
              
             
          </div>

        </div>
  

    </div>
    );

     }else{
        return(<AggiungiStanza/>)
        }

    
}

export default Admin;