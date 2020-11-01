import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdullatif"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div id="app">
        <div className="search">
          <Search handleInput={this.handleInputChange} />
        </div>
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
      </div>
    );
  }
}

export default App;
