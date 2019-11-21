//--------------------------------------Traitement de la page contact--------------------------------------



//Vérification du formulaire
function validerFormContact(){
    var REG_EMAIL =  /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;

    
    var email = document.getElementById("courriel").value;
    var confMail = document.getElementById("confCourriel").value;

    if(confMail.exec(email)==null)
    {
        alert("Les adresses courriel ne correspondent pas!");
        return false;
    }else{
        alert("Membre bien enregsitre!");
        return true;
    }
    
}

//--------------------------------------Affichage de la date et de l'heure--------------------------------------
function afficherHeure(){
        //Permets d'obtenir la date UNIX
            var dateComplete;
            var now = new Date();

        //Convertit la date UNIX en date lisible
            var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

        //Cree un tableau contenant l'heure, les minutes et secondes
            var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

        //Determine si l'heure est matinale ou de l'apre-midi
            var suffix = ( time[0] < 12 ) ? "AM" : "PM";
            time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

        //Si l'heure = 0, remplace la par 12
            time[0] = time[0] || 12;

        //Si les secondes et les minutes <10, on ajoute un zéro devant les unités
            for ( var i = 1; i < 3; i++ ) {
                if ( time[i] < 10 ) {
                    time[i] = "0" + time[i];
                }
            }
            dateComplete = date.join("/") + " " + time.join(":") + " " + suffix;
        document.getElementById("textStatut").innerHTML=""+ dateComplete;    
}
