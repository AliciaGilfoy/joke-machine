import JokesService from "../Services/JokesService.js";
import store from "../store.js";


//Private
function _draw() {
  console.log(6)
  let jokes = [store.State.jokes]
  let jokeElem = document.getElementById("jokeArea")
  let template = ""

  jokes.forEach(jo => {
    template += jo.Template
  })

  jokeElem.innerHTML = template

}

//Public
export default class JokesController {
  constructor() {
    store.subscribe("jokes", _draw);
  }

  getApiJoke() {
    JokesService.getApiJoke()
  }

  getAnswer() {
    JokesService.getAnswer()
  }

  voteFunny() {
    JokesService.voteFunny()
  }

  voteLame() {
    JokesService.voteLame()
  }

}
