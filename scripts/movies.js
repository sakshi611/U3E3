// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount = JSON.parse(localStorage.getItem('amount')) || 0
document.getElementById('wallet').innerHTML = amount
let id
async function searchMovies(){
    try{
        const query = document.getElementById('search').value
        const res = await fetch(`https://omdbapi.com/?apikey=f0a9ff37&s=${query}`)
        data = await res.json()
        movies = data.Search
        return movies
    }
    catch(err){
        console.log(err)
    }
}

function appendMovie(data){
    document.getElementById('movies').innerHTML= null
    data.forEach(ele => {
        
        let movie_div = document.createElement('div')
        movie_div.className ='movie_tab'
        let title = document.createElement('p')
        title.innerText = ele.Title

        let image = document.createElement('img')
        image.src= ele.Poster
        
        title.innerText = ele.Title
        let btn = document.createElement('button')
        btn.className= 'book_now'
        btn.innerText='Book Now'
        btn.addEventListener('click',()=>{
        let movie = JSON.parse(localStorage.getItem('movie')) || []
            movie.push(ele)
            localStorage.setItem('movie',JSON.stringify(movie))
            window.location.href="checkout.html"
        })
        movie_div.append(image,title,btn)
        document.getElementById('movies').append(movie_div)
    });
    
}

async function main(){
    let data =await searchMovies()
    if(data == undefined){
        return false
    }
    appendMovie(data)
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(()=>{
        func();
    },delay)
}

