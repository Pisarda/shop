// Variabili globali
let carrello = JSON.parse(localStorage.getItem('carrello')) || [];
let carrelloCount = document.getElementById('carrello-count');
let carrelloLista = document.getElementById('carrello-lista');
let total = document.getElementById('total');

// Funzione per aggiungere un prodotto al carrello
function aggiungiAlCarrello(nome, prezzo) {
    let prodotto = { nome: nome, prezzo: prezzo };
    carrello.push(prodotto);
    localStorage.setItem('carrello', JSON.stringify(carrello));  // Salva nel localStorage
    aggiornaCarrello();  // Aggiorna la visualizzazione del carrello
}

// Funzione per aggiornare la visualizzazione del carrello
function aggiornaCarrello() {
    let totale = 0;
    if (carrello.length > 0) {
        // Aggiorna la lista dei prodotti nel carrello
        if (carrelloLista) {
            carrelloLista.innerHTML = '';  // Svuota la lista esistente

            // Aggiungi ogni prodotto alla lista
            carrello.forEach((prodotto, index) => {
                let li = document.createElement('li');
                li.innerHTML = `${prodotto.nome} - €${prodotto.prezzo} <button onclick="rimuoviDalCarrello(${index})">Rimuovi</button>`;
                carrelloLista.appendChild(li);
                totale += prodotto.prezzo;  // Calcola il totale
            });

            // Visualizza il totale
            total.innerHTML = `Totale: €${totale.toFixed(2)}`;
        }

        // Aggiorna il contatore del carrello nelle altre pagine
        if (carrelloCount) {
            carrelloCount.innerHTML = carrello.length;
        }
    } else {
        // Se il carrello è vuoto, mostra un messaggio vuoto
        total.innerHTML = "Totale: €0.00";
        if (carrelloCount) {
            carrelloCount.innerHTML = 0;
        }
    }
}

// Funzione per rimuovere un prodotto dal carrello
function rimuoviDalCarrello(index) {
    carrello.splice(index, 1);  // Rimuovi il prodotto dalla lista
    localStorage.setItem('carrello', JSON.stringify(carrello));  // Salva la modifica nel localStorage
    aggiornaCarrello();  // Aggiorna la visualizzazione del carrello
}

// Funzione per svuotare il carrello
function svuotaCarrello() {
	carrello = [];
	console.log("Svuota");
	localStorage.setItem('carrello', JSON.stringify(carrello));
	aggiornaContatoreCarrello();
	aggiornaCarrello();
}

function aggiornaCarrello() {
	let totale = 0;
	if (carrello.length > 0) {
		carrelloLista.innerHTML = '';
		carrello.forEach((prodotto, index) => {
			let li = document.createElement('li');
			li.innerHTML = `${prodotto.nome} - €${prodotto.prezzo} <button onclick="rimuoviDalCarrello(${index})">Rimuovi</button>`;
			carrelloLista.appendChild(li);
			totale += prodotto.prezzo;
		});
		total.innerHTML = `Totale: €${totale.toFixed(2)}`;
	} else {
		carrelloLista.innerHTML = '';
		total.innerHTML = "Totale: €0.00";
	}
}


        function aggiornaContatoreCarrello() {
            carrelloCount.innerHTML = carrello.length;
        }


// Inizializza il carrello (aggiorna la home page e la pagina carrello)
if (carrello.length > 0) {
    aggiornaCarrello();  // Mostra il carrello aggiornato
} else {
    if (carrelloCount) {
        carrelloCount.innerHTML = 0;  // Se il carrello è vuoto, mostra 0
    }
}

// Aggiungi l'evento al pulsante "Svuota carrello" (se presente)
let svuotaButton = document.getElementById('svuota-carrello');
if (svuotaButton) {
    svuotaButton.addEventListener('click', svuotaCarrello);
	
	
	function aggiungiAlCarrello(nome, prezzo) {
    console.log(`Aggiunto al carrello: ${nome} - €${prezzo}`);  // Debug
    let prodotto = { nome: nome, prezzo: prezzo };
    carrello.push(prodotto);
    localStorage.setItem('carrello', JSON.stringify(carrello));
    aggiornaCarrello();
}


}
