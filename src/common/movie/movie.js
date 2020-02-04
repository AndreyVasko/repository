import "./movie.scss";
import { Post } from "./post";

export class Feed {
  constructor(mountPoint = document.querySelector("body")) {
    this.mountPoint = mountPoint;
    this.lists = [];
    this.init();
  }

  init() {
    this.render();
    this.fetchPosts();
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("movie");
    this.wrapper.textContent = "Loading...";
    this.mountPoint.appendChild(this.wrapper);
  }

  rendermovie() {
    this.lists.forEach(list => {
      console.log(list);
      new post(this.wrapper, list);
    });
  }

  fetchPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
    );
    console.log("Before");
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("LOADED");
        this.movies = JSON.parse(xhr.response);
        console.log(this.movies);
        this.rendermovie();
      }
    };
  }
}
