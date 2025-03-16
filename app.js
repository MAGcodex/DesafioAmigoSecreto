/*El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreSecreto = 0;
let intentos = 0;
let listaNombres = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function sortearNombreSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNombres);
    //Si ya sorteamos todos los números
    if (listaNonbres.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNombres.includes(numeroGenerado)) {
            return sortearNombreSecreto();
        } else {
            listaNombres.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Desafío del amigo secreto!');
    asignarTextoElemento('p',`Indica el nombre de un amigo del 1 al ${numeroMaximo}`);
    numeroSecreto = sortearNombreSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
*/
const nombres = [];

        function agregarAmigo() {
            const input = document.getElementById("amigo");
            const nombre = input.value.trim();

            if (nombre === "") {
                alert("No se puede agregar un nombre vacío.");
            } else {
                nombres.push(nombre);
                const lista = document.getElementById("listaAmigos");
                const li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
                input.value = ""; // Limpiar el campo de entrada
            }
        }

        function sortearAmigo() {
            if (nombres.length === 0) {
                alert("La lista está vacía. Por favor, agrega nombres.");
            } else {
                const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
                document.getElementById("resultado").textContent = `Nombre seleccionado: ${nombreAleatorio}`;
            }
        }
