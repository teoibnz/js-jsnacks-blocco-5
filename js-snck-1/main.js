    
const player = {
    codiceGiocatore : '',
    nome: 'Matteo',
    cognome: 'Lopez',
    età: '32',
    mediaPunti: ''
}


    
    
    /**
     * Function that gen random string letter (only capitalize letters)
     * 
     * @param {*} length Lenght of the string that you want to generate
     * @returns Return the string
     */
    function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }

    return result;
    }

    /**
     * Function that gen random string numbers
     * 
     * @param {*} length Lenght of the string that you want to generate
     * @returns Return the string
     */
    function makeNum(length) {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }

    return result;
    }


    // funzione che genera il codice giocatore con 3 lettere random maiuscole e 3 numeri
    function generatePlayerCode(){
        return (makeid(3) + makeNum(3))
    };
    //  calcolo il codice giocatore

    player.codiceGiocatore =  generatePlayerCode();

    // funzione per generare un numero randomico da 1 a 99
    function randomInt (){
        return Math.floor(Math.random() * 99);
    }

    player.mediaPunti = randomInt();

    console.table(player);
