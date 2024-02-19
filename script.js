let text = `<theatre> 
 <movie> 
 <title>Jurassic Park</title>
 <director>Steven Spielberg</director> 
<year>1993</year>
</movie>
</theatre>`

let p = document.querySelector('p')
let h1 = document.querySelector('h1')
let  parser  = new DOMParser()
let xmlDoc = parser.parseFromString(text, "text/xml")
let movie = xmlDoc.documentElement.firstElementChild
//console.log(movie.children[1].textContent)
h1.innerHTML = movie.children[0].textContent
p.innerHTML = movie.children[1].textContent