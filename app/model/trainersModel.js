'use strict';
var db = require('./database.js');

//trainer Object Constructor
var Trainer = function(trainer) {
	this.Nome = trainer.Nome;
	this.Cognome = trainer.Cognome;
	this.DataNascita = trainer.DataNascita;
	this.LuogoNascita = trainer.LuogoNascita;
	this.CodiceFiscale = trainer.CodiceFiscale;
	this.Indirizzo = trainer.Indirizzo;
	this.Civico = trainer.Civico;
	this.CAP = trainer.CAP;
	this.Citta = trainer.Citta;
	this.Provincia = trainer.Provincia;
	this.Sesso = trainer.Sesso;
	this.Telefono = trainer.Telefono;
	this.Email = trainer.Email;
};

// Retrieve all trainers from the DB
Trainer.getAllTrainers =  (result) => {
	//Retrieve trainers from a View : Elenco_Atleti
	var getAllTrainersQuery = "SELECT * FROM Elenco_Allenatori;"
	db.query(getAllTrainersQuery, (err,res) => {
		if(err){
			console.log("Error",err);
			result(null,err);
		}
		else{
			console.log('trainers', res);
			result(null,res)
		}
	}); 
};

//Insert a new trainer
Trainer.createNewTrainer = (newTrainer,idlivello,result) => {
	db.query("INSERT INTO Iscritto SET ?", newTrainer, (err,res) => {
		if(err){
			console.log("error",err);
			result(err,null);
		}
		else{
			db.query("INSERT INTO Allenatore SET IDIscritto = ?, IDLivello = ?", [res.insertId,idlivello] , (err,res) => {
				if (err){
					console.log("error",err);
					result(err,null);
				}
				console.log("Inserted Trainer ID : " + res.insertId);
				result(null,res.insertId);
			})
		}
	})
}

//Retrieve a single trainer
Trainer.getATrainer = (IDTrainer,result) => {
	var getATrainerQuery = "SELECT * FROM Elenco_Allenatori WHERE IDAllenatore = " + IDTrainer;
	db.query(getATrainerQuery, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else{
			console.log('Trainers', res);
			result(null,res);
		}
	})
}

Trainer.updateATrainer = (IDTrainer, newTrainer,result) => {

	db.query("UPDATE Iscritto INNER JOIN Allenatore ON Iscritto.IDIscritto = Allenatore.IDIscritto SET ? WHERE  Allenatore.IDAllenatore = ?", [newTrainer, IDTrainer], (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}

Trainer.removeATrainer = (IDTrainer, result) => {

	db.query("DELETE FROM Allenatore WHERE IDAllenatore = ?", IDTrainer, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}


module.exports = Trainer;