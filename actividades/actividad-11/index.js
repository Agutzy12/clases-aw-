// ACTIVIDAD 11 - Funciones
// Cada ejercicio está dentro de un bloque { } para que sus variables
// y funciones no se mezclen con las de los otros ejercicios.

// =====================================================
// 1. FUNCIONES DE DECLARACIÓN
// =====================================================

// a. Sin retorno de valor: función "saludar"
console.log("--- 1.a ---");
{
  function saludar() {
    console.log("¡Hola, bienvenido!");
  }

  saludar();
}

// b. Sin retorno de valor: función "saludarPersona" con template strings
console.log("--- 1.b ---");
{
  function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
  }

  saludarPersona("Andrés");
}

// c. Retorno de valor: función "esMayorDeEdad"
console.log("--- 1.c ---");
{
  function esMayorDeEdad(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }

  const resultadoEdad = esMayorDeEdad(21);
  console.log(resultadoEdad);
}

// =====================================================
// 2. FUNCIONES DE FLECHA
// =====================================================

// a. El mismo programa del punto 1.c, convertido a función flecha
console.log("--- 2.a ---");
{
  const esMayorDeEdad = (edad) => {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  };

  const resultadoEdad = esMayorDeEdad(15);
  console.log(resultadoEdad);
}

// b. Función flecha que compara dos números, usada dentro de un bucle
console.log("--- 2.b ---");
{
  const compararNumeros = (numero, numeroAComparar) => {
    if (numero < numeroAComparar) {
      console.log(`El número ${numero} es menor que ${numeroAComparar}`);
    } else if (numero === numeroAComparar) {
      console.log(`El número ${numero} es igual que ${numeroAComparar}`);
    } else {
      console.log(`El número ${numero} es mayor que ${numeroAComparar}`);
    }
  };

  const numeroElegido = 5;

  for (let i = 0; i <= 10; i++) {
    compararNumeros(i, numeroElegido);
  }
}

// =====================================================
// 3. FUNCIONES CALLBACK
// =====================================================

// Funciones que se pasan como callback a "operacion"
function suma(numero1, numero2) {
  const resultado = numero1 + numero2;
  console.log(`El resultado de la suma es ${resultado}`);
}

function resta(numero1, numero2) {
  const resultado = numero1 - numero2;
  console.log(`El resultado de la resta es ${resultado}`);
}

// a. Función flecha "operacion" que recibe dos números y un callback
console.log("--- 3.a ---");
{
  const operacion = (numero1, numero2, callback) => {
    callback(numero1, numero2);
  };

  operacion(10, 4, suma);
  operacion(10, 4, resta);
}

// b. Mejora: "operacion" verifica que los argumentos sean números
console.log("--- 3.b ---");
{
  const operacion = (numero1, numero2, callback) => {
    if (typeof numero1 !== "number" || typeof numero2 !== "number" || isNaN(numero1) || isNaN(numero2)) {
      console.log("Debe ingresar solo números.");
      return;
    }

    callback(numero1, numero2);
  };

  operacion(12, 3, suma);
  operacion(12, 3, resta);
  operacion("12", 3, suma); // No es un número: muestra el aviso
}
