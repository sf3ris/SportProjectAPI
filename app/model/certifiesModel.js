'use strict';
var db = require('./database.js');

//Certifies Object Constructor
var Certificate = function(certificate) {
	this.IDAtleta = certificate.IDAtleta;
	this.DataInizio = certificate.DataInizio;
	this.DataFine = certificate.DataFine;
	this.IDAppuntamento = certificate.IDAppuntamento;
	this.IDAnnoSportivo = certificate.IDAnnoSportivo;
	this.Esito = certificate.Esito;
	this.Note = certificate.Note
}

Certificate.registerNewCertificate = (newCertificate,result) => {

	var formattedArray = new Array;
	for(const prop in newCertificate){
		if(typeof(newCertificate[prop]) === 'undefined'){
			formattedArray.push(null);
		}
		else{
			formattedArray.push(newCertificate[prop]);
		}
	}
	console.log(formattedArray)

	db.query("CALL CeAt_RegistraCertificato( ? )", [formattedArray], (err,res) => {
		if (err){
			console.log("error",err);
			result(err,null);
		}
		console.log("Inserted Certificate ID : " + res.insertId);
		result(null,res.insertId);
	})
}

Certificate.getAllCertificates = (result) => {
	db.query("SELECT * FROM Elenco_Certificati ORDER BY IDCertificato", (err,res) => {
		if(err){
			console.log("Error", null);
			result(err, null);
		}
		else{
			console.log(res);
			result(null,res);
		}
	});
}


module.exports = Certificate;