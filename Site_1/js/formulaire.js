"use strict" ;

function validerFormulaire(e) {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut
    let body = document.body; // Sélectionne le body

    let nom = document.getElementById("nom").value; //récupère la valeur nom
    console.log("Votre Nom : "+nom);    // Afficher la valeur
    let email = document.getElementById("email").value; //récupère la valeur email
    console.log("Votre Mail : "+email);    // Afficher la valeur
    let motDePasse = document.getElementById("motDePasse");
    let mdp = document.getElementById("motDePasse").value; //récupère la valeur motDePasse
    console.log("Mot de passe : "+mdp);    // Afficher la valeur

    // Vérification du bouton radio
    let genreHomme = document.getElementById("homme");
    let genreFemme = document.getElementById("femme");
    let genreAutre = document.getElementById("autre");
    let genreError = document.getElementById("genreError");

    let genre;
    if(document.getElementById("homme").checked){//si Homme alors
        genre ="Homme"}
    else{
        if(document.getElementById("femme").checked){//sinon : si Femme
            genre ="Femme"
        }
        else{genre ="Autre"}//sinon Autre
    }; 
    console.log("Votre genre : " +genre);
    
    let note = document.getElementById("note").value; //récupère la valeur note
    console.log("L'utilisateur a donné une note de : "+note);    // Afficher la valeur

    if (!genreHomme.checked && !genreFemme.checked && !genreAutre.checked) {
        alert("Veuillez sélectionner un genre.")
        genreError.classList.add("error");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        genreError.textContent = "";
        genreError.classList.remove("error");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }

    // Ajoutez ici d'autres validations au besoin

    // Validation du mot de passe avec le regex
    let motDePasseError = document.getElementById("motDePasseError");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regex.test(motDePasse.value)) {
        motDePasseError.textContent = "*8 caractères minimum, 1 chiffre, 1 majuscule, 1 minuscule";
        alert("Le mot de passe ne respecte pas les critères requis.")
        motDePasseError.classList.add("error");
        motDePasse.classList.add("error-input");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        motDePasseError.textContent = "";
        motDePasseError.classList.remove("error");
        motDePasse.classList.remove("error-input");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }

    // Ajoutez ici d'autres validations au besoin

    // Si toutes les validations sont réussies, vous pouvez également soumettre le formulaire ici si nécessaire
    // document.getElementById("monFormulaire").submit();
}
let bt=document.querySelector('#bt');
bt.addEventListener('click',validerFormulaire)

// Fonction pour basculer l'affichage du menu déroulant
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}


let darkmode=document.querySelector('button');
console.log(darkmode);

let interrupteur=0;
function backgroundC(){
    let body=document.querySelector('body');
    if(interrupteur==0){
    body.style.background='black';
    interrupteur=1;
    }
    else{
    body.style.background='dark';
    document.body.style.backgroundImage = "url('img/photo_restaurant.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    interrupteur=0;}
}
darkmode.addEventListener("click",backgroundC)