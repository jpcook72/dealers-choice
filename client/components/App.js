import React from "react"
import ReactDOM from "react-dom"
import USAMap from "react-usa-map";
 
export default class App extends React.Component {
  constructor() {
	  super();
	  this.mapHandler = this.mapHandler.bind(this)
  }
  mapHandler(event) {
    alert(event.target.dataset.name);
  };
 
  render() {
    return (
      <div className="App">
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

// export default class App extends React.Component {
// 	constructor() {
// 		super();
// 	}
// 	render() {
// 		return(<div><p>what is going on</p></div>)
// 	}
// }
