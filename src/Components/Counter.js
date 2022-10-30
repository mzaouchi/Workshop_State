import React from "react"

class Counter extends React.Component{
    constructor(props){
        super()
        this.state ={
            count : 0,
            textP : ''
        }
        console.log('Initialisation Constructor')
    }
   componentDidMount(){
        console.log('Mount')
   }

   componentDidUpdate(){
        console.log('Update')
   }

   componentWillUnmount(){
        console.log('Unmount')
   }
    increment=()=> this.setState({...this.state,count : this.state.count+1})
    decrement=()=> this.state.count>0 && this.setState({...this.state,count : this.state.count-1})
    render(){
        console.log('Render')
        // const {test} = this.props
        return(
            <div>
                <h2>Counter Component</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <br/>
                <input type='text' onChange={(e)=> this.setState({...this.state,textP : e.target.value})}/>
                <h3>{this.state.textP}</h3>
                {/* <h4>{test}</h4> */}
                <h4>{this.props.test}</h4>
            </div>
        )
    }
}


export default Counter