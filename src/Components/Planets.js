import React, {Component} from 'react';
import axios from 'axios';
import Child from './Child'

export default class Planets extends Component{
    constructor(){
        super();
        this.state={
            planets:[],
            userInput:''
        }
        this.addPlanets=this.addPlanets.bind(this);
        this.handleInput=this.handleInput.bind(this);
        this.deletePlanets=this.deletePlanets.bind(this);
    }
    componentDidMount(){
        axios.get('/planets')
             .then((res)=>{
                 this.setState({planets: res.data})
                //  console.log(res);
                //  console.log(this.state.planets);
             })
    }

    addPlanets(){
        //this is an object with information we want to send to our server/api
        let thisIsTheBody = {item:this.state.userInput}

        //passing data to the api via the body object thisIsTheBody
        axios.post('/planets',thisIsTheBody)
             .then(res=>{
                 this.setState({
                     planets: res.data,
                     userInput:''
                 })
             })
    }

    deletePlanets(indexToDelete){
        axios.delete(`/planets/${indexToDelete}`)
             .then(res=>{
                 this.setState({
                     planets: res.data
                 })
             })
    }

    handleInput(event){
        this.setState({userInput:event.target.value})
    }


    render(){
        // console.log(this.state.planets)
        let newPlanets=this.state.planets.map((data,i)=>{
            // console.log(data)
            return (
                <div className='planets' key={i}>
                    <h1>{data.name}</h1>
                    {/* <h3>Population: {data.population}</h3> */}
                    <button onClick={()=>this.deletePlanets(i)}>Oh No The DeathStar!</button>
                </div>
            )
        })
        
        return(
            <div>
                <input placeholder='Add A Planet' value={this.state.userInput} onChange={this.handleInput} />
                <Child method={this.addPlanets} buttonName='Add a Planet' />
                {newPlanets}
            </div>
        )
    }
}