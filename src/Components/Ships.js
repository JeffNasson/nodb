import React, {Component} from 'react';
import axios from 'axios';
import Child from './Child'

export default class Ships extends Component{
    constructor(){
        super();
        this.state={
            ships:[],
            userInput:''
        }
        this.addShips=this.addShips.bind(this);
        this.handleInput=this.handleInput.bind(this);
        this.deleteShips=this.deleteShips.bind(this);
    }

    componentDidMount(){
        axios.get('/ships')
             .then((res)=>{
                 this.setState({ships:res.data})
             })
    }

    addShips(){
        let thisIsTheBody = {item:this.state.userInput}

        axios.post('/ships',thisIsTheBody)
             .then((res)=>{
                 this.setState({
                     ships:res.data,
                     userInput:''
                 })
             })
    }

    deleteShips(indexToDelete){
        axios.delete(`/ships/${indexToDelete}`)
             .then(res=>{
                 this.setState({
                     ships:res.data
                 })
             })
    }

    handleInput(event){
        this.setState({userInput:event.target.value})
    }

    render(){
        let newShips=this.state.ships.map((data,i)=>{
            return(
                <div className='ships' key={i}>
                    <h1>Model: {data.name}</h1>
                    <button onClick={()=>this.deleteShips(i)}>I can't shake him!</button>
                </div>
            )
        })
        return(
            <div>
                <input placeholder='Add A Ship' value={this.state.userInput} onChange={this.handleInput} />
                <Child method={this.addShips} buttonName='Add A Ship' />
               {newShips} 
            </div>
        )
    }
}

// componentDidMount(){
//     axios.get('/planets')
//          .then((res)=>{
//              this.setState({planets: res.data.results})
//             //  console.log(res);
//             //  console.log(this.state.planets);
//          })
// }


// render(){
//     console.log(this.state.planets)
//     let newPlanets=this.state.planets.map((data,i)=>{
//         console.log(data)
//         return (
//             <div className='planets' key={i}>
//                 <h1>{data.name}</h1>
//             </div>
//         )
//     })
    
//     return(
//         <div>
//             {newPlanets}
//         </div>
//     )
// }
// }