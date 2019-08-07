import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ lat: null, errorMessage: err.message })
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <b style={{ color: "red" }}>ERROR:</b> {this.state.errorMessage}
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return (
      <div>
        <label>Loading...</label>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
