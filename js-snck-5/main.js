const listOfPeople = [
    {
        nome: 'Marco',
        cognome: 'Potter',
        età: '15'
    },
    {
        nome: 'Lara',
        cognome: 'Loro',
        età: '21'
    },
    {
        nome: 'Francesco',
        cognome: 'Totti',
        età: '42'
    },
    {
        nome: 'Babbana',
        cognome: 'Babbanis',
        età: '17'
    },
]

let canDrive = []
    
listOfPeople.filter((element) => {
    if (element.età > 18){
        canDrive.push({
            output : element.nome + ' ' +  element.cognome + ' può guidare!'
        })
    }
})

console.table(listOfPeople);
console.table(canDrive);
