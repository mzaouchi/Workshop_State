import './App.css';
import React from 'react';
import Counter from './Components/Counter';

class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
  //     show : false,
  //     test : 'Moez'
  //   }
  // }

  state={
        show : false,
        test : 'Moez'
      }
  handleShow=()=> this.setState({...this.state,show : !this.state.show})
  render(){
    return(
      <div>
        <h1>WS State</h1>
        <button onClick={this.handleShow}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show  &&   <Counter test={this.state.test}/>
        }
      
      </div>
    )
  }
}

export default App;
