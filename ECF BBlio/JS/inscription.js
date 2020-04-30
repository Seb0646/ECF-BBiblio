function inscriptionjure (){
    var reglement = document.getElementById("reglementjure");
    var surname = document.getElementById("surnamejure").value;
    var name = document.getElementById("namejure").value;
    var age = document.getElementById("agejure").value;
    var email = document.getElementById("emailjure").value;
    var msg = document.getElementById("msgjure").value;

if (surname == ""){
    alert ("Veuillez entrer votre nom")
}

else if (name == ""){
    alert ("Veuillez entrer votre prénom")
} 

else if (age == ""){
    alert ("Veuillez entrer votre âge")
}

else if (email == ""){
    alert ("Veuillez entrer votre mail")
}

else if (msg == ""){
    alert ("Veuillez entrer un message")
}

else if (reglement.checked == false) {
    alert ("Vous devez accepter le règlement pour finaliser votre incription");
}

else {
    document.write("<p style='font-family: Open Sans, sans-serif; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: x-large; font-weight: bold; text-align: center;'>Inscription envoyée ! Nous vous contacterons par e-mail pour vous confirmer votre inscription. Vous allez être redirigé vers la page d'accueil dans 5 secondes<br>Si vous n'êtes pas redirigé automatiquement veuillez cliquer <a href='accueil.html' style='color: black'>ici</a></p>");
    setTimeout(accueil, 5000);
}
}


function inscriptionauteur() {
    var reglement = document.getElementById("reglementjure");
    var surname = document.getElementById("surnameauteur").value;
    var name = document.getElementById("nameauteur").value;
    var age = document.getElementById("ageauteur").value;
    var email = document.getElementById("emailauteur").value;

    if (surname == ""){
        alert ("Veuillez entrer votre nom")
    }
    
    else if (name == ""){
        alert ("Veuillez entrer votre prénom")
    } 
    
    else if (age == ""){
        alert ("Veuillez entrer votre âge")
    }
    
    else if (email == ""){
        alert ("Veuillez entrer votre mail")
    }

else if (reglement.checked == false) {
    alert ("Vous devez accepter le règlement pour finaliser votre incription"); 
}

else {
    document.write("<p style='font-family: Open Sans, sans-serif; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: x-large; font-weight: bold; text-align: center;'>Inscription envoyée ! Nous vous contacterons par e-mail pour vous confirmer votre inscription. Vous allez être redirigé vers la page d'accueil dans 5 secondes<br>Si vous n'êtes pas redirigé automatiquement veuillez cliquer <a href='accueil.html' style='color: black'>ici</a></p>");
    setTimeout(accueil, 5000);
}
}

function accueil() {
    document.location.href="accueil.html";
}