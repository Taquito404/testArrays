//los inputs no deberían diferenciar mayusc
//el input debe contener únicamente letras
//un anagrama no debe ser la misma palabra
//quitar los espacios
//hacer un arreglo
//comparar el arreglo, en caso de que sean exactamente iguales, son un anagrama
//de lo contrario, falso

$(function () {
  $("#anagram1, #anagram2").keydown(function (e) {
    var key = e.keyCode;
    if (
      !(
        key == 8 ||
        key == 32 ||
        key == 46 ||
        key == 192 ||
        (key >= 35 && key <= 40) ||
        (key >= 65 && key <= 90)
      )
    ) {
      e.preventDefault();
    }
  });
});

function anagram() {
  var word1 = document.getElementById("anagram1").value;
  var word2 = document.getElementById("anagram2").value;
  if (!word1 || !word2) {
    document.getElementById("answer").innerHTML =
      "Please, complete all the inputs.";
    document.getElementById("answer").classList.add("text-danger", "mt-3");
    return;
  }
  if (word1.toLowerCase() === word2.toLowerCase()) {
    document.getElementById("answer").innerHTML =
      "The strings '" +
      word1.bold() +
      "' and '" +
      word2.bold() +
      "' are the <b >same word.</b>";
    document.getElementById("answer").classList.add("mt-3");
    document.getElementById("answer").classList.remove("text-danger");
    return;
  } else if (
    word1.toLowerCase().replace(/\s+/g, "").split("").sort().join("") ===
    word2.toLowerCase().replace(/\s+/g, "").split("").sort().join("")
  ) {
    document.getElementById("answer").innerHTML =
      "The strings '" +
      word1.bold() +
      "' and '" +
      word2.bold() +
      "' are <b>anagrams.</b>";
    document.getElementById("answer").classList.add("mt-3");
    document.getElementById("answer").classList.remove("text-danger");
    return;
  } else {
    document.getElementById("answer").innerHTML =
      "The strings '" +
      word1.bold() +
      "' and '" +
      word2.bold() +
      "' <b>aren't anagrams.</b>";
    document.getElementById("answer").classList.add("mt-3");
    document.getElementById("answer").classList.remove("text-danger");
    return;
  }
}

function reset() {
  document.getElementById("answer").innerHTML = "";
  document.getElementById("form").reset();
}
