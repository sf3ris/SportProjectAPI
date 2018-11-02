'use strict';
var db = require('./database.js');

//Certifies Object Constructor
var Certificate = function(certificate) {
	this.IDAtleta = certificate.IDAtleta;
	this.DataInizio = certificate.DataInizio;
	this.DataFine = certificate.DataFine;
	this.IDAppuntamento = certificate.IDAppuntamento;
	this.IDAnnoSportivo = certificate.IDAnnoSportivo;
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


module.exports = Certificate;