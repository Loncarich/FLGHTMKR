import React from 'react';
import ReactDOM from 'react-dom';
import Request from './request.js';
import Result from './result.js';
import $ from 'jquery';
import TSA from './TSACheckpointData.js';


class App extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			totalTime: '',
			tsaTime: '',
			driveTime: '',
			lat: 33.9485094,
			lng: -118.3995575
		}
	}
    
    fetchTSA(terminal, callback){
  
     $.ajax({
	 url: '/tsa',
	 dataType: 'json',
	 type: 'GET',
	 success: function onSuccess(resp){

       callback(resp, terminal);
			},
	 error: function onError(jq,statusText,errText){
       console.log("Error");
	    },	 
   });
     
};
   fetchGoogle(address, callback){
   	     $.ajax({
   		 url: '/google',
   		 data: address,
   		 dataType: 'text',
   		 type: 'POST',
   		 success: function onSuccess(resp){
   		 	console.log('Success inside Google', resp);
   		 	console.log(resp);
   	        callback(resp);
   				},
   		 error: function onError(jq,statusText,errText){
   	       console.log("Error");
   		    },	 
   	   });
   }

   sortData(data, terminal){
     var waitTimes= data[0].WaitTimes;
     for (var i= 0; i< waitTimes.length; i++){
       if (waitTimes[i].CheckpointIndex == terminal){   
         this.setState({tsaTime: ((parseInt(waitTimes[i].WaitTimeIndex, 10) -1) * 10) +' Minutes'});
       	  break;
       	}
        else if (i === waitTimes.length -1){
          this.setState({tsaTime: 20});
        }
      }
      var data= JSON.parse(data[1]);
      this.setState({driveTime: parseInt(data.routes[0].legs[0].duration.text, 10) +' Minutes'});
      this.setState({totalTime: (parseInt(this.state.driveTime, 10) + parseInt(this.state.tsaTime,10)) + ' Minutes'});

   }

	render () {
		return (
	        <div>
	          <div class="page-header">
	            <h1>FLGHTMKR</h1>
	          </div>
	          <div className="col-md-6">
	            <Request fetchTSA= {this.fetchTSA.bind(this)} fetchGoogle= {this.fetchGoogle.bind(this)} sortData= {this.sortData.bind(this)}/>
	          </div>
	          <div className="col-md-6">
	            <Result tsaTime= {this.state.tsaTime} driveTime= {this.state.driveTime} totalTime= {this.state.totalTime} />
	          </div>
	          
	            
	          
	        </div>
		);
	}
};

export default App;