import React, { Component } from "react";
import Search from "./components/Search";
import Weather_now from "./components/weather_now";
import Weather_24 from "./components/Weather_24"; 
import FakeWeather from "./data/FakeWeather.json";



import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdullatif",
    };
    //console.log({FakeWeather});
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    let listOfWeathers = FakeWeather.list.slice(1,8).map(Weather => {

      return Weather;
    })

    return (
     
      <div id="app">
        
          <Search handleInput={this.handleInputChange}/>
          {/*this.state.description*/}
          <Weather_now list={listOfWeathers}/>
          <Weather_24 list={listOfWeathers}/>
         <div>
         </div>
            
          
          
        </div>
         
      
    );
  }
}

export default App;
