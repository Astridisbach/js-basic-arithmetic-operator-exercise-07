"use strict";

// 5. Opret variabler med startværdier
let subtotal = 50; // Delbeløb starter på 50 dollars
let shipping = 10; // Fragt koster 10 dollars
let quantity = 3; // Antal varer er 3

// 6. Brug += for at lægge 20 dollars til delbeløbet
subtotal += 20;

// 7. Beregn totalbeløbet uden skat
let totalExclusivTax = (quantity * subtotal) + shipping; // Pris for alle varer + fragt

// 8. Tilføj 25% skat
let totalInclusivTax = totalExclusivTax * 1.25; // Multiplicer med 1.25 for at tilføje skat

// 9. Hent HTML-elementerne
let subtotalElement = document.getElementById("subtotal"); // Finder delbeløbs-elementet
let shippingElement = document.getElementById("shipping"); // Finder fragt-elementet
let totalElement = document.getElementById("total"); // Finder totalbeløbs-elementet

// 10. Opdater HTML-indholdet med de beregnede værdier
subtotalElement.textContent = subtotal.toFixed(2); // Opdaterer delbeløbet og viser 2 decimaler
shippingElement.textContent = shipping.toFixed(2); // Opdaterer fragtbeløbet
 totalElement.textContent = totalInclusivTax.toFixed(2); // Opdaterer totalbeløbet med skat

// 11. Log værdierne til konsollen for fejlfinding
console.log("Subtotal:", subtotal);
console.log("Shipping:", shipping);
console.log("Total inkl. skat:", totalInclusivTax);