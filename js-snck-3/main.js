

const strings = ['ciao', 'MAMMA', 'guarda', 'come', 'mI', 'diverto'];

const fixedArray = strings.map((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
});

console.log(fixedArray)