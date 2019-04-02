import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import ConditionsImage from "./img/rain.png";

const API_KEY = "00db476d1c8324af66029db87ae74e8f";

class App extends React.Component {
  state = {
    temperature: undefined,
    conditionsImgURL: undefined,
    city: undefined,
    country: undefined,
    zip: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    try {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const zip = e.target.elements.zip.value;
      document.getElementById("searchForm").reset();
      let api_call = ``;
      if (zip) {
        api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`
        );
      } else {
        api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
        );
      }
      const data = await api_call.json();
      if (city && country) {
        this.setState({
          temperature: data.main.temp,
          conditionsImgURL: ConditionsImage,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else if (zip) {
        this.setState({
          temperature: data.main.temp,
          conditionsImgURL: ConditionsImage,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          conditionsImgURL: undefined,
          city: undefined,
          country: undefined,
          zip: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter city and country or zip"
        });
      }
    } catch (e) {
      console.log("error", e);
      this.setState({
        temperature: undefined,
        conditionsImgURL: undefined,
        city: undefined,
        country: undefined,
        zip: undefined,
        humidity: undefined,
        description: undefined,
        error: "Cannot find location"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-6 title-container">
                  <Titles />
                </div>
                <div className="col-xs-6 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    conditionsImgURL={this.state.conditionsImgURL}
                    city={this.state.city}
                    country={this.state.country}
                    zip={this.state.zip}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
