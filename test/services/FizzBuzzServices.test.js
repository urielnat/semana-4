const FizzbuzzService = require("./../../lib/services/FizzbuzzService");



describe("Pruebas de unidad servicio Fizzbuzz service",()=>{
    test("1.- prueba funcion filterByMision",()=>{


        const explorer1 = {name: "Explorer1", score: 1};
        const prueba1=FizzbuzzService.applyValidationInExplorer(explorer1);
        const comparacion1 ={name: "Explorer1", score: 1, trick: 1};
        // expect(prueba1).toEqual(expect.objectContaining(comparacion1))
        expect(prueba1).toEqual(comparacion1);

        const explorer3 = {name: "Explorer3", score: 3};
        const prueba2 =FizzbuzzService.applyValidationInExplorer(explorer3);
        const comparacion2 = {name: "Explorer3", score: 3, trick: "FIZZ"};
        expect(prueba2).toEqual(comparacion2);


        const explorer5 = {name: "Explorer5", score: 5};
        const prueba3 =FizzbuzzService.applyValidationInExplorer(explorer5); 
        const comparacion3 = {name: "Explorer5", score: 5, trick: "BUZZ"};
        expect(prueba3).toEqual(comparacion3);


        const explorer15 = {name: "Explorer15", score: 15};
        const prueba4 =FizzbuzzService.applyValidationInExplorer(explorer15); 
        const comparacion4 = {name: "Explorer15", score: 15, trick: "FIZZBUZZ"};
        expect(prueba4).toEqual(comparacion4);


        
    });
   
});