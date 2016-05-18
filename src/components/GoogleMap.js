import React from 'react';
import {GoogleMapLoader, GoogleMap} from "react-google-maps";

export default(props) => {
  
    return ( 
    
    <GoogleMapLoader
      containerElement={<div className='test' style={{height: '100%'}}></div>}
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat: 33.9485094, lng: this.props.lng}}
        />
          
        
      }
    />
    );

}
    
  


