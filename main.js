var email = prompt("Inserisci la tua email!");

var whitelist = ("lollodesossi@gmail.com", "pippo@gmail.com", "pluto@gmail.com");

var convalida = false;

for (var i = 0; i < whitelist.length; i++){
  if (whitelist[i] == email){
      convalida = true;
  }
}

if (convalida = true) {
  document.getElementById("verifica").innerHTML = "Complimenti, la tua email è registrata!"
} else {
  document.getElementById("verifica").innerHTML = "Mi dispiace, non puoi accedere a questo sito!"
}
