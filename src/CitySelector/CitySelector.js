import React, { Component } from 'react';

class CitySelector extends Component {
    render() {
        const {CityGroup, changeSelectdCity} = this.props;
        return (
            <div>
                {
                    CityGroup.map( (city) => {
                        return <button key={city.id} onClick={() => changeSelectdCity(city.id)}>{city.name}</button>
                    })
                }
            </div>
        );
    }
}

export default CitySelector;