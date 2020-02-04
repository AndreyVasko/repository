import "./post.scss";

export class Post {
  constructor(mp, data) {
    this.mountPoint = mp;
    this.data = data;
    this.render();
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("movie");

    this.img = document.createElement("img");
    this.img.src = this.data.preview.high;
    this.img.classList.add(preview);

    this.wrapper.appendChild(this.img);
    this.mountPoint.appendChild(this.wrapper);
  }

  // const renderSlide = (item, i) => {
  //     let expand = false;
  //     const slide = document.createElement("div");
  //     const label = document.createElement("div");
  //     const description = document.createElement("p");
  //     label.textContent = item.rating;
  //     label.classList.add("slide__rating");

  //     description.innerHTML = showText();
  //     description.classList.add("slide__description");

  //     slide.classList.add("slide");
  //     slide.style.transform = `translateX(-${i * 100}%)`;

  //     const img = document.createElement("img");
  //     img.src = item.preview.high;
  //     img.classList.add("slide__image");

  //     slide.appendChild(img);
  //     slide.appendChild(label);
  //     slide.appendChild(description);
}
