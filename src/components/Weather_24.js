
import React from "react";
import "./Weather_24.css";






class Weather_24 extends React.Component {
    
  
    render() {
      return (
         <div className="content"> 
        <div className="details">
        <div className="times">
          
            <p>03:00</p>
            <p>06:00</p>
            <p>09:00</p>
            <p>12:00</p>
            <p>15:00</p>
            <p>18:00</p>
            <p>21:00</p>
          
        </div>
         <div className="images">
            <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
            <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
            <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
            <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
            <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
            <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
            <img src="./clear.svg" alt="clear" width="50px" height="50px"></img>
        </div>
        <div className="temperatures">
          
            <p>8&#8451;</p>
            <p>9&#8451;</p>
            <p>14&#8451;</p>
            <p>17&#8451;</p>
            <p>18&#8451;</p>
            <p>16&#8451;</p>
            <p>13&#8451;</p>
          
        </div>
      </div>
      
      </div>
        
  
  
      );
    }
  }
  export default Weather_24;

























