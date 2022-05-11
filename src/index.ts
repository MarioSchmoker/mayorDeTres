let btnCalcular = document.getElementById("btnCalcular");
let número11 = document.getElementById("número1");
let número22 = document.getElementById("número2");
let número33 = document.getElementById("número3");

//rotulo1.innerHTLM = "Ingresar 1° Número";

btnCalcular.addEventListener("click", () => {

  let número11: number = número1.value;
  let número22: number = número2.value;
  let número33: number = número3.value;

  if (número11 > número22 && número11 > número33) {
    console.log("El número " + número11 + " es el mayor.");
  } else if (número22 > número11 && número22 > número33) {
    console.log("El número " + número22 + " es el mayor.");
  } else if (número33 > número11 && número33 > número22)
    console.log("El número  " + número33 + " es el mayor.");
  }
});
