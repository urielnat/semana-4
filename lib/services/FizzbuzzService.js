class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        explorer.trick = explorer.score

        if (explorer.score% 3 === 0){
            explorer.trick = "FIZZ";

        }if(explorer.score%5 === 0){
           explorer.trick = (explorer.trick=='FIZZ')?'FIZZBUZZ' :'BUZZ';

        }
        return explorer;
    }
}

module.exports =FizzbuzzService