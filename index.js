const express = require('express')
const Router = require('./src/router')
const app = express()




app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json({'message' : 'app success running'})
})

app.use(Router)

app.listen(3000, ()=>{
    console.log('success running on port 3000');
    
})








// let users = [
//     {'id': 1, 'name': 'Roselewis'},
//     {'id': 2, 'name': 'Omi'},
//     {'id': 3, 'name': 'Thania'}
// ]
// app.get('/users/:id', (req, res) => {
//     let id = req.params.id
//     let user;
//     users.forEach((item => {
//         if(item.id == id){
//             user = item
//         }
//     }))

//     if(!user){
//         res.status(404).json({message: 'cosplayer not found!'})
//     }
//     console.log('success get id ', id);
//     res.status(200).json({message : 'success get data cosplayer', user})
// })



// app.post('/users', (req, res) => {
//     let {id, name} = req.body
//     users = [...users, {'id':parseInt(id), name}]
    
//     res.json({'message': 'success add coser'})
    
// })

// app.put('/users/:id', (req, res) => {
//     let id = req.params.id
//     let {name} = req.body
//     let user;

//     let new_cosp = users.map((item =>{
//         if(item.id == id){
//             item.name = name
//             user = item
//             return item
//         }else{
//             return item
//         }
//     }))
    
//     if(!user){
//         res.status(404).json({message: 'failed update data cosplayer not found!'})
//     }
//     res.json({'message': 'success update coser' , new_cosp})
    
// })

// app.delete('/users/:id', (req, res) => {
//     let id = req.params.id
//     let user;
//     let new_cosp = []
//     users.forEach((item =>{
//         if(item.id == id){
//             user = item
//         }else{
//             new_cosp = [...new_cosp, item]
//         }
//     }))
    
//     if(!user){
//         res.status(404).json({message: 'failed delete data cosplayer not found!'})
//     }
//     res.json({'message': `success delete coser ${user.name}` , new_cosp})
    
// })