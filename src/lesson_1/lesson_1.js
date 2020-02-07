import "./lesson_1.scss";

const section = document.querySelector("section");

let requestURL =
  "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
  const movies = request.response;
  populatemov(movies);
  showMovie(movies);
};

function populatemov(jsonObj) {
  const movie = jsonObj["featured"];
  for (let i = 0; i < movie.length; i++) {}
}

function showMovie(jsonObj) {
  const movie = jsonObj["list"];

  for (let i = 0; i < movie.length; i++) {
    const myArticle = document.createElement("div");
    myArticle.classList.add("movie_box");

    const myPara1 = document.createElement("p");
    myPara1.classList.add("movie_title");
    const myPara2 = document.createElement("div");
    myPara2.classList.add("movie_rat");
    const myPara4 = document.createElement("div");
    myPara4.classList.add("movie_genre");
    const myPara5 = document.createElement("img");
    // const myPara3 = document.createElement("img");
    myPara5.classList.add("movie_img");

    myPara1.textContent = movie[i].title;
    myPara2.textContent = movie[i].rating;
    myPara4.textContent = movie[i].genre;
    myPara5.src =
      "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199507/movies/bitmap_2x_qt5gqd.jpg";
    // myPara3.createElement = movie[i].preview;

    let movieimg = movie[i].preview;
    for (let j = 0; j < movieimg.length; j++) {
      const listItem = document.createElement("img");
      listItem.img = movieimg[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    // myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);

    section.appendChild(myArticle);
  }
}
