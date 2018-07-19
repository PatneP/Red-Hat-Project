import React, { Component } from 'react';
import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Trip from './Trip';
import img from './img.png';
import './App.css';

injectTapEventPlugin();

class App extends Component {
 constructor(props){
    super(props);
    this.state={
      trippage: [],
      uploadScreen:[]
	
    }
  }
  componentWillMount(){
    var trippage =[];
    trippage.push(<Trip parentContext={this}/>);
    this.setState({
                  trippage:trippage
                    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
	  <img src={img} className="App-img" width="70" alt="img" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

	{this.state.trippage}
        {this.state.uploadScreen}
	
      </div>
    );
  }

}

export default App;
