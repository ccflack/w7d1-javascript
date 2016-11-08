// Data

movies = []

movies.push(
  {
    title: "Blade Runner",
    directors: ["Ridley Scott"],
    genre: "Sci-fi",
    year: 1982,
    actors: ["Harrison Ford", "Rutger Hauer", "Sean Young", "Edward James Olmos"],
    stars: 8.2,
    metascore: 89
  }
)

movies.push(
  {
    title: "The Last Starfighter",
    directors: ["Nick Castle"],
    genre: "Sci-fi",
    year: 1984,
    actors: ["Lance Guest", "Robert Preston", "Catherine Mary Stewart"],
    stars: 6.7,
    metascore: "Not Available"
  }
)

movies.push(
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    directors: ["Irvin Kershner"],
    genre: "Sci-fi",
    year: 1980,
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    stars: 8.8,
    metascore: 80
  }
)

movies.push(
  {
    title: "Nausicaa of the Valley of the Wind",
    directors: ["Hayao Miyazaki"],
    genre: "Sci-fi",
    year: 1984,
    actors: ["Alison Lohman", "Patrick Stewart", "Shia LeBeouf", "Uma Thurman"],
    stars: 8.1,
    metascore: "Not Available"
  }
)

movies.push(
  {
    title: "Howl's Moving Castle",
    directors: ["Hayao Miyazaki"],
    genre: "Fantasy",
    year: 2004,
    actors: ["Christian Bale", "Emily Mortimer", "Jean Simmons", "Billy Crystal", "Lauren Bacall"],
    stars: 8.2,
    metascore: 80
  }
)

movies.push(
  {
    title: "Manos: The Hands of Fate",
    directors: ["Harold P. Warren"],
    genre: "Comedy?",
    year: 1966,
    actors: ["Tom Neyman", "John Reynolds", "Diane Adelson", "Billy Crystal", "Lauren Bacall"],
    stars: 1.2,
    metascore: "Not Available"
  }
)

movies.push(
  {
    title: "Batman & Robin",
    directors: ["Joel Schumaker"],
    genre: "Action",
    year: 1994,
    actors: ["George Clooney", "Chris O'Donnell", "Arnold Schwarzenegger", "Uma Thurman"],
    stars: 3.7,
    metascore: 28
  }
)

movies.push(
  {
    title: "Battlefield Earth",
    directors: ["Roger Christian"],
    genre: "Sci-fi",
    year: 2000,
    actors: ["John Travolta", "Forest Whitaker", "Barry Pepper", "Kim Coates"],
    stars: 2.4,
    metascore: 9
  }
)


// Helper

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

// By Title

by_title = movies.sort(function(movie, other){
  return movie.title > other.title
})

by_title.forEach(function(movie, i) {
  if (i === 0) {
    Object.keys(movie).forEach(function(header) {
      document.getElementById("headers").innerHTML += "<th>" + header.capitalizeFirstLetter() + "</th>"
    })
  }
})

by_title.forEach(function(movie){
  document.getElementById("movie_data").innerHTML += "<td>" + movie.title + "</td>" + "<td>" + movie.directors + "</td>" + "<td>" + movie.genre + "</td>" + "<td>" + movie.year + "</td>" + "<td>" + movie.actors.join(", ") + "</td>" + "<td>" + movie.stars + "</td>" + "<td>" + movie.metascore + "</td>"
})

console.log(by_title)

console.log(JSON.stringify(by_title))

// By Star Rating (Adventure Mode)

by_stars = movies.sort(function(movie, other){
  return parseFloat(other.stars) - parseFloat(movie.stars)
})

by_stars.forEach(function(movie, i) {
  if (i === 0) {
    Object.keys(movie).forEach(function(header) {
      document.getElementById("headers_by_stars").innerHTML += "<th>" + header.capitalizeFirstLetter() + "</th>"
    })
  }
})

// I really wanted this to work...
//
// by_stars.forEach(function(movie) {
//   document.getElementById("movie_data_by_stars").innerHTML += "<tr>"
//   Object.values(movie).forEach(function(value) {
//     document.getElementById("movie_data_by_stars").innerHTML += "<td>" + value + "</td"
//   })
//   document.getElementById("movie_data_by_stars").innerHTML += "</tr>"
// })

by_stars.forEach(function(movie){
  document.getElementById("movie_data_by_stars").innerHTML += "<tr>" + "<td>" + movie.title + "</td>" + "<td>" + movie.directors + "</td>" + "<td>" + movie.genre + "</td>" + "<td>" + movie.year + "</td>" + "<td>" + movie.actors.join(", ") + "</td>" + "<td>" + movie.stars + "</td>" + "<td>" + movie.metascore + "</td>" + "</tr>"
})

console.log(by_stars)

console.log(JSON.stringify(by_stars))

// API's (Epic Mode)

JSON.parse('{"Title":"The Last Starfighter","Year":"1984","Rated":"PG","Released":"13 Jul 1984","Runtime":"101 min","Genre":"Action, Adventure, Sci-Fi","Director":"Nick Castle","Writer":"Jonathan R. Betuel","Actors":"Kay E. Kuter, Dan Mason, Lance Guest, Dan O\'Herlihy","Plot":"A discouraged video-gaming boy finds himself recruited as a gunner for an alien defense force.","Language":"English","Country":"USA","Awards":"4 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4NDY2NTA2MV5BMl5BanBnXkFtZTYwNjI2Mjg4._V1_SX300.jpg","Metascore":"N/A","imdbRating":"6.7","imdbVotes":"29,470","imdbID":"tt0087597","Type":"movie","Response":"True"}', (key, value) => {
  document.getElementById("api_headers").innerHTML += "<th>" + key.capitalizeFirstLetter() + "</th>"
  document.getElementById("api_data").innerHTML += "<td>" + value + "</td>"
  }
)
