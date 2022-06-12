var pola = document.getElementsByClassName('inline');
var kolejka = true;
var kto = document.getElementById("kto");

var pojemnosc = [];

kto.innerHTML = "Kolejka - Kółko [O]"

pola[0].addEventListener('click', polozenie);
pola[1].addEventListener('click', polozenie);
pola[2].addEventListener('click', polozenie);
pola[3].addEventListener('click', polozenie);
pola[4].addEventListener('click', polozenie);
pola[5].addEventListener('click', polozenie);
pola[6].addEventListener('click', polozenie);
pola[7].addEventListener('click', polozenie);
pola[8].addEventListener('click', polozenie);

function polozenie() {
  if(kolejka==true) {
    event.target.innerHTML = "O";
    kolejka = false;
    kto.innerHTML = "Kolejka - Krzyżyk [X]";
    event.target.removeEventListener('click', polozenie);
  } else {
    event.target.innerHTML = "X";
    kolejka = true;
    kto.innerHTML = "Kolejka - Kółko [O]";
    event.target.removeEventListener('click', polozenie);
  }

  var p1 = pola[0].innerHTML;
  var p2 = pola[1].innerHTML;
  var p3 = pola[2].innerHTML;
  var p4 = pola[3].innerHTML;
  var p5 = pola[4].innerHTML;
  var p6 = pola[5].innerHTML;
  var p7 = pola[6].innerHTML;
  var p8 = pola[7].innerHTML;
  var p9 = pola[8].innerHTML;

  if(p1=="O"&&p2=="O"&&p3=="O"||p4=="O"&&p5=="O"&&p6=="O"||p7=="O"&&p8=="O"&&p9=="O"
    ||p1=="O"&&p4=="O"&&p7=="O"||p2=="O"&&p5=="O"&&p8=="O"||p3=="O"&&p6=="O"&&p9=="O"
    ||p1=="O"&&p5=="O"&&p9=="O"||p3=="O"&&p5=="O"&&p7=="O") {

      pola[0].removeEventListener('click', polozenie);
      pola[1].removeEventListener('click', polozenie);
      pola[2].removeEventListener('click', polozenie);
      pola[3].removeEventListener('click', polozenie);
      pola[4].removeEventListener('click', polozenie);
      pola[5].removeEventListener('click', polozenie);
      pola[6].removeEventListener('click', polozenie);
      pola[7].removeEventListener('click', polozenie);
      pola[8].removeEventListener('click', polozenie);

      kto.innerHTML = "Koło wygrywa!";
      kto.classList.add("wygrana");
  } else if(p1=="X"&&p2=="X"&&p3=="X"||p4=="X"&&p5=="X"&&p6=="X"||p7=="X"&&p8=="X"&&p9=="X"
    ||p1=="X"&&p4=="X"&&p7=="X"||p2=="X"&&p5=="X"&&p8=="X"||p3=="X"&&p6=="X"&&p9=="X"
    ||p1=="X"&&p5=="X"&&p9=="X"||p3=="X"&&p5=="X"&&p7=="X") {

      pola[0].removeEventListener('click', polozenie);
      pola[1].removeEventListener('click', polozenie);
      pola[2].removeEventListener('click', polozenie);
      pola[3].removeEventListener('click', polozenie);
      pola[4].removeEventListener('click', polozenie);
      pola[5].removeEventListener('click', polozenie);
      pola[6].removeEventListener('click', polozenie);
      pola[7].removeEventListener('click', polozenie);
      pola[8].removeEventListener('click', polozenie);

      kto.innerHTML = "Krzyżyk wygrywa!";
      kto.classList.add("wygrana");
    }
}
