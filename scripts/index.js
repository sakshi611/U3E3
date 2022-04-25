// Store the wallet amount to your local storage with key "amount"

let amount = JSON.parse(localStorage.getItem('amount')) || 0
document.getElementById('wallet').innerHTML = amount


document.getElementById('add_to_wallet').addEventListener('click',()=>{
    let n = document.getElementById('amount').value;
    amount=eval(Number(amount)+Number(n));
    document.getElementById('wallet').innerHTML = amount
    localStorage.setItem('amount',JSON.stringify(amount));
    document.getElementById('amount').value = null
})

document.getElementById('book_movies').addEventListener('click',()=>{
    window.location.href="movies.html"
})


