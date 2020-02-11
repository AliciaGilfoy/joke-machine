import store from "../store.js";
import Joke from "../Models/Joke.js"

let lameVote = 0
let funnyVote = 0
// @ts-ignore
const _api = axios.create({
  baseURL: "https://official-joke-api.appspot.com/",


});

class JokesService {
  voteLame() {
    lameVote++
    document.getElementById("lame-counter").innerText = lameVote.toString()

  }
  voteFunny() {
    funnyVote++
    document.getElementById("funny-counter").innerText = funnyVote.toString()
  }
  getAnswer() {
    let joke = store.State.jokes
    let answer = joke.punchline
    let jokeElem = document.getElementById("jokeArea")
    jokeElem.innerHTML = `<h2 class="answer"> ${answer} </h2>
    <div class="vote-row"><button class="btn btn-success rounded-circle vote-button" onclick="app.jokesController.voteFunny()"><i
    class="far fa-grin-squint-tears"></i></button>
    <button class="btn btn-danger rounded-circle vote-button" onclick="app.jokesController.voteLame()"><i
    class="far fa-frown"></i></button></div>
    <button class="btn btn-danger" onclick="app.jokesController.getApiJoke()">Next Joke!</button>`
  }

  getApiJoke() {
    _api.get("random_joke")
      .then(res => {
        let newJoke = res.data
        let joke = new Joke(newJoke)
        store.commit("jokes", joke)
      })
  }

}

const service = new JokesService();
export default service;
