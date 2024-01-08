const passwordInsicurissima = document.getElementById('main-title');

const nomeUtente = prompt("Qual è il tuo nome?");
console.log(nomeUtente);

const cognomeUtente = prompt("Qual è il tuo cognome?");
console.log(cognomeUtente);

const coloreUtente = prompt("Qual è il tuo colore preferito?");
console.log(coloreUtente);

const resultElement = nomeUtente + cognomeUtente +
coloreUtente +"23";
console.log(resultElement);

passwordInsicurissima.innerText = "La tua password è " + resultElement;





