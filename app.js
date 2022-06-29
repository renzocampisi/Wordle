/* const matriz = [
    [1, 4, 6, 7, 9],
    [1, 7, 3, 6, 7],
    [5, 3, 7, 4, 4],
    [2, 9, 6, 3, 4],
    [1, 5, 6, 8, 5],
    [4, 3, 6, 8, 2]
]
for (let index = 0; index < matriz.length; index++) {
    console.log(matriz[index]);
}
 */
const colores = [
    [0, 1, 2, 3, 1],
    [1, 2, 1, 0, 2],
    [3, 1, 0, 2, 1],
    [1, 0, 1, 2, 3],
    [1, 3, 1, 0, 3],
    [2, 0, 1, 3, 1]
]
/* for (let index = 0; index < colores.length; index++) {
    console.log(colores[index]);
    
} */

/* var array = [1, 2, 3]
colores[0][0] */
function pintarTablero() {
    for (let x = 0; x < colores.length; x++) {
        for (let y = 0; y < 5; y++) {
            //console.log(colores[x][y])
            var input = document.getElementById(`r${x}c${y}`)
            /* console.log(input) */
            switch (colores[x][y]) {
                case 0:
                    input.style.backgroundColor = "none"
                    break;
                case 1:
                    input.style.backgroundColor = "green"
                    break;
                case 2:
                    input.style.backgroundColor = "yellow"
                    break;
                case 3:
                    input.style.backgroundColor = "red"
                    break;
                default:
                    break;
            }
        }
        
    }
}

pintarTablero()
