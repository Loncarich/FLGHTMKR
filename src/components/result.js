import React from 'react';
var Result = ({tsaTime, driveTime}) => (
  <div >
    <div >
      Total Time: {tsaTime + driveTime} Minutes
    </div>
    <div>
      TSA Time: {tsaTime} Minutes
    </div>
    <div>
      Drive Time: {driveTime} Minutes
    </div>
  </div>
);

export default Result;