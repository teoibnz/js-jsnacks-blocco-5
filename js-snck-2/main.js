const car = [
    {
        marca: 'Fiat',
        modello: ' Panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'Fiat',
        modello: 'Idea',
        alimentazione: 'gpl'
    },
    {
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Tipo ',
        alimentazione: 'metano'
    },
    {
        marca: 'BMW',
        modello: ' Serie 1 ',
        alimentazione: 'benzina'
    },
    {
        marca: 'BMW',
        modello: ' Serie 2',
        alimentazione: 'benzina'
    },
    {
        marca: 'BMW',
        modello: 'Serie 3 ',
        alimentazione: 'diesel'
    },
    {
        marca: 'BMW',
        modello: 'Serie 4 ',
        alimentazione: 'diesel'
    },
    {
        marca: 'VW',
        modello: 'Polo ',
        alimentazione: 'diesel'
    },
    {
        marca: 'VW',
        modello: 'Golf ',
        alimentazione: 'benzina'
    },
    {
        marca: 'VW',
        modello: ' Tiguan',
        alimentazione: 'benzina'
    },
    {
        marca: 'VW',
        modello: ' Scirocco',
        alimentazione: 'diesel'
    },
]


const fuelCar = car.filter((element) => {
    if ( element.alimentazione === 'benzina') return true;});
const dieselCar = car.filter((element) => {
    if ( element.alimentazione === 'diesel') return true;});
const otherCar = car.filter ((element) => { 
    if ( !element.alimentazione === 'benzina'  || !element.alimentazione === 'diesel') return true});

console.log(fuelCar);
console.log(dieselCar);
console.log(otherCar);
