import JokesController from "./Controllers/JokesController.js";

class App {
  jokesController = new JokesController();
}

window["app"] = new App();
