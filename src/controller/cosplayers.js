const {getAllCosplayer} = require('../model/cosplayers')

const CosplayersController = {
    getCosplayers : async (req, res) =>{
        let cosplayers = await getAllCosplayer()
        let coser = cosplayers.rows
        
        if(!coser){
            res.status(404).json({message: 'coser not found'})
        }

        res.status(200).json({message: 'succes get all data cosplayer', coser})
    }
}

module.exports = CosplayersController