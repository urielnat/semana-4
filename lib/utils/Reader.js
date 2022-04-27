const fs = require("fs");



class Reader{
    static readJsonFile(path){
        let rowdata ={};
        try{

           rowdata  = fs.readFileSync(path);
        }catch(error){
            rowdata.error= 'la ruta o el archivo son incorrectos'
        }
        return (rowdata.error!=null)? rowdata: JSON.parse(rowdata);

    }
}

module.exports = Reader;
