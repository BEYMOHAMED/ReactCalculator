import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from './components/ClearButton';
import { BrowserRouter as Router, Route , Redirect } from 'react-router-dom';
import PasCalculator from './components/PasCalculator';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input:"",
      previousNumber:"",
      currentNumber:"",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({input: this.state.input + val });
  };

  addDecimal = val =>{
    if(this.state.input.indexOf(".") === -1){
      this.setState({ input: this.state.input + val});  
    }
  };

  addZeroToInput = val =>{
    if(this.state.input !== ""){
      this.setState({input: this.state.input + val })
    };
  };
  clearInput= () =>{
    this.setState({input:""});
  }
  add = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input:""});
    this.state.operator = "plus";
  };
  multiplate = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input:""});
    this.state.operator = "multy";
  };
  substract = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input:""});
    this.state.operator = "subs";
  };
  divide = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input:""});
    this.state.operator = "frag";
  };
  

  evaluate = ()=>{
    this.state.currentNumber = this.state.input;
    if(this.state.operator == "plus"){
      this.setState({
        input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
      })
    }else if(this.state.operator == "multy"){
      this.setState({
        input: parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
      })
  }else if(this.state.operator == "subs"){
    this.setState({
      input: parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
    })
}else if(this.state.operator == "frag"){
  this.setState({
    input: parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
  })
}
 }
    
  
  render(){
    return(
      <div className="App">
          <div className="calc-wraper">
              <div className="row">
                <Input>{this.state.input}</Input>
              </div>
              <div className="row">
                <Button onClick={this.addToInput}>7</Button>
                <Button onClick={this.addToInput}>8</Button>
                <Button onClick={this.addToInput}>9</Button>
                <Button onClick={this.divide}>/</Button>
              </div>
              <div className="row">
                <Button onClick={this.addToInput}>4</Button>
                <Button onClick={this.addToInput}>5</Button>
                <Button onClick={this.addToInput}>6</Button>
                <Button onClick={this.multiplate} >*</Button>
              </div>
              <div className="row">
                <Button onClick={this.addToInput}>1</Button>
                <Button onClick={this.addToInput}>2</Button>
                <Button onClick={this.addToInput}>3</Button>
                <Button onClick={this.add}>+</Button>
              </div>
              <div className="row">
                <Button onClick={this.addDecimal}
                >.</Button>
                <Button onClick={this.addZeroToInput}>0</Button>
                <Button onClick={this.evaluate}>=</Button>
                <Button onClick={this.substract}>-</Button>
                
              </div>
              <ClearButton onClick={this.clearInput}
              >Clear</ClearButton>
          </div>
      </div>
    )
  }
}

export default App;
