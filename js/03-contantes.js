const NOMBRE = "Hola Mundo";
const nombre = "Chanchito Feliz";
console.log(nombre);
const persona = { nombre: "Ana", edad: 25 };
persona.edad = 26; // ✅ permitido, se modifica propiedad interna
// persona = { nombre: "Luis" }; // ❌ Error: no se puede reasignar el objeto completo
