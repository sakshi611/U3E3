// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount = JSON.parse(localStorage.getItem('amount')) || 0
document.getElementById('wallet').innerHTML = amount

let movie = JSON.parse(localStorage.getItem('movie')) || []
let movie_div =  document.createElement('div')
movie_div.id='movie_div'
let title = document.createElement('h1')
title.innerText = movie[0].Title
let poster = document.createElement('img')
poster.src=movie[0].Poster

movie_div.append(title,poster)
document.querySelector('#movie').append(movie_div)


function confirm(){
    let number_of_seats = document.querySelector('#number_of_seats').value
    let cost = eval(number_of_seats*100)
    if(amount>=cost){
        amount = eval(amount-cost)
        localStorage.setItem('amount',JSON.stringify(amount));
        document.getElementById('wallet').innerHTML = amount
        alert("Booking successfull")
        document.getElementById('user_name').value = null
        document.getElementById('number_of_seats').value = null
        localStorage.clear()
    }
    else{
        alert("Insufficient Balance!")
    }
}