
import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const weatherKey = "06500c91c296d2b6b09c41f42fb415b5" ;


 class App extends Component {
   state = {
     temperature : undefined,
     city : undefined,
     country: undefined,
     humidity: undefined,
     description: undefined,
     error: undefined 
   }
   getWeather = async (e) => {
     e.preventDefault();

     const city = e.target.elements.city.value;
     const country = e.target.elements.country.value;

     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${weatherKey}`);

     const data = await api_call.json();
     console.log(data);  
     
     if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city : data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }else {
      this.setState({
        temperature : undefined,
        city : undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Veuillez entrez une ville et un pays"
      });
    }

     
    
    }

  render() {
    return (  
      <div>
        <wrapper>
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles/>
                </div>
                  <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  description={this.state.description}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  error={this.state.error}

                  />


                </div>
              </div>
            </div>
          </div>
        </wrapper>
        
      </div>
    );
  }
};


export default App ;  