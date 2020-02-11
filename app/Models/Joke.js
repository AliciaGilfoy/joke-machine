
export default class Joke {

    constructor(data) {
        this.id = data.id
        this.type = data.type
        this.setup = data.setup
        this.punchline = data.punchline

    }

    get Template() {
        return `
    <div class="col-12 text-center h5 category" id="category">Category: '${this.type}'</div>
    <div class="col-12 text-center h3 joke" id="text-area">'${this.setup}'</div>
    <div class="col-12 button-row">
    <button class="btn btn-warning" onclick="app.jokesController.getAnswer()">Punchline</button>
    <button class="btn btn-danger" onclick="app.jokesController.getApiJoke()">Skip</button>
    </div>
    `
    }


}