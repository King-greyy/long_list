// let header="Template Literals"
// let tags=["template literals","javascript","es6"];

// let html = `<h2>${header}</h2><ol>`;

// for (const x of tags) {
//     html += `<li>${x}</li>`;
// }
// html += `</ol>`;
// document.getElementById('points').innerHTML = html;
let price = 20.0;
let VAT = 0.309; 

let total = `Total:${price*(1+VAT).toFixed(2)}`;
console.log (total)
console.log(typeof(total))
console.log(Math.random())