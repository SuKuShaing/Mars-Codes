/*
Instrucciones
Crea una función que pueda descifrar mensajes encriptados siguiendo este patrón:

Reglas de decodificación
Convierte números a letras según:
0 -> o
1 -> i
3 -> e
4 -> a
5 -> s
7 -> t
Si encuentras el símbolo >, intercambia la letra que está a su izquierda con la de la derecha.
Si encuentras el símbolo *, elimina la letra que está a su derecha.
Elimina los símbolos > y * después de haberlos evaluado.
Elimina cualquier símbolo que no sea letra, número, ¿?!¡, o espacio.
¡Las letras con acento hay que mantenerlas!
El mensaje original debe contener información vital de la misión.

decodeMessage("a*bc>d")
// "adc"
decodeMessage("†¡H$0*l4>l!║¤")
// "¡Hola!"
*/

function decodeMessage(message) {
	const numToLetter = {
        0: 'o',
        1: 'i',
        3: 'e',
        4: 'a',
        5: 's',
        7: 't',
    };

    // Reemplaza los números por letras usando regex
    const lettersAndSymbols = message.replace(/[013457]/g, (match) => numToLetter[match]);

    // intercambia la letra que está a su izquierda con la de la derecha
    const lettersAndSymbols2 = lettersAndSymbols.replace(/(.)>(.)/g, '$2$1');

    // elimina la letra que está a su izquierda del *
    const lettersAndSymbols3 = lettersAndSymbols2.replace(/\*(.)/g, '');

    // elimina los símbolos > y *
    const lettersAndSymbols4 = lettersAndSymbols3.replace(/[>*]/g, '');

    // elimina cualquier símbolo que no sea letra, número, ¿?!¡, o espacio
    const lettersAndSymbols5 = lettersAndSymbols4.replace(/[^a-zA-Z0-9¿?!¡ ]/g, '');

    return lettersAndSymbols5;
}


console.log(decodeMessage("a*bc>d"));
console.log(decodeMessage("†¡H$0*l4>l!║¤"));