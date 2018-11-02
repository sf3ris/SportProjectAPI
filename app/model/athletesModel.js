'use strict';
var db = require('./database.js');

//Athlete Object Constructor
var Athlete = function(athlete) {
	this.Nome = athlete.Nome;
	this.Cognome = athlete.Cognome;
	this.DataNascita = athlete.DataNascita;
	this.LuogoNascita = athlete.LuogoNascita;
	this.CodiceFiscale = athlete.CodiceFiscale;
	this.Indirizzo = athlete.Indirizzo;
	this.Civico = athlete.Civico;
	this.CAP = athlete.CAP;
	this.Citta = athlete.Citta;
	this.Provincia = athlete.Provincia;
	this.Sesso = athlete.Sesso;
	this.Telefono = athlete.Telefono;
	this.Email = athlete.Email;
};

// Retrieve all athletes from the DB
Athlete.getAllAthletes =  (result) => {
	//Retrieve Athletes from a View : Elenco_Atleti
	var getAllAthletesQuery = "SELECT * FROM Elenco_Atleti;"
	db.query(getAllAthletesQuery, (err,res) => {
		if(err){
			console.log("Error",err);
			result(null,err);
		}
		else{
			console.log('athletes', res);
			result(null,res)
		}
	}); 
};

//Insert a new athlete
Athlete.createNewAthlete = (newAthlete,result) => {
	db.query("INSERT INTO Iscritto SET ?", newAthlete, (err,res) => {
		if(err){
			console.log("error",err);
			result(err,null);
		}
		else{
			db.query("INSERT INTO Atleta SET IDIscritto = ?", res.insertId, (err,res) => {
				if (err){
					console.log("error",err);
					result(err,null);
				}
				console.log("Inserted Athlete ID : " + res.insertId);
				result(null,res.insertId);
			})
		}
	})
}

//Retrieve a single athlete
Athlete.getAnAthlete = (IDAthlete,result) => {
	var getAnAthleteQuery = "SELECT * FROM Elenco_Atleti WHERE IDAtleta = " + IDAthlete;
	db.query(getAnAthleteQuery, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else{
			console.log('athletes', res);
			result(null,res);
		}
	})
}

Athlete.updateAnAthlete = (IDAthlete, newAthlete,result) => {

	db.query("UPDATE Iscritto INNER JOIN Atleta ON Iscritto.IDIscritto = Atleta.IDIscritto SET ? WHERE  Atleta.IDAtleta = ?", [newAthlete, IDAthlete], (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}

Athlete.removeAnAthlete = (IDAthlete, result) => {

	db.query("DELETE FROM Atleta WHERE IDAtleta = ?", IDAthlete, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}

Athlete.getAllCertificates = (IDAthlete, result) => {
	db.query("SELECT * FROM Elenco_Certificati WHERE IDAtleta = ?", IDAthlete, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}

Athlete.getAllAppointments = (IDAthlete,result) => {
	db.query("SELECT * FROM Elenco_Appuntamenti WHERE IDAtleta = ?", IDAthlete, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}



module.exports = Athlete;