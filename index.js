var slowa = ["node.js", "DiscordBot", "JavaScript", "web"];
var licznik = 0;
var element = document.getElementById("XD_1");
var czas = setInterval(zmiana, 1000);

function zmiana() {
  element.innerHTML = slowa[licznik];
  licznik++;
  if (licznik >= slowa.length) {
    licznik = 0;
  }
}