import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on Me!';
}

const App = () => {

    const buttonStyle = { backgroundColor: 'blue', color: 'white', border: '1px solid black' };

    return (
    <div>
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={buttonStyle}>
            { getButtonText() }
        </button>
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);