// fetch data from the api to dislay on the page
const coins = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'bitcoincash'];

coins.forEach(coin => {
  fetch('https://api.coinlore.net/api/tickers/')
    .then(response => response.json())
    .then(data => {
      if(this.coin === undefined) {return}
      const cryptoDiv = document.getElementById('crypto');
      const symbol = data[1].symbol;
      const name = data[2].name;
      const priceUsd = data[5].price_usd;
      const percentChange24h = data[6].percent_change_24h;
      const coinDiv = document.createElement('div');
      coinDiv.innerHTML = `${symbol} - ${name}: $${priceUsd} (${percentChange24h}%)`;
      cryptoDiv.appendChild(coinDiv);
    })
    .catch(error => console.error(error));
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
