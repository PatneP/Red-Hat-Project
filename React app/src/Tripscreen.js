import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Trip from './Trip';
import Register from './Register';
class Tripscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      tripscreen:[],
      tripmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var tripscreen=[];
    tripscreen.push(<Trip parentContext={this} appContext={this.props.parentContext}/>);
    var tripmessage = "Not registered yet, Register Now";
    this.setState({
                  tripscreen:tripscreen,
                  tripmessage:tripmessage
                    })
  }
  render() {
    return (
      <div className="tripscreen">
        {this.state.tripscreen}
        <div>
          {this.state.tripmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Tripscreen;
