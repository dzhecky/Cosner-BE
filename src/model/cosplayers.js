const Pool = require('../config/db')


const getAllCosplayer = async () =>{
    console.log('this running');
    return new Promise((resolve, reject) => Pool.query (`SELECT * FROM cosplayers`, (err, res) =>{
        if(!err){
            return resolve(res)
        }else{
            reject(err)
        }
    }))
    
}

module.exports = {getAllCosplayer}