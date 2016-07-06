import React from 'react';
const styles= {
  timeStyle: {
    margin: 5
  }
}
var Result = (props) => (
  <div >
    <div style= {styles.timeStyle}>
      Total Travel Time: {props.totalTime}
    </div>
    <div style= {styles.timeStyle}>
      TSA Wait Time: {props.tsaTime}
    </div>
    <div style= {styles.timeStyle}>
      Drive Time: {props.driveTime}
    </div>
  </div>
);

export default Result;