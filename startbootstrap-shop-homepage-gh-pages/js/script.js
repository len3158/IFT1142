//<!-- Auteur Lenny SIEMENI-->
//<!-- Date de création 9 avril 2016-->
var tabCatalogue = [{"titre" : "Splatoon", "prix" : 70.95, "categ" : "Jeux Videos", "image" : "splatoon.jpg"},
                    
                    {"titre" : "Super Mario Maker", "prix" : 65.95, "categ" : "Jeux Videos" , "image" : "marioMaker.jpg"},
                    
                    {"titre" : "Boulons", "prix" : 3.95, "categ" : "Quincaillerie" , "image" : "boulons.jpg"},
                    
                    {"titre" : "Clous", "prix" : 2.95, "categ" : "Quincaillerie" , "image" : "clous.jpg"},
                    
                    {"titre" : "Cables Electriques", "prix" : 1.99, "categ" : "Quincaillerie" , "image" : "cables.jpg"},
                    
                    {"titre" : "Super Smash Bros Wii U", "prix" : 59.99, "categ" : "Jeux Videos" , "image" : "ssbu.jpg"},
                    
                    {"titre" : "Super Smash Bros Brawl", "prix" : 39.95, "categ" : "Jeux Videos" , "image" : "ssbb.jpg"},
                    
                    {"titre" : "Super Smash Melee", "prix" : 34.99, "categ" : "Jeux Videos" , "image" : "ssbm.jpg"},
                    
                    {"titre" : "TV Plasma", "prix" : 655.00, "categ" : "Electromenager" , "image" : "tvPlasma.jpg"},
                    
                    {"titre" : "Onduleur", "prix" : 199.99, "categ" : "Ordinateurs" , "image" : "onduleur.jpg"},
                    
                    {"titre" : "Disque Dur 1TO", "prix" : 79.99, "categ" : "Ordinateurs" , "image" : "hdd.jpg"},
                    
				    {"titre": "iMac", "prix" : 2400.00, "categ" : "Ordinateurs" , "image" : "imac.jpg"},
                    
                    {"titre" : "Resistances", "prix" : 0.25, "categ" : "Quincaillerie" , "image" : "resistance.jpg"}];

var panier = [];

var membre = [];


window.onload = start;

//Tous les appels de fonctions au chargement de la page
function start() {
	remplirSelectRecherche();
    if(typeof(Storage)!=="undefined")
		checkLS();
    ajouterEcouteurRecherche();
    nouveaute();
    afficherHeure();
}


//--------------------------------------LES EVENTS LISTENERS--------------------------------------

function ajouterEcouteurRecherche() {
var listenRecherche = document.getElementById("boutonRecherche");
    if (listenRecherche.addEventListener){   
        listenRecherche.addEventListener('click', afficherCatalogue);
            } else if (listenRecherche.attachEvent) { 
                listenRecherche.attachEvent('onclick', afficherCatalogue);
            }
    return false;
};

//--------------------------------------Traitement avec le select de recherche--------------------------------------

//Fonction permettant de remplir le select de recherche
function remplirSelectRecherche () {
	var selRecherche = document.getElementById("selectRecherche"), i, newOption;
    
	for (i in tabCatalogue){
		newOption = document.createElement('option');
		newOption.text = tabCatalogue[i].categ;
		newOption.value = tabCatalogue[i].categ;
		selRecherche.add(newOption);
	}
    
//Supprimer les doublons dans le select avec JQuery
    var doublons = {};
        $("select[name='recherche'] > option").each(function () {
            if(doublons[this.text]) {
                $(this).remove();
            } else {
                doublons[this.text] = this.value;
            }
        });
};


//--------------------------------------Affichage des articles--------------------------------------

//Effacer la zone d'affichage
var effacerArdoise = function()
{
    var formProduit = document.getElementById("formProduit");
    var h1TitrePanier = document.getElementById("titlePanier");
    while (formProduit.hasChildNodes()) {
        formProduit.removeChild(formProduit.lastChild);
    }
    
}

//Affichage des nouveautés
function nouveaute(){
    
//window.location.href.split('/').pop() permet de savoir sur quelle page on se trouve
    if(window.location.href.split('/').pop()=="produit.html"){
    effacerArdoise()
        var zoneCatalogue = document.getElementById("formProduit");
            for(var i=1;i<5;i++){
                var valRandom = tabCatalogue[Math.floor(Math.random() * tabCatalogue.length)];
                var produit = function creerItem(){
                var element = document.createElement("div");
                var attribut = document.createAttribute("class"); 
                    attribut.value = "card h-100";
                    element.setAttributeNode(attribut);  
                    element.innerHTML = "<img src=../images/"+tabCatalogue[i].image+"><div class="+"card-body"+"><h4 class="+"card-title"+"><a href="+"#"+"name="+"titre"+">"+tabCatalogue[i].titre+"</a></h4><p name="+"prix"+" value="+tabCatalogue[i].prix+">"+tabCatalogue[i].prix+" $</p><input type="+"checkbox"+" name="+tabCatalogue[i].titre+ " value="+tabCatalogue[i].prix+" /><br><label for="+"quantite"+">Quantite desiree: </label><input type="+"text "+"id="+"quantite "+"value="+" "+" >";
                    return element;
                };
            zoneCatalogue.appendChild(produit());
        }
    }
};


//Afficher selon la catégorie choisie
function afficherCatalogue () {
    effacerArdoise();
	var valueIndex = document.getElementById("selectRecherche");
    var formProduit = document.getElementById("formProduit");
	var categChoisie = valueIndex.options[valueIndex.selectedIndex].value;
    
	for (i in tabCatalogue){
		if(tabCatalogue[i].categ == categChoisie){
            var produit = function creerItem(){
                var element = document.createElement("div");
                var attribut = document.createAttribute("class"); 
                attribut.value = "card h-100";
                element.setAttributeNode(attribut);  
                // element.innerHTML = "<img name="+"image"+" src=../images/"+tabCatalogue[i].image+"><div class="+"card-body"+"><h4 class="+"card-title"+"><a href="+"#"+"name="+"titre"+">"+tabCatalogue[i].titre+"</a></h4><p name="+"prix"+" value="+tabCatalogue[i].prix+">"+tabCatalogue[i].prix+" $</p><input type="+"checkbox"+" name="+tabCatalogue[i].titre+ " value="+tabCatalogue[i].prix+" /><br><label for="+"quantite"+">Quantite desiree: </label><input type="+"text "+"id="+"quantite "+"value="+" "+" >";
                element.innerHTML = "<a href="+"#"+"><img class="+"card-img-top"+" src=../images/"+tabCatalogue[i].image+" alt="+""+"></a><div class="+"card-body"+"><h4 class="+"card-title"+"><a href="+"#"+">"+tabCatalogue[i].titre+"</a></h4><h5>"+tabCatalogue[i].prix+"</h5></div><div class="+"card-footer"+"><small class="+"text-muted"+">&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div>";
                return element;
                };
            document.getElementById("formProduit").appendChild(produit());
            }
		} 
    creerBouton();
};

//Créer le bouton permettant d'ajouter au panier
var creerBouton = function(){
    var input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute('id','boutonAjouterPanier');
        input.setAttribute('value','Ajouter au Panier');
        input.setAttribute("onClick", "ajouterPanier();");
    formProduit.appendChild(input); 
};


//--------------------------------------Traitement du panier--------------------------------------

//Ajouter un article au panier
var ajouterPanier = function(){
    
    var getCheckboxes = document.getElementsByTagName("input"), i;
    var getQtite = document.getElementById("quantite");
for (var i=0;i<getCheckboxes.length;i++)
 {
    var checkbox = getCheckboxes[i];
    if (checkbox.type == "checkbox")
       {
           //Si la case est cochee on recupere 2 parametres et on les ajoute dans le tab d'objet "pannier"
           if ( checkbox.checked ) {
            var titreLeItem = checkbox.name;
	        var prixLeItem = checkbox.value;
            var quantite = getQtite.value;
            panier.push({"titre":titreLeItem,"prix":prixLeItem, "quantite":quantite});
               if (typeof(Storage) !== "undefined") {
                // Store
                localStorage.setItem("panier", JSON.stringify(panier));
               } 
            panier = JSON.parse(localStorage["panier"]);
            alert("Article "+titreLeItem+" ajoute au panier");
            }
       }
 }
   return panier;
};

//Afficher le contenu du panier
function afficherPanier () {
    if(window.location.href.split('/').pop()=="panier.html"){ 
        effacerArdoise();
        var tableau = document.createElement("table");
        var attribut = document.createAttribute("id"); 
        attribut.value = "tabPanier";
        tableau.setAttributeNode(attribut);
        tableau.innerHTML ="<tr><th>Article</th><th>prix</th><th>Quantite</th></tr>";
    document.getElementById("formProduit").appendChild(tableau); 
	for (i in panier){
            var produitPanier = function creerItem(){
                var element = document.createElement("tr")
                element.innerHTML = "<td>"+panier[i].titre+"</td><td>"+panier[i].prix+"</td><td>"+panier[i].quantite+"</td>";
                    return element;
                };
        
            document.getElementById("tabPanier").appendChild(produitPanier());
        }
    }
};


//Supprimer un article du panier
function effacerPanier(){
    effacerArdoise();
    panier.splice(0,panier.length);
    localStorage.clear();
        alert("Panier efface!");
}

var updateLS = function(){
	localStorage.setItem("panier",JSON.stringify(panier));
}

var checkLS = function(){
	if(localStorage.getItem("panier") === null)
		updateLS();
	else
		panier = JSON.parse(localStorage["panier"]);
}


//Calculer et afficher la facture
function afficherFacture(){
effacerArdoise();
    var somme, somme1, somme2, TVQ, TPS, sousTotal1, sousTotal2, total;
    
    //Calcul de la somme HT
    var sommeHT = function(){
     for(i in panier){
      somme = panier[i].prix * panier[i].quantite;   
     }
        return somme.toFixed(2);
    }
    
    //Calcul de la TPS
    var sommeTPS = function(){
        for(i in panier){
            sousTotal1 = panier[i].prix * panier[i].quantite;
            somme1 += sousTotal1;
        }
        
        TPS =  (sousTotal1 * 5) / 100;
        return TPS.toFixed(2);
    }
    
    //Calcul de la TVQ
    var sommeTVQ = function(){
        for(i in panier){
                sousTotal2 = panier[i].prix * panier[i].quantite;
                somme2 += sousTotal2;
            }
            TVQ =  (sousTotal1 * 9.975) / 100;
        return TVQ.toFixed(2);
    }
    
    //Somme totale
    var TTC = function(){
            sommeHT();
            sommeTPS();
            sommeTVQ();
            total = parseFloat(somme) + parseFloat(TPS) + parseFloat(TVQ);
        return total.toFixed(2);
    }

    //On cree la facture
    var facture = function creerItem(){
            var element = document.createElement("table");
            var attribut = document.createAttribute("class"); 
            attribut.value = "tabPanier";
            element.setAttributeNode(attribut);  
            element.innerHTML = "Total: "+sommeHT()+" $</br>TPS: "+sommeTPS()+" $</br>TVQ: "+sommeTVQ()+"$</br>MONTANT A PAYER: "+TTC()+" $<br><button onClick="+"imprimer() "+"return="+"false "+">Imprimer</button>";
                    return element;
                };
    document.getElementById("formProduit").appendChild(facture());
    
};

//Imprimer la facture
var imprimer = function Imprimer(){
    window.print();
}

//Envoyer un courriel contenant la facture

//--------------------------------------Traitement de la page contact--------------------------------------

//Voir "contact.js"


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
