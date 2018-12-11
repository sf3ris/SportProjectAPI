'use strict'

//Import Appointment Model
var Appointment = require('../model/appointmentsModel')

exports.get_all_appointments = (req,res) => {
    Appointment.getAllAppointments((err,response) => {
        if(err) res.send(err);
		res.json(response);
    })
}