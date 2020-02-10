import store from "../store.js";
import Joke from "../Models/Joke.js"


// @ts-ignore
const _api = axios.create({
  baseURL: "https://official-joke-api.appspot.com/",


});

class JokesService {

  getApiJoke() {
    _api.get("random_joke")
      .then(res => {
        console.log(res.data)
        let newJoke = res.data
        let joke = new Joke(newJoke)
        store.commit("jokes", joke)
        console.log(store.State.jokes)
      })
  }

}

const service = new JokesService();
export default service;
