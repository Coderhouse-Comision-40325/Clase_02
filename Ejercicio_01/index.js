/* 
Dados los siguientes arrays:
    '6**2'
    '**'
    '3**3'
    '4**'
    '4**5'
    '8**2**'
    '4*=5'

Realizar una función que reciba un array y devuelva el resultado en caso de poder realizar, de no ser posible que devuelva null.

Se debera detectar si el array incluye un ** y tiene un numero a cada lado. En ese caso, realizar la operación de potenciación del número localizado a la izquierda del ** elevado al exponente que indica el número de la derecha. Utilizar funciones de ES6 o ES7, como includes y **

*/

function calculoPotencia(array) {
    if(array.includes('**')) {
        let numeros = array.split('**')
        if(numeros.length == 2 && numeros[0] && numeros[1]){
            return numeros[0]**numeros[1]
        }
        else return null
    }
    else return null
}

// Vamos a probar la función
console.log('6**2', calculoPotencia('6**2'));
console.log('**', calculoPotencia('**'));
console.log('A**A', calculoPotencia('A**A'));
console.log('3**3', calculoPotencia('3**3'));
console.log('4**', calculoPotencia('4**'));
console.log('4**5', calculoPotencia('4**5'));
console.log('8**2**', calculoPotencia('8**2**'));
console.log('4*=5', console.log('4*=5'));