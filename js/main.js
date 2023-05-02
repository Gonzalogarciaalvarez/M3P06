let input = prompt("Ingrese una letra");
let result = "";

while (input !== null) {
  if (!/^[a-zA-Z]+$/.test(input)) {
    alert("Solo se pueden introducir letras");
  } else {
    result += input;
  }
  input = prompt("Ingrese una letra");
}

if (result) {
  alert("Las letras introducidas son: " + result);
}