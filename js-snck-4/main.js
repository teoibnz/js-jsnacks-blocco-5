

const animal = [
    {
        nome : 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome : 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome : 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
    {
        nome : 'ratto',
        famiglia: 'roditori',
        classe: 'sorci',
    },
]

const listaMammiferi = animal.filter((element) => { if (element.classe == 'mammiferi') return true;})

console.log(listaMammiferi)