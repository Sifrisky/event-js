# JAVASCRIPT: Event Delegation

aprenderemos sobre Event Delegation, una técnica muy utilizada en nuestras aplicaciones web realizadas con Javascript.

# LocalStorage


LocalStorage: Guarda cadenas de texto, clave => valor
SET => Seteando
GET => Guardando

const nombre = 'Ignacio';
localStorage.setItem('nombreUsuario', nombre);

const nombreLocalStorage = localStorage.getItem('nombreUsuario');
console.log(nombreLocalStorage);

localStorage.removeItem('nombreUsuario');

en este caso en el swutch-case, agregamos el setItem para guardar el fondo, y veremos en a imagen en application como me pasa la clave, valor.

para leer la info del usuario registrada podemos hacer otro evento.