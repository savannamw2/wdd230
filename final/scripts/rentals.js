
const tableInRental = document.querySelector('#table-in-rental');
const prices = "data/rentals.json";

async function getPrices() {
    const companies = await fetch(prices);
    const data = await companies.json();
    displayPrices(data.prices);
}

function displayPrices(prices) {
    const list = document.getElementById("article");
    prices.forEach(price => {
        const tr = document.createElement("tr");
        Object.keys(price).forEach(el => {
            const td = document.createElement("td");
            td.textContent = `${price[el]}`;
            tr.appendChild(td);
        });
        tableInRental.appendChild(tr);
    });
}

getPrices();
