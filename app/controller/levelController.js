var Level = require('../model/levelModel.js')

exports.get_all_levels = (req,res) => {
    console.log("controller OK")
    Level.getAllLevels((error,response) => {
        if(error){
			res.send(error);
			console.log('res',response);
		}
		res.send(response);
    })
}