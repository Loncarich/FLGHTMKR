import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { grey400, white } from 'material-ui/styles/colors';

const styles = {
  requestContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputContainer: {
    flex: 2,
    margin: 1
  },
  inputStyle: {
    width: 400,
    height: 40,

    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: 15
  }
}
class Request extends React.Component {
  	constructor(props){
		super(props)
		this.state= {
		  address: '',
		  terminal: '',
      searchString: ''
		}
	}

  onAddressChange(e) {
	    this.setState({address: e.target.value});
	}

	onTerminalChange(event) {
		this.setState({terminal: event.target.value});
	}

  fetchTSA3(){
  	this.props.fetchTSA(this.state.terminal);
  	this.setState({terminal: ''});
  }

  p1(terminal, callback){
    return new Promise (function(resolve, reject){
      callback(terminal, resolve);
    });
  }

  p2(address, callback){
  	return new Promise(function(resolve, reject){
        callback(address, resolve);
  	});
  }

  pAll(a, b, terminal, address, cb1, cb2, cb3){
    Promise.all([a(terminal, cb1), b(address, cb2)]).then(function(value){
    	cb3(value, terminal);
    });
  }



	render () {
	  return (
	  	<div style= {styles.requestContainer}>
        <div style= {styles.inputContainer}>
            <input
     	      style= {styles.inputStyle}
            placeholder="Address"
     	      value= {this.state.address}
  		      onChange={(e) => this.onAddressChange(e)} />
        </div>
        <div style= {styles.inputContainer}>
          <input
     	      style= {styles.inputStyle}
            placeholder="Terminal Number (Integer or TBIT for Tom Bradley)"
     	      value= {this.state.terminal}
  		      onChange={(e) => this.onTerminalChange(e)} />
        </div>
        <div style= {styles.inputContainer}>
          <RaisedButton backgroundColor= {grey400}
                        label= {'Get Total Travel Time'}
                        labelColor= {white}
                        style= {styles.buttonStyle}
                        onClick= {(e)=> this.pAll(this.p1, this.p2, this.state.terminal, this.state.address, this.props.fetchTSA.bind(this), this.props.fetchGoogle.bind(this), this.props.sortData.bind(this))}
                        >
          </RaisedButton>
        </div>
      </div>
	  	);
	}
};

export default Request;