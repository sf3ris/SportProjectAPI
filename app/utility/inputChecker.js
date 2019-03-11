/* 
* Script for Int Input checking
*/

exports.parse_int_input = (res,integerToCheck, integerDescription) => {
	return new Promise((resolve,reject) => {
		if(!parseInt(integerToCheck)){
			reject("Please provide a valid integer");
		}
		else{
			resolve();
		}
	})
}
	