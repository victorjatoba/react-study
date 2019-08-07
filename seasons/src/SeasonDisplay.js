import React from 'react';
import "./SeasonDisplay.css";

const SeasonEnum = Object.freeze({
    SUMMER: { value: 1, name: 'summer', text: 'Let\'s hit the beach!', iconName: 'sun'},
    WINTER: { value: 1, name: 'winter', text: 'Burr, it\'s chilly!', iconName: 'snowflake'},
})

const getSeason = (lat, month) => {
    let season = isNorthHemisphere(lat) ? SeasonEnum.WINTER : SeasonEnum.SUMMER;

    if (month >= 3 && month <= 8) {
        season = isNorthHemisphere(lat) ? SeasonEnum.SUMMER : SeasonEnum.WINTER;
    }

    return season
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());

    return <div className={`season-display ${season.name}`}>
        <i className={`icon-left massive ${season.iconName} icon`} />
        <h1>{season.text}</h1>
        <i className={`icon-right massive ${season.iconName} icon`} />
    </div>
}

export default SeasonDisplay;

function isNorthHemisphere(lat) {
    return lat > 0;
}
