import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

 class MyCounter extends Component {
constructor(){
    super();
    this.state={
        count:0,
    }
}

allClicksCounter = () =>{
    this.setState((state) =>{
        return {count:state.count+1}
    })
}



  render() {
    let even;
    if(this.state.count%2==0){
        even=this.state.count;
    }else{
        even=this.state.count-1
    }




    return (
      <div>
        <button onClick={this.allClicksCounter}>Click here</button>
        <CounterDisplayer countVal={this.state.count}/>
        <EvenCounterDisplayer evenCount={even}/>
      </div>
    )
  }
} 
export default MyCounter
