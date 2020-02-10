
export default class Joke {

    constructor(data) {
        this.id = data.id
        this.type = data.type
        this.setup = data.setup
        this.punchline = data.punchline
    }

    get Template() {
        return `
    <div class="col-12 text-center" id="category">Category: ${this.type}</div>
    <div class="col-12 text-center" id="text-area">${this.setup}</div>
    <div class="col-12 button-row">
    <button onclick="app.jokeController.getAnswer(${this.punchline})">Punchline</button>
    <button onclick="app.jokeController.newJoke()">Skip</button>
    </div>
    `
    }


}