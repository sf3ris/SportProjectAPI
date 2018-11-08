/* 
* Script for Int Input checking
*/

exports.parse_int_input = (res,integerToCheck, integerDescription) => {
	if(!parseInt(integerToCheck)){
		res.status(400).send({
			error: true,
			message: "Please provide a valid " + integerDescription + " ID",
			requestedID : integerToCheck
		});
	}
}