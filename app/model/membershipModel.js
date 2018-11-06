'use strict';
var db = require('./database.js');

var Membership = function(membership) {
	this.IDAtleta = membership.IDAtleta;
	this.IDAnnoSportivo = membership.IDAnnoSportivo;
	this.Importo = membership.Importo;
	this.DataInizio = membership.DataInizio;
	this.DataFine = membership.DataFine;
}

const getAllMembershipsQuery = "SELECT * FROM Elenco_Tesseramenti";

Membership.getAllMemberships = (result) => {
	db.query(getAllMembershipsQuery, (err,res) => {
		if(err){
			res.send(err)
			console.log(err,null)
		}
		else {
			console.log(res)
			result(null,res)
		}
	})
}

Membership.getAllMembershipsForAnAthlet = (IDAthlete, result) => {
	db.query(getAllMembershipsQuery + " WHERE IDAtleta = ? ", IDAthlete, (err, res) => {
		if(err){
			res.send(err);
			console.log(err,null);
		}
		else{
			console.log(res);
			result(null,res);
		}
	})
}

Membership.registerNewMembership = (new_membership, result) => {

	var formattedArray = new Array;
	for (const prop in new_membership){
		if(typeof(new_membership[prop]) === 'undefined'){
			formattedArray.push = null;
		}
		else{
			formattedArray.push(new_membership[prop]);
		}
	}
	console.log(formattedArray);

	db.query("CALL TeAt_RegistraTesseramento( ? );",[formattedArray], (err,res) => {
		if (err){
			console.log("error",err);
			result(err,null);
		}
		console.log("Inserted Reminder ID : " + res.insertId);
		result(null,res.insertId);
	})
}

Membership.getAMembership = (IDAthlete, IDMembership, result) => {	
	db.query("SELECT * FROM Elenco_Tesseramenti ET WHERE ET.IDAtleta = ? AND ET.IDTesseramentoAtleta = ?",
			[IDAthlete,IDMembership],
			(err,res) => {
				if(err){
					console.log("error", err);
					result(err, null);
				}
				else{
					console.log(res);
					result(null,res);
				}
			} )
}

Membership.updateAMembership = (IDAthlete, IDMembership, new_membership, result) => {
	db.query("UPDATE TesseramentoAtleta SET ? WHERE IDTesseramentoAtleta = ?",
			[new_membership, IDMembership],
			(err,res) => {
				if(err){
					console.log("err",err);
					result(err,null);
				}
				else {
					result(null,res);
				}
			})
}

Membership.deleteAMembership = (IDAthlete, IDMembership, result) => {
	db.query("DELETE FROM TesseramentoAtleta WHERE IDTesseramentoAtleta = ?",
			IDMembership,
			(err,res) => {
				if(err){
					console.log("err",err);
					result(err,null);
				}
				else {
					result(null,res);
				}
			}
	)
}

module.exports = Membership;