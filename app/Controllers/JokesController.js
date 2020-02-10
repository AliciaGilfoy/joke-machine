import JokesService from "../Services/JokesService.js";
import store from "../store.js";


//Private
function _draw() {
  let jokes = store.State.jokes
  let template = ""
  Array.from(jokes).forEach(j => {
    template += j.Template
  })

  document.getElementById("joke-area").innerHTML = template

}

//Public
export default class JokesController {
  constructor() {
    store.subscribe("jokes", _draw);
  }

  getApiJoke() {
    JokesService.getApiJoke()
  }
}
