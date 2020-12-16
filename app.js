// Variabes globales
const BtnBotones = document.querySelector("#BtnBotones"); //boton general al presionar aparece el resto
const botones = document.querySelector("#botones"); //por cada boton
const fondo = document.querySelector("#fondo"); //fondo por cada boton

//Eventos con IIFE
(() => {
  BtnBotones.addEventListener("click", agregarBotones);
  botones.addEventListener("click", delegacion);
})();

//cambiar y setear fondo
(()=> {
const color = localStorage.getItem('colorFondo');
if(color === null){ //si no ha seleccionado nada
  fondo.className = 'bg-dark';
}else{
  fondo.className = color;
}
})();

function delegacion(e) {
  e.preventDefault();
 // console.log('Diste click en el container');
//console.log(e.target.classList[1]);
  const colorBoton = e.target.classList[1];

  switch (colorBoton) {
    case "btn-primary":
      fondo.className = "bg-primary";
          //guardar el bg-primary
          localStorage.setItem('colorFondo', "bg-primary");
      break;
    case "btn-danger":
      fondo.className = "bg-danger";
      localStorage.setItem('colorFondo', "bg-danger");
      break;
    case "btn-warning":
      fondo.className = "bg-warning";
      localStorage.setItem('colorFondo', "bg-warning");
      break;
    case "btn-secondary":
      fondo.className = "bg-secondary";
      localStorage.setItem('colorFondo', "bg-secondary");
      break;
    case "btn-success":
      fondo.className = "bg-success";
      localStorage.setItem('colorFondo', "bg-success");
      break;
  }
}

function agregarBotones(e) {
  e.preventDefault();
  botones.innerHTML = `<button class="btn btn-primary">primary</button>
  <button class="btn btn-secondary">secondary</button>
  <button class="btn btn-danger">danger</button>
  <button class="btn btn-success">success</button>
  <button class="btn btn-warning">warning</button>`;
}
