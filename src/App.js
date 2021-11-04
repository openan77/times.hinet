import './App.css';
import React from 'react';

import SimpleTabs from './component/tabs/tabs.component';
import {HealthData,FinanceData,EntertainmentData,PopData} from './data';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      health:'',
      finance:'',
      entertainment:'',
      pop:''
    }
  };

  componentDidMount(){
    this.setState(
      {
        health:HealthData,
        finance:FinanceData,
        entertainment:EntertainmentData,
        pop:PopData
      }
    )
  }
  
  render(){
    return(
      <SimpleTabs data={this.state} />
    )
  }
}


export default App;
