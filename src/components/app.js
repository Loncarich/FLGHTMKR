import React from 'react';
import ReactDOM from 'react-dom';
import Request from './request.js';
import Result from './result.js';


class App extends React.Component {
	constructor(props){
		super(props)
		this.state= {
			totalTime: undefined,
			tsaTime: undefined,
			driveTime: undefined
		}
	}

	// fetchGoogle(address, terminal){
	  
 //        $.ajax({
	//       url: 'https://maps.googleapis.com/maps/api/directions/json?origin='+address+'&destination=place_id:ChIJsYC5DCyxwoARn4RMcIy9sSs&key=AIzaSyANP9kpB75a-eKRlvXSOlG7sLzC5ylsfyo',
	//       data: options,
	//  	  cache: false,
	//  	  dataType: 'json',
	//       type: 'POST',
	//       success: function onSuccess(resp){
	// 			this.setDriveTime.bind(this);
	// 			this.fetchTSA.bind(this, terminal, this.setTsaTime.bind(this));				
	// 		},
	//       error: function onError(jq,statusText,errText){
 //            reject();
 //             },
	 
 //     });
	// }

	// fetchTSA(terminal, callback) {
 //     $.ajax({
	//    url: 'http://apps.tsa.dhs.gov/MyTSAWebService/GetWaitTimes.ashx?ap=LAX&output=json',
	//    data: options,
	//    cache: false,
	//    dataType: 'json',
	//    type: 'GET',
	//    success: function onSuccess(resp){
	// 			callback(resp);
	// 	},
	//    error: function onError(jq,statusText,errText){
 //         console.log("Error");
 //        },
	 
 //    });
	// }

	// setDriveTime(resp){
	// 	this.setState({driveTime: parseInt(resp.routes[0].legs[0].duration.text, 10)})
	// }

	// setTsaTime(resp){
	// 	console.log('Inside setTSA ', resp)
	// 	this.setState({tsaTime: 4});
	// }

	render () {
		return (
        <div>
          FLGHTMKR
          <div>
            <Request />
          </div>
          <div>
            <Result tsaTime= {this.state.tsaTime} driveTime= {this.state.driveTime}/>
          </div>
        </div>


		);
	}
};

export default App;