// ACTIVIDAD 12 - Arreglos y objetos
// Cada ejercicio está dentro de un bloque { } para que sus variables
// no se mezclen con las de los otros ejercicios.

// =====================================================
// 1. ARREGLOS
// =====================================================

// a. Cargar 5 números con prompt() y agregarlos al arreglo con push()
console.log("--- 1.a ---");
{
  const numerosIngresados = [];

  for (let i = 1; i <= 5; i++) {
    const numero = Number(prompt(`1.a - Ingresá el número ${i} de 5`));
    numerosIngresados.push(numero);
  }

  console.log(numerosIngresados);
}

// b. Igual que el anterior, pero guardando solo los números impares
console.log("--- 1.b ---");
{
  const numerosImpares = [];

  for (let i = 1; i <= 5; i++) {
    const numero = Number(prompt(`1.b - Ingresá el número ${i} de 5 (solo se guardan los impares)`));

    if (numero % 2 !== 0) {
      numerosImpares.push(numero);
    }
  }

  console.log(numerosImpares);
}

// c. Convertir a MAYÚSCULAS los nombres de las frutas con forEach()
console.log("--- 1.c ---");
{
  const frutas = ["pera", "manzana", "banana", "durazno"];

  frutas.forEach((fruta, indice) => {
    frutas[indice] = fruta.toUpperCase();
  });

  console.log(frutas);
}

// d. Lo mismo con map(), que crea un nuevo arreglo sin modificar el original
console.log("--- 1.d ---");
{
  const frutas = ["pera", "manzana", "banana", "durazno"];

  const frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase());

  console.log(frutasEnMayusculas);
}

// e. Con filter() e includes(): solo las frutas que contienen "na"
console.log("--- 1.e ---");
{
  const frutas = ["pera", "manzana", "banana", "durazno"];

  const frutasConNa = frutas.filter((fruta) => {
    if (fruta.includes("na")) {
      return true;
    } else {
      return false;
    }
  });

  console.log(frutasConNa);
}

// =====================================================
// 2. OBJETOS
// =====================================================

// a. Objeto con los datos de un producto de indumentaria
console.log("--- 2.a ---");
{
  const producto = {
    nombre: "Remera básica de algodón",
    precio: 12000,
    stock: 25,
    talles: ["s", "m", "l"],
  };

  console.log(producto);
}

// b. Arreglo de 4 productos (se reutiliza en los puntos c y d)
const productos = [
  { nombre: "Remera básica de algodón", precio: 12000, stock: 25, talles: ["s", "m", "l"] },
  { nombre: "Buzo con capucha", precio: 28000, stock: 3, talles: ["s", "m", "l"] },
  { nombre: "Jean recto", precio: 35000, stock: 12, talles: ["s", "m", "l"] },
  { nombre: "Campera rompevientos", precio: 46000, stock: 2, talles: ["s", "m", "l"] },
];

// Recorrer con forEach() y mostrar solo los productos con stock menor a 5
console.log("--- 2.b ---");
productos.forEach((producto) => {
  if (producto.stock < 5) {
    console.log(producto);
  }
});

// c. map(): nuevo arreglo con los mismos productos y 10% de descuento en el precio
console.log("--- 2.c ---");
{
  const productosConDescuento = productos.map((producto) => {
    return {
      nombre: producto.nombre,
      precio: producto.precio * 0.9,
      stock: producto.stock,
      talles: producto.talles,
    };
  });

  console.log(productosConDescuento);
}

// d. filter(): nuevo arreglo solo con los productos con stock mayor a 10
console.log("--- 2.d ---");
{
  const productosConMuchoStock = productos.filter((producto) => producto.stock > 10);

  console.log(productosConMuchoStock);
}
