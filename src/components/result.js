import React from 'react';
var Result = ({tsaTime, driveTime, totalTime}) => (
  <div >
    <div >
      Total Time: {totalTime} 
    </div>
    <div>
      TSA Wait Time: {tsaTime} 
    </div>
    <div>
      Drive Time: {driveTime} 
    </div>
  </div>
);

export default Result;