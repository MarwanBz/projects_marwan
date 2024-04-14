// ! something with OOP 

class Animate {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  changeBG(color, toggle = false, fontColor) {
    if (toggle && this.selector.classList.contains("active")) {
      this.selector.style.color = `${fontColor}`;
      this.selector.style.backgroundColor = "white";
      this.selector.classList.remove("active");
    } else {
      this.selector.style.color = `${fontColor}`;
      this.selector.style.backgroundColor = `${color}`;
      this.selector.style.transition = "all 1.8s ease";
      this.selector.classList.add("active");
    }
  }
  changePosi(toggle = false, deg) {
    if (toggle && this.selector.classList.contains("position")) {
      this.selector.style.transform = `rotate(${0}deg)`;
      this.selector.classList.remove("position");
    } else {
      this.selector.style.transform = `rotate(${deg}deg)`;
      this.selector.style.transition = "all 1.8s ease";
      this.selector.classList.add("position");
    }
  }
}

// container.style.transition = "all .8s ease";
const ani = new Animate(".container");

const title = new Animate("h1");

const para = new Animate(".paragraph");

const button = document.querySelector("#submit");
button.style.fontSize = "20px";

button.addEventListener("click", () => {
  title.changeBG("", 18912112918219, "black");
  title.changePosi(1, 720);
  para.changePosi(1, 360);
  ani.changePosi(1, 1440);
  para.changeBG("green", 18912112918219, "black");
  ani.changeBG( 'red',1, "black");
});

