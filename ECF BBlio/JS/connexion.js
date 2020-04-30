function connexion() {

    var user = document.getElementById("identifier").value;
    var mdp = document.getElementById("mdp").value;

if (user == "")
{
    alert("Veuillez entrer un identifiant")
}

else if (user != "user") 
{
  alert("L'dentifiant est incorrect");
}

else if (mdp == "")
{
    alert("Veuillez entrer votre mot de passe")
}

else if (mdp != "password") 
{
  alert("Mot de passe incorrect");
}

else {
  document.write("<p style='font-family: Open Sans, sans-serif; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: x-large; font-weight: bold; text-align: center;'>Félicitation vous êtes connecté ! Vous allez être redirigé vers la page d'accueil dans 5 secondes<br>Si vous n'êtes pas redirigé automatiquement veuillez cliquer <a href='accueil.html' style='color: black'>ici</a></p>");
  setTimeout(accueil, 5000);
} 
}

function accueil() {
  document.location.href="accueil.html";
}

(function keypress() {
  var mdp = document.getElementById("mdp");
	mdp.addEventListener("keypress", function() {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("valid").click();
		}
	});
}());

(function keypress() {
  var user = document.getElementById("identifier");
	user.addEventListener("keypress", function() {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("valid").click();
		}
	});
}());