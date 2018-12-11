"use strict";

var db = require('./database.js');

var Deadline = function(deadline) {
	this.IDTesseramentoAtleta = deadline.IDTesseramentoAtleta;
	this.Importo = deadline.Importo;
	this.DataInserimento = deadline.DataInserimento;
    this.DataScadenza = deadline.DataScadenza;
    this.Mora = deadline.Mora;
};

const getAllDeadlinesQuery = "SELECT * FROM Elenco_ScadenzeTesseramento EST";


Deadline.getAllDeadlines = (result) => {

    db.query(getAllDeadlinesQuery, (err,res) => {
        if(err){
            console.log(null,err);
            res.send(err);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
};

Deadline.getDeadlinesForAthlete = (IDAthlete, result) => {

    db.query(getAllDeadlinesQuery + " WHERE EST.IDAtleta = ?",
            IDAthlete,
            (err,res) => {
                if(err){
                    console.log(null,err);
                    res.send(err);
                }
                else{
                    console.log(res);
                    result(null,res);
                }
            });
};

Deadline.getDeadlinesForMembership = (IDAthlete,IDMembership, result) => {

    db.query(getAllDeadlinesQuery + " WHERE EST.IDTesseramentoAtleta = ?",
            parseInt(IDMembership),
            (err,res) => {
                if(err){
                    console.log(null,err);
                    result(err);
                }
                else{
                    console.log(res);
                    result(null,res);
                }
            });
};

Deadline.insertNewDeadline = (new_deadline, result) => {
    db.query("INSERT INTO ScadenzaRataTesseramento SET ?", new_deadline, (err,res) => {
        if(err){
            console.log(null,err);
            result(err);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
};

Deadline.getADeadline = (IDDeadline, result) => {
    db.query(getAllDeadlinesQuery + " WHERE EST.IDScadenzaRataTesseramento = ?", IDDeadline, (err,res) => {
        if(err){
            console.log(null,err);
            result(err);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
};

Deadline.updateADeadline = (IDDeadline,new_deadline, result) => {
    db.query("UPDATE ScadenzaRataTesseramento SET ? WHERE IDScadenzaRataTesseramento = ?", [new_deadline,IDDeadline], (err,res) => {
        if(err){
            console.log(null,err);
            result(err);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
};

Deadline.deleteADeadline = (IDDeadline, result) => {
    db.query("DELETE FROM ScadenzaRataTesseramento WHERE IDScadenzaRataTesseramento = ?", IDDeadline, (err,res) => {
        if(err){
            console.log(null,err);
            result(err);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
};

Deadline.getDeadlinesState = (IDAthlete,result) => {

    GET_ATHLETES_DEADLINES_STATE = "SELECT * FROM Situazione_Scadenze_Tesseramenti_Atleti WHERE IDAtleta = ?";

    db.query(GET_ATHLETES_DEADLINES_STATE, IDAthlete, (err,rows) => {
        if(err) result(err,null);
        result(null,rows);
    })
}

Deadline.getMembershipDeadlinesState = (IDAthlete, IDMembership, result) => {

    let GET_ATHLETES_MEMBERSHIPS_DEADLINES_STATE_QUERY = "SELECT * FROM Situazione_Scadenze_Tesseramenti_Atleti WHERE IDAtleta = ? AND IDTesseramentoAtleta = ?";

    db.query(GET_ATHLETES_MEMBERSHIPS_DEADLINES_STATE_QUERY, [IDAthlete, IDMembership], (err,rows) => {
        if(err) result(err,null);
        result(null,rows);
    })

}

module.exports = Deadline;