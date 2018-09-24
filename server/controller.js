
let planets=[];
let characters=[];
let ships=[];

module.exports = {
    getItem:(req,res)=>{
        res.status(200).send(planets);
    },
    addItem:(req,res)=>{},
    updateItem:(req,res)=>{},
    deleteItem:(req,res)=>{},
    
}