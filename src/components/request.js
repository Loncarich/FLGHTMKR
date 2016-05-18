import React from 'react';


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
        console.log(e.target.value);
	  }

	onTerminalChange(event) {
		this.setState({terminal: event.target.value});
		console.log(event.target.value);
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
	  	<div>
          <div>
            <button onClick= {(e)=> this.pAll(this.p1, this.p2, this.state.terminal, this.state.address, this.props.fetchTSA.bind(this), this.props.fetchGoogle.bind(this), this.props.sortData.bind(this))}>Get Total Travel Time</button>
          </div>
          <div>
              <input 
       	      className="form-control" 
              placeholder="Address" 
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