import axios from "axios"
import React from "react"
import ReactDOM from "react-dom"

const CityText = (props) => {
    return(<div><ul>{props.cities.map(city => {
        return(<li key={city.id}>city.name</li>)
    })}</ul></div>)
}

export default CityText