const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const ctrl = require('./controller');

const app = express();

app.use(bodyParser.json());

let ships=[];
let characters=[];
let planets=[];


//planets
axios.get('https://swapi.co/api/planets')
     .then(res=>{
        //  console.log(res)
         planets=res.data.results;
     })

app.get('/planets',(req,res)=>{
    res.status(200).send(planets)
})

app.post('/planets',(req,res)=>{
    // console.log(planets);
    planets.push({name:req.body.item});
    res.status(200).send(planets);
})

app.delete('/planets/:index', (req,res)=>{
   planets.splice(req.params.index,1);
   res.status(200).send(planets); 
})

//starships
axios.get('https://swapi.co/api/starships')
     .then(res=>{
         ships=res.data.results
     })

app.get('/ships',(req,res)=>{
    res.status(200).send(ships)
})

app.post('/ships',(req,res)=>{
    ships.push({name:req.body.item})
    res.status(200).send(ships)
})

app.delete('/ships/:index',(req,res)=>{
    ships.splice(req.params.index,1);
    res.status(200).send(ships);
})


//characters
axios.get('https://swapi.co/api/people')
     .then(res=>{
         characters=res.data.results
     })

app.get('/characters',(req,res)=>{
    res.status(200).send(characters)
})

app.post('/characters',(req,res)=>{
    characters.push({name:req.body.item})
    res.status(200).send(characters)
})

app.delete('/characters/:index',(req,res)=>{
    characters.splice(req.params.index,1);
    res.status(200).send(characters);
})
     


//server info
let port=3005;
app.listen(port,()=> console.log(`Running on port ${port}`))