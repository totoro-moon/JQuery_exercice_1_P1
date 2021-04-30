// j'attend le chargement de mon html,ensuite j'exécute le script.
$(document).ready(function () {
    // j'utilise en JQuery l'alias $ pour appeler l'element objet 
    // au double clic on lui passe la methode hide
    $("div").dblclick(function () {
        $(this).hide();
    });
});