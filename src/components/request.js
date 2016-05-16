import React from 'react';


class Request extends React.Component {
  	constructor(props){
		super(props)
		this.state= {
		  address: '',
		  terminal: ''
		}
	}

	onAddressChange(e) {
	    this.setState({address: e.target.value});		  	

	  }

	onTerminalChange(e) {
		this.setState({terminal: e.target.value});
		console.log(e.target.value);
	}  

	render () {
	  return (
	  	<div>
          <div>
            <button >Calculate Time</button>
          </div>
          <div>
            <input  
		      placeholder="Address (No Aparment Numbers)" 
		      value= {this.state.address}
		      onChange={(e) => this.onAddressChange(e)} />
          </div>
          <div>
            <input 
       	      className="form-control" 
              placeholder="Terminal Number (Integer or TBIT for Tom Bradley)" 
       	      value= {this.state.terminal}
   		      onChange={(e) => this.onTerminalChange(e)} />            
          </div>
        </div>

	  	);
	}
	  

};

export default Request;