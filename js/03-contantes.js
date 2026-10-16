const PI = 3.1416;
console.log(PI); // 3.1416

// Intentar cambiar el valor da error
PI = 3; // ❌ TypeError: Assignment to constant variable
const nombre = "Ana"; // ✅ correcto
const edad; // ❌ error, falta valor inicial
const persona = { nombre: "Juan", edad: 30 };
persona.edad = 31; // ✅ permitido
console.log(persona); // { nombre: "Juan", edad: 31 }

const frutas = ["manzana", "pera"];
frutas.push("uva"); // ✅ permitido
console.log(frutas); // ["manzana", "pera", "uva"]

// Pero no puedes hacer:
frutas = ["naranja"]; // ❌ error, no se puede reasignar
