import React from "react";
import "./Weather_now.css";






class Weather_now extends React.Component {
    
  
    render() {
      return (
      
      <div className="content">
      <img src="./clear.svg" alt="cloudy" width="150px" height="150px"></img>
      <p>overcast clouds</p>
      
     <div className="temperature-today">
     <span> Temperature </span> 10&#8451; to 11&#8451;
     
     </div>
     
     
     <div className="info">
        <p>Humidity</p>
        <p>78%</p>
        <p>Pressure</p>
        <p>1008.48</p>
     </div>
     </div>
  
        
  
  
      );
    }
  }
  export default Weather_now;








