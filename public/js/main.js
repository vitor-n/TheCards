var cont = 0;
var text = String("olá cris, como vai? Bem, só queria te lembrar que ... gosto muito, muito, muito, muito, muitooo, de ... ... morango! hihi, e que gosto muitooo mais de você!!! mais do que dois milhões de morangos juntos! e olha que adoro morangos. mas sabe, também quero dizer que estou com saudades, quero te ver logo, aaaaa. amo você meu moranguinho <3");
var textAr = text.split(" ");

var card2 = document.getElementById("card2");

document.querySelectorAll(".card__inner").forEach(card => {
  card.addEventListener("click", function () {
    card.classList.toggle('flip');
    displayText();
    cont++;
  });
});

function displayText(){
  if (cont > textAr.length - 1) {
    cont = 1;
  }
  if (cont % 2 != 0) {
    document.getElementById("text_front").innerHTML = textAr[cont];
  } else {
    document.getElementById("text_back").innerHTML = textAr[cont];
  }
}



  
