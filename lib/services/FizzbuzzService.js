class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        explorer.trick = explorer.score;

        if (explorer.score% 3 === 0){
            explorer.trick = "FIZZ";

        }if(explorer.score%5 === 0){
            explorer.trick = (explorer.trick=="FIZZ")?"FIZZBUZZ" :"BUZZ";

        }
        return explorer;
    }
    static applyValidationInNumber(number){
        let trick = number;

        if (number% 3 === 0){
            trick = "FIZZ";

        }if(number%5 === 0){
            trick = (trick=="FIZZ")?"FIZZBUZZ" :"BUZZ";

        }
        return trick;
    }
}

module.exports =FizzbuzzService;