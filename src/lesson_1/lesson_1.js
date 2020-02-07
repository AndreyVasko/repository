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
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("div");
    const myPara4 = document.createElement("div");
    // const myPara5 = document.createElement("img");
    const myPara3 = document.createElement("img");

    myH2.textContent = movie[i].name;
    myPara1.textContent = movie[i].title;
    myPara2.textContent = movie[i].rating;
    myPara4.textContent = movie[i].description;
    // myPara5.img = movie[i].preview.hgh;
    myPara3.getElementsByTagName = movie[i].preview;

    // let movieimg = movie[i].preview;
    // for (let i = 0; i < movieimg.length; i++) {
    //   const listItem = document.createElement("img");
    //   listItem.img = movieimg[i];
    //   myList.appendChild(listItem);
    // }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    // myArticle.appendChild(myPara5);

    section.appendChild(myArticle);
  }
}
