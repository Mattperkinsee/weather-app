import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form id="searchForm" onSubmit={this.props.getWeather}>
        <p>
          <input type="text" name="city" placeholder="City..." />
        </p>
        <p>
          <input type="text" name="country" placeholder="Country..." />
        </p>
        <p>
          <input type="text" name="zip" placeholder="Zip..." />
        </p>
        <p>
          <button>Get Weather</button>
        </p>
      </form>
    );
  }
}

export default Form;
