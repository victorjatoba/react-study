import React from "react";

class SearchBar extends React.Component {
  state = { term: 'Hi' };

  onFormSubmit = e => {
    // to prevent the form to automatically submit itself after <enter> apply
    e.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
