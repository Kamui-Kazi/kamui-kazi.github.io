import CakeScene from "./js/CakeScene.js";

class MainController {
  constructor(container) {
    this.container = container;

    // Setup the scene:
    const scene = new CakeScene();
    scene.element.style.display = "none";

    container.appendChild(scene.element);

    window.addEventListener("resize", this.handleResize.bind(this));

    this.scene = scene;
    this.handleResize();

    // Setup loading:
    const loadingElement = document.createElement("span");
    loadingElement.textContent = "Preparing…";

    // Audio:
    const audioPlayer = document.getElementsByTagName("audio")[0];
    audioPlayer.addEventListener("play", () => {
      loadingElement.parentNode.removeChild(loadingElement);

      scene.element.classList.add("cue-in");
      scene.element.style.display = "block";

      document.title = "Cake!";
    });

    // Button:
    const button = document.createElement("button");
    button.textContent = "Trust me";
    button.addEventListener("click", (event) => {
      // Remove button:
      button.parentNode.removeChild(button);

      // Add loading:
      container.appendChild(loadingElement);

      // Trigger playback:
      audioPlayer.play();
    });

    container.appendChild(button);
  }

  handleResize() {
    this.scene.size = {
      width: Math.floor(window.innerWidth),
      height: Math.floor(window.innerHeight),
    };
  }
}

function awake() {
  window.controller = new MainController(document.body);
}

// class Main {
//   constructor(container) {
//     this.container = container;

//     this.loaded();
//     this.button = this.setup_button();
//   }

//   loaded() {
//     console.log("loaded");
//     const scene = new CakeScene();
//     scene.element.style.display = "none";

//     this.scene = scene;
//     this.container.appendChild(scene.element);
//   }

//   setup_audio() {
//     const audioPlayer = document.getElementsByTagName("audio")[0];
//     audioPlayer.addEventListener("play", () => {
//       this.buttonloadingElement.parentNode.removeChild(loadingElement);

//       scene.element.classList.add("cue-in");
//       scene.element.style.display = "block";

//       document.title = "Cake!";
//     });
//   }

//   setup_button() {
//     const button = document.createElement("button");
//     button.textContent = "Trust Me";
//     button.addEventListener("click", (event) => {
//       button.parentElement.removeChild(button);

//       this.start_scene();
//     });

//     this.container.appendChild(button);
//   }

//   start_scene() {
//     console.log("clicked");
//   }
// }

// function awake() {
//   window.controller = new Main(document.body);
// }

document.addEventListener("DOMContentLoaded", awake);
