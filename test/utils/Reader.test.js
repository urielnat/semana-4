const reader = require('./../../lib/utils/Reader')

describe('Pruebas de unidad archivo lectura Json',()=>{
    test('1.- prueba mandando el path correcto',()=>{
        const explorers = reader.readJsonFile('./explorers.json')
        expect(explorers).not.toBeUndefined()
    }),
    test('2.- prueba mandando el path o archivo incorrecto',()=>{
        const explorers = reader.readJsonFile('./explorersASd.json')
        expect(explorers.error).toMatch(/la ruta o el archivo son incorrectos/)
    })
})