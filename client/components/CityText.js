import axios from "axios"
import React from "react"
import ReactDOM from "react-dom"

const CityText = (props) => {
    return(
    <div>
        <div className='stateName'>{props.cities[0].state.abbr}</div>
        <ul>{props.cities.map(city => {
        return(<li key={city.id} className={city.capital && 'capital'}>{city.name}</li>)
    })}</ul>
    </div>)
}

export default CityText