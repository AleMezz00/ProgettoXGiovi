const     HEADERS ={"Content-Type": "application/json"};


export default{

    getStanza:(requestBody) => {
        return fetch('http://localhost:9000/elencoStanze/inserisciStanza',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    deleteStanza: (requestBody) => {
        return fetch('http://localhost:9000/elencoStanze/eliminaStanza',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    getLogin:(requestBody) => {
        return fetch('http://localhost:9000/amministratore/login',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
            .then(resp=> resp=resp.message)
    }, 

    aggiornaStanza: (requestBody) => {
        return fetch('http://localhost:9000/elencoStanze/aggiornaStanza',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },



}