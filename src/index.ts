let btnCalcular = document.getElementById("btnCalcular");


btnCalcular.addEventListener("click", () => {


  let número11: number = Number(numero1.value);
  let número22: number = Number(numero2.value);
  let número33: number = Number(numero3.value);

  if (número11 > número22 && número11 > número33) {
    console.log("El número " , número11 , " es el mayor.");
  } else if (número22 > número11 && número22 > número33) {
    console.log("El número " , número22 , " es el mayor.");
  } else if (número33 > número11 && número33 > número22)
    console.log("El número " , número33 , " es el mayor.");
  }
});
