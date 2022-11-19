const arr = [1, 2, 3, 4, 5, 6]
const equipo = [
    {
        id: 1,
        nombre: 'Conrado'
    },
    {
        id: 2,
        nombre: 'Andres'
    },
    {
        id: 3,
        nombre: 'Anyel'
    },
    {
        id: 4,
        nombre: 'Adrian'
    },
]

// const result = arr.find( (el) => el === 12 )
const result = equipo.find( (el) => el.nombre === 'Adrian' )
// console.log(result)

// function encontrar(arr, fn) {
    // for (let i = 0; i < arr.length; i++) {
    //     if ( fn(arr[i]) === true ) {
    //         return arr[i]
    //     }
    // }
// }

// console.log( encontrar(equipo, (el) => el.nombre === 'asdfsa') )

// Array.prototype.encontrar = function(fn) {
//     for (let i = 0; i < this.length; i++) {
//         if ( fn(this[i]) === true ) {
//             return this[i]
//         }
//     }
// }

// console.log( equipo.encontrar(el => el.nombre === 'Adrian') )
