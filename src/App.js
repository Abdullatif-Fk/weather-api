import React, { Component } from "react";
import Search from "./components/Search";
import Weather_now from "./components/weather_now";
import Weather_24 from "./components/Weather_24";



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
        
          <Search handleInput={this.handleInputChange} />
          <Weather_now/>
          <Weather_24/>
            
          
          
        </div>
      
    );
  }
}

export default App;
