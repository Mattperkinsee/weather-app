import React from "react";

//Stateless component
const Weather = props => {
  console.log(props);

  return (
    <div className="weather__info">
      {props.city && props.country && (
        <p className="weather__key">
          Location:{" "}
          <span className="weather__value">
            {props.city}, {props.country}
          </span>
        </p>
      )}
      {props.temperature && (
        <p className="weather__key">
          Temperature:{" "}
          <span className="weather__value">{props.temperature}°F</span>
        </p>
      )}
      {props.conditionsImgURL && (
        <p className="weather__key">
          Conditions Image:{" "}
          {/* <span style={`background:url(${props.temperatureImgURL})`} /> */}
          {/* <span style={{ marginRight: props.temperatureImgURL + "em" }} /> */}
          <img
            className="conditionsImage"
            src={props.conditionsImgURL}
            alt="conditions"
          />
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Humidity : <span className="weather__value">{props.humidity}%</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Conditions:{" "}
          <span className="weather__value">{props.description}</span>
        </p>
      )}
      {props.error && <p className="weather__error">{props.error}</p>}
    </div>
  );
};

export default Weather;
