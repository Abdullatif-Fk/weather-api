
import React from "react";
import "./Weather_24.css";
import getimg from "../components/weather_now"
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








class Weather_24 extends React.Component {
    
  
    render() {
      let list =this.props.list;
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
        <div className="details">
        <div className="times">
          {/*FakeWeather.list.slice(1,8).map((element,id)=>{
            <p id={id}>{element.weather.id}</p>
          })

        */
        list.map((weather)=>
        
          <p >{new Date(weather.dt_txt).getHours().toString().padStart(2, '0')+":00"}</p>


        )
        
        }
            {/*<p>03:00</p>
            <p>06:00</p>
            <p>09:00</p>
            <p>12:00</p>
            <p>15:00</p>
            <p>18:00</p>
            <p>21:00</p>*/}

            {/*FakeWeather.map(weather=>{
              <p>{weather.main.temp} </p>

            })*/}
          
        </div>
         <div className="images">
            {
              list.map((weather)=>
              
              <img src={getimg(weather.weather[0].id)} alt="clear" width="50px" height="50px"></img>
              
              )
              

            }
            
           


        


        </div>
        <div className="temperatures">
        {
              list.map((weather)=>
              <p>{Math.round(weather.main.temp-273.15)}&#8451;</p>
              )
            }
          
         
          
        </div>
      </div>
      
      </div>
        
  
  
      );
    }
  }
  export default Weather_24;

























