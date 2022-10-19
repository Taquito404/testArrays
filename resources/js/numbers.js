//obtener los números separados por espacios
//covertir el array de string en num
//arreglarlos en orden ascendente
//tener el número en cada iteración para realizar la resta
//comparar el número obtenido en las restas para guardar el mayor
//imprimirlos

var regex = /^[0-9\s]*$/;
$(function () {
  $("#numbersInput, #anagram2").keydown(function (e) {
    var key = e.keyCode;
    if (
      !(
        key == 8 ||
        key == 9 ||
        key == 13 ||
        key == 32 ||
        key == 46 ||
        key == 110 ||
        key == 190 ||
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105)
      )
    ) {
      e.preventDefault();
    }
  });
});

function numbers() {
  var numberI = document.getElementById("numbersInput").value;
  var arrNum = [];
  var dif = 0;
  var i = 0;
  arrNum = numberI.split(" ").map(function (item) {
    return +item;
  });
  console.log(numberI);
  arrNum.sort(function (a, b) {
    return a - b;
  });
  console.log(arrNum);
  arrNum.forEach((e) => {
    console.log(e, "p");
    dif = e - i;

    if (dif > i) {
      i = dif;
      console.log("dif alta", dif);
    }
    i = e;
    return dif;
  });
  console.log(dif);
  console.log(arrNum);
  document.getElementById("answer").innerHTML =
    "The rearranged numbers are <b>[" +
    arrNum +
    "]</b> and the biggest difference is <b>'" +
    dif +
    "'</b>.";
  document.getElementById("answer").classList.add("mt-3");
}

function reset() {
  document.getElementById("answer").innerHTML = "";
  document.getElementById("form").reset();
}
