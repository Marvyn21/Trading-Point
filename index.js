// fetch data from the api to dislay on the page
const apiUrl = 'https://api.coinlore.net/api/tickers/';
const ethusriumDiv = document.getElementById('ethurium'); 
const rippleDiv = document.getElementById('ripple'); 
const litecoinDiv = document.getElementById('litecoin'); 
const bitcoinCashDiv = document.getElementById('bitcoinCash'); 

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.data.forEach(coin => {
        const symbol = coin.symbol;
        const name = coin.name;
        const priceUsd = coin.price_usd;
        const percentChange24h = coin.percent_change_24h;

        const bitcoinDiv = document.getElementById('bitcoin')

        const symbolCell = document.createElement('h2');
        symbolCell.textContent = name;
        bitcoinDiv.appendChild(symbolCell)

    // function displayCrypto(cryptoData){
    //     const cryptoDetails = cryptoData.data[0];
    //     const bitcoinDiv = document.getElementById('bitcoin')
    
    //     const cryptoSymbol = cryptoDetails.symbol;
    //     const symbolTag = document.createElement("h2");
    //     symbolTag.innerHTML = cryptoSymbol;
    //     bitcoinDiv.appendChild(symbolTag);
        
    // }


//     const html = `
//     <h2>${data.symbol}</h2>
//     <p>${data.name}</p>
//   `;
//   bitcoinDiv.innerHTML += html;
//   ethuriumDiv .innerHTML += html;
//   rippleDiv.innerHTML += html;
//   litecoinDiv.innerHTML += html;
//   bitcoinCashDiv.innerHTML += html;
    // do something with the data, e.g. display it on the page
  })
  .catch(error => {
    console.error(error);
  });











// const submitButton = document.getElementById("submit-button");

// submitButton.addEventListener("click", function() {
    
//     submitButton.disabled = true;
//     submitButton.style.backgroundColor = "#CCCCCC";
// });


// const emailInput = document.getElementById('email');

// emailInput.addEventListener('input', (event) => {
//   const email = event.target.value;
//   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//   if (!emailRegex.test(email)) {
//     emailInput.setCustomValidity('Please enter a valid email address');
//   } else if (email.length > 50) {
//     emailInput.setCustomValidity('Please enter an email address that is less than 50 characters long');
//   } else {
//     emailInput.setCustomValidity('');
//   }
// });
