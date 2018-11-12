'use strict';
var db = require('./database.js');

var Payment = function(payment) {
	this.IDTesseramentoAtleta = payment.IDTesseramentoAtleta;
	this.IDScadenzaRataTesseramento = payment.IDScadenzaRataTesseramento;
	this.Importo = payment.Importo;
	this.Data = payment.Data;
	this.Tipo = payment.Tipo;
};

const getAllPaymentsQuery = "SELECT * FROM Elenco_PagamentiTesseramento EPT ";

Payment.getAllPayments = (result) => {
    db.query(getAllPaymentsQuery, (err,res) => {
        if(err){
			res.send(err);
			console.log(err,null);
		}
		else {
			console.log(res);
			result(null,res);
		}
    });
};

Payment.GetAllPaymentsForAnAthlete = (IDAthlete,result) => {
	
	db.query(getAllPaymentsQuery + "WHERE EPT.IDAtleta = ?", IDAthlete, (err,res) => {
		if(err){
			res.send(err);
			console.log(err,null);
		}
		else {
			console.log(res);
			result(null,res);
		}
	});
};

Payment.GetAllPaymentsForAMembership = (IDMembership,IDAthlete, result) => {

	db.query(getAllPaymentsQuery + "WHERE EPT.IDTesseramentoAtleta = ? AND EPT.IDATleta = ?", [IDMembership, IDAthlete], (err,res) => {
		if(err){
			res.send(err);
			console.log(err.null);
		}
		else{
			console.log(res);
			result(null,res);
		}
	});
};

Payment.GetASinglePayment = (IDPayment, result) => {

	db.query(getAllPaymentsQuery + "WHERE EPT.IDPagamentoTesseramentoAtleta = ?", IDPayment, (err,res) => {
		if(err){
			res.send(err);
			console.log(err.null);
		}
		else{
			console.log(res);
			result(null,res);
		}
	});
};

Payment.InsertNewPayment = (new_payment, result) => {

	db.query("INSERT INTO PagamentoTesseramentoAtleta Set ? ", new_payment, (err,res) => {
		if(err){
			res.send(err);
			console.log(err.null);
		}
		else{
			console.log(res);
			result(null,res);
		}
	});

};

Payment.updateAPayment = (new_payment,IDPayment,result) => {

	db.query("UPDATE PagamentoTesseramentoAtleta SET ? WHERE IDPagamentoTesseramentoAtleta = ?", [new_payment, IDPayment], (err,res) => {
		if(err){
			res.send(err);
			console.log(err.null);
		}
		else{
			console.log(res);
			result(null,res);
		}
	});
};


Payment.DeleteAPayment = (IDPayment, result) => {

	db.query("DELETE FROM PagamentoTesseramentoAtleta WHERE IDPagamentoTesseramentoAtleta = ?", IDPayment, (err,res) =>{
		if(err){
			res.send(err);
			console.log(err.null);
		}
		else{
			console.log(res);
			result(null,res);
		}
	});

};



module.exports = Payment;