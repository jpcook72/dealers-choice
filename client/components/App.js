import React from "react"
import ReactDOM from "react-dom"
import USAMap from "react-usa-map";
import CityText from "./CityText.js"
import axios from "axios";

 
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: []
    }
    this.mapHandler = this.mapHandler.bind(this);
  }
  componentDidMount() {
    const loadWords = async () => {
      const hash = window.location.hash.slice(1)
      const cities = await axios.get(`/api/${hash}`);
      console.log(cities)
      this.setState({ cities: [...cities.data] });
      
    }
    window.addEventListener('hashchange', async()=> {
      loadWords();
    });
    if(window.location.hash.slice(1)){
      loadWords();
    }
  }
  mapHandler(event) {
    location.hash = `#${event.target.dataset.name}`
  };
 
  render() {
    return (
      <div className="App">
          {
            this.state.cities.length && 
            (<div>
              <CityText cities={this.state.cities}/>
            </div>) 
          }
          <div className="map">
            <USAMap onClick={this.mapHandler} />
          </div>
      </div>
    );
  }
}