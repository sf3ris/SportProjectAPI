var db = require('./database.js');

var Level = function(level) {
    this.Livello = level.Livello;
    this.Descrizione = level.Descrizione;
}

Level.getAllLevels = (result) => {
    db.query("SELECT L.IDLivello as value, L.Livello, L.Descrizione, Concat(L.Livello, ' - ', L.Descrizione) as label FROM Livello L", (err,res) => {
        if(err){
            result(null,err)
        }
        else{
            result(null,res);
        }
    });
};

module.exports = Level;