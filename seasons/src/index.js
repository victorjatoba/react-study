import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ lat: null, errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>
          <b style={{ color: "red" }}>ERROR:</b> {this.state.errorMessage}
        </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request"/>;
  }

  // Best practice: just return JSX 
  render() {
    return <div>
      {this.renderContent()}
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));