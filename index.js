const ExplorerController = require("./lib/controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});


app.get("/v1/explorers/:mission", (request, response) => {
    const query = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(query);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const query = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(query);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const query = request.params.mission;
    const explorersUsernamesInMission = ExplorerController.getExplorersUsernamesByMission(query);
    response.json({mission: request.params.mission,explorers: explorersUsernamesInMission});
});

app.get("/v1/fizzbuzz/:number", (request, response) => {
    const query = request.params.number;
    const trick = ExplorerController.getTrick(query);
    response.json({score: query, trick: trick});
});