const budget = 20000;
const prix_cahier = 1500;
const qauntite_cahier = 4;
const prix_stylo = 500;
const quantite_stylo = 3;
const montant_cahier = prix_cahier*qauntite_cahier;
const montant_stylo = prix_stylo* quantite_stylo;
const montant_total_achat = montant_cahier + montant_stylo;

console.log("===== CAISSE =====");
console.log("Cahier :" ,montant_cahier,"FCFA" );
console.log("Stylos :" ,montant_stylo,"FCFA" );
console.log("Total :" ,montant_total_achat,"FCFA" );
console.log("Budget :" ,budget,"FCFA" );
if (montant_total_achat <= budget){
    console.log("Budget suffisant");
} else {
    console.log("Budget insffisant");
}
for (let i = 1; i <= 5; i++) {
console.log ("Achat numéro" , i)
}