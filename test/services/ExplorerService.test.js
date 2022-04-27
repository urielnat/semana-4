const ExplorerService = require('./../../lib/services/ExplorerService')
const reader = require('./../../lib/utils/Reader')

const explorers = reader.readJsonFile('./explorers.json')


describe('Pruebas de unidad servicio explorer service',()=>{
    test('1.- prueba funcion filterByMision',()=>{

        filtro=ExplorerService.filterByMission(explorers, "node");
        expect(filtro).not.toBeUndefined()
        expect(['java','JAVA']).toEqual(
            expect.not.arrayContaining(filtro.map((explorer) => explorer.mission)),
          );
        expect(['node']).toEqual(
            expect.arrayContaining(filtro.map((explorer) => explorer.mission)),
          );  
    }),
    test('2.- prueba funcion getAmountOfExplorersByMission',()=>{
        cantidad= ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(cantidad).not.toBeUndefined()
        expect(cantidad).toBe(10)

    }),
    test('3.- prueba funcion getExplorersUsernamesByMission',()=>{
        nombres= ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(nombres).not.toBeUndefined()

    })
})