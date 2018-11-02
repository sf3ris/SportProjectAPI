'use strict';
var db = require('./database.js');

//associate Object Constructor
var Associate = function(associate) {
	this.Nome = associate.Nome;
	this.Cognome = associate.Cognome;
	this.DataNascita = associate.DataNascita;
	this.LuogoNascita = associate.LuogoNascita;
	this.CodiceFiscale = associate.CodiceFiscale;
	this.Indirizzo = associate.Indirizzo;
	this.Civico = associate.Civico;
	this.CAP = associate.CAP;
	this.Citta = associate.Citta;
	this.Provincia = associate.Provincia;
	this.Sesso = associate.Sesso;
	this.Telefono = associate.Telefono;
	this.Email = associate.Email;
};

// Retrieve all associates from the DB
Associate.getAllAssociates =  (result) => {
	//Retrieve associates from a View : Elenco_Atleti
	var getAllassociatesQuery = "SELECT * FROM Elenco_Soci;"
	db.query(getAllassociatesQuery, (err,res) => {
		if(err){
			console.log("Error",err);
			result(null,err);
		}
		else{
			console.log('associates', res);
			result(null,res)
		}
	}); 
};

//Insert a new associate
Associate.createNewAssociate = (newAssociate,result) => {
	db.query("INSERT INTO Iscritto SET ?", newAssociate, (err,res) => {
		if(err){
			console.log("error",err);
			result(err,null);
		}
		else{
			db.query("INSERT INTO Socio SET IDIscritto = ?", res.insertId, (err,res) => {
				if (err){
					console.log("error",err);
					result(err,null);
				}
				console.log("Inserted Associate ID : " + res.insertId);
				result(null,res.insertId);
			})
		}
	})
}

//Retrieve a single associate
Associate.getAnAssociate = (IDAssociate,result) => {
	var getAnAssociateQuery = "SELECT * FROM Elenco_Soci WHERE IDSocio = " + IDAssociate;
	db.query(getAnAssociateQuery, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else{
			console.log('Associates', res);
			result(null,res);
		}
	})
}

Associate.updateAnAssociate = (IDAssociate, newAssociate,result) => {

	db.query("UPDATE Iscritto INNER JOIN Socio ON Iscritto.IDIscritto = Socio.IDIscritto SET ? WHERE  Socio.IDSocio = ?", [newAssociate, IDAssociate], (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}

Associate.removeAnAssociate = (IDAssociate, result) => {

	db.query("DELETE FROM Socio WHERE IDSocio = ?", IDAssociate, (err,res) => {
		if(err){
			console.log("err",err);
			result(err,null);
		}
		else {
			result(null,res);
		}
	})
}





module.exports = Associate;