// ACTIVIDAD 10 - Estructuras de control

// =====================================================
// 1. ESTRUCTURAS DE CONTROL CONDICIONALES (if, else if, else)
// =====================================================

// a. Mayor o menor de edad
console.log("--- 1.a ---");
const edad = 20;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// b. Número par o impar
console.log("--- 1.b ---");
const numero = 7;

if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

// c. Nota: Reprobado (menor a 4), Aprobado (entre 4 y 7), Excelente (mayor a 7)
console.log("--- 1.c ---");
const nota = 8;

if (nota < 4) {
  console.log("Reprobado");
} else if (nota <= 7) {
  console.log("Aprobado");
} else {
  console.log("Excelente");
}

// =====================================================
// 2. ESTRUCTURAS DE CONTROL BUCLES (for)
// =====================================================

// a. Números del 1 al 10
console.log("--- 2.a ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// b. Números del 10 al 1 en orden descendente
console.log("--- 2.b ---");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// c. 20 iteraciones comenzando en i = 0, indicando si es par o impar (operación de módulo)
console.log("--- 2.c ---");
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}

// d. Mismo programa, concatenando el número con template literals
console.log("--- 2.d ---");
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}
