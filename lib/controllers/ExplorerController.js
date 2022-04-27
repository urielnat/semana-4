const reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
// const FizzbuzzService = require("./../services/FizzbuzzService");
const explorers =reader.readJsonFile("./explorers.json");


class ExplorerController{
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(explorers,mission);

    }
    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);

    }
    static getExplorersAmonutByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission);

    }
}

module.exports = ExplorerController;