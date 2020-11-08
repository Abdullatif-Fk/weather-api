import React from "react";
import "./Weather_now.css";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";
import FakeWeather from "../data/FakeWeather.json";






class Weather_now extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      name: "Abdullatif",
    };
    
    //console.log({FakeWeather});
  }
 
  
    render() {
    
      function getimg (num){

        switch (num) {
        
          
          case 800:
          return clear;
          
          case 801:
          return partlycloudy;
          
          
  
      
        }
        if (num<300)
          return storm;
          
          
  
          if (num>300 && num<=499)
          return drizzle;
          
          
          if (num>=500 && num<=599)
          return rain;
          
          
          if (num>600 && num<=699)
          return snow;
          
          
          if (num>700 && num<=799)
          return fog;
          
          
          if (num>=801 && num<=805)
          return mostlycloudy;
          
        if (num>=801 && num<=805)
          return mostlycloudy;
      
      }

      return (
      
      <div className="content">
      <img src={clear} alt="cloudy" width="150px" height="150px"></img>
          {/*<p>overcast clouds</p>*/}

          <p> { this.props.list.slice(1,2).map(function (item ){
           
           return item.weather[0].description;

         }) }</p>
      {}
      
     <div className="temperature-today">
     <span> Temperature  </span> 
          {this.props.list.slice(1,2).map(function (item ){
           
           return Math.round(item.main.temp_min-273.15);

         })} &#8451;
          to 
          {this.props.list.slice(1,2).map(function (item ){
           console.log(Math.round(item.main.temp_max - 273.15));
          return Math.round(item.main.temp_max - 273.15);

        })} &#8451;
     
     </div>
     
     
     <div className="info">
        <p>Humidity</p>
      <p>
        {this.props.list.slice(1,2).map(function (item ){
           console.log(Math.round(item.main.humidity));
           return item.main.humidity ;

        })}%
        </p>
        <p>Pressure</p>
        <p>
          {this.props.list.slice(1,2).map(function (item ){
           console.log(Math.round(item.main.temp_max - 273.15));
           return item.main.pressure ;
        })}
        </p>
     </div>
     </div>
  
        
  
  
      );
    }
  }
  export default Weather_now;








