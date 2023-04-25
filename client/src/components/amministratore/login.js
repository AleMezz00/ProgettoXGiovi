    import { useState } from 'react';
    import './login.css'
    import Admin from './admin';
import service from '../../services/service';
    
    function Login(){
        
    
        const [accedi, setAccedi] = useState(true)
        const [username, setUsername]= useState('')
        const [password, setPassword]= useState('')
    
        const [error, setError] = useState('')

        /*non è stata implementata la funzionalità di registrazione poichè 
            un amministratore deve possedere già delle credenziali per entrare nel suo spazio dedicato.
            
            per accedere utilizzare come username "antonio" come password "antonio" 
            
            Nonostante questo è stata implementato, nella componente views del server, il form per la registrazione, per un eventuale 
            controllo dell'autenticazione
            */

        const handleSubmit = (e)=>{
            try{
                e.preventDefault()
                const requestBody = { 
                    username: username,
                    password: password
                } 
                console.log(requestBody)
        
                service.getLogin(requestBody)
                    .then((resp)=>{
                        if(resp){
                            setError(resp)
                        }else{
                            setError('login avvenuto correttamente')
                            setAccedi(false) 
                        }
                    })
            
            
            }catch(err){
                console.error('errore nel server')
            }
        
        }
    
        if(accedi){
    
        return(
            <>
            <div className='Login'>
                <nav>
                    <h1 className= "scritta_EffettuaAccesso">Effettua l'accesso come amministratore!</h1>
                     <ul>
                    <li><a href='/'>Torna alla pagina principale</a></li>
                     </ul>
                </nav>
    
                    <div className= "Sfondo">
    
                        <div className= "Container_principale">
                            <div className="form">
                                <p> Per accedere inserire "antonio" come username e "antonio" come password</p>
                                <form onSubmit={e=>{handleSubmit(e)}}>
    
                                    <div className='form_Username'>
                                        <label htmlFor='username'> Username: </label>
                                        <input type='text' required value={username} onChange={(e)=>setUsername(e.target.value)}
                                        name="username"  placeholder='username'/>
                                    </div>
    
                                    <div className='form_Password'>
                                        <label htmlFor='password'> Password: </label>
                                        <input type='password' required value={password} onChange={(e)=>setPassword(e.target.value)}
                                        name='password' placeholder='password' />
                                    </div>
    
                                    <button type='submit' className='btn_access'>Accedi</button> 
                            
                                </form>
    
                            </div>
    
                            <h3 className='error-message'>{error}</h3>
    
    
                        </div>
                
                    </div>
    
            </div>
    
                <footer> Copyright 2022 by @Alessandro Maria Mezzina </footer>
            </>
        );
    
        }
        else{
            return(
                <Admin/>
            )
        }
    }

export default Login;