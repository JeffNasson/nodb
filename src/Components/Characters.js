import React, {Component} from 'react';
import axios from 'axios';
import Child from './Child'

export default class Characters extends Component{
    constructor(){
        super();
        this.state={
            characters: [],
            userInput:''
        }
        this.handleInput=this.handleInput.bind(this);
        this.addCharacter=this.addCharacter.bind(this);
        this.deleteCharacter=this.deleteCharacter.bind(this);
    }

    componentDidMount(){
        axios.get('/characters')
             .then((res)=>{
                 this.setState({characters:res.data})
             })
    }

    addCharacter(){
        let thisIsTheBody={item:this.state.userInput}

        axios.post('/characters',thisIsTheBody)
             .then(res=>{
                 this.setState({
                     userInput:'',
                     characters:res.data
                 })
             })
    }

    deleteCharacter(indexToDelete){
        axios.delete(`/characters/${indexToDelete}`)
             .then(res=>{
                 this.setState({
                     characters: res.data
                 })
             })
    }

    handleInput(event){
        this.setState({userInput:event.target.value})
    }

    render(){
        let newCharacters = this.state.characters.map((data,i)=>{
            return(
                <div className='characters' key={i}>
                    <h1>{data.name}</h1>
                    <button onClick={()=>this.deleteCharacter(i)}>I Will Break You</button>
                </div>
            )
        })
        return(
            <div>
                <input placeholder='Add A Character' value={this.state.userInput} onChange={this.handleInput} />
                <Child method={this.addCharacter} buttonName='Add A Character'/>
                {newCharacters}
            </div>
        )
    }
}


