import React from 'react';

export default class PetList2 extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            pets: props.pets,
            count: props.pets.length,
            inputValue: ""
        }
    }

    handleInputChange=(event)=>{
        this.setState({...this.state, inputValue: event.target.value});
    }

    addPet=()=>{
        let copy = [...this.state.pets];
        copy.push(this.state.inputValue);
        this.setState({...this.state, pets: copy, count: copy.length});
    }

    render(){
        return (
            <div>
            <input type="text" value={this.state.inputValue} onChange={(event)=>this.handleInputChange(event)}></input>
            <button onClick={this.addPet}>Add Pet</button>
            <ul>
            {this.state.pets.map((item)=>{
                return <li>{item}</li>;
            })}
            </ul>
            <label>{this.state.count}</label>
            </div>
        );
    }
}