import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import FarmCrop from './FarmCrop';


class App extends Component {
  state = {
    response: ''
  };
  
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  render() {
    return (
      <div className="App">
        <Header text="My Farm App!" />
        <p className="App-intro">{this.state.response}</p>
        <div className="farmcrops">
          <FarmCrop 
            title="Tomatoes" 
            type="Food Crop" 
            alt="The tomato is grown worldwide for its edible fruits, with thousands of cultivars.[37] 
                  A fertilizer with an NPK ratio of 5-10-10 is often sold as tomato fertilizer or vegetable 
                  fertilizer, although manure and compost are also used." 
            poster="./bucket/tomatoes_01.png" />
          <FarmCrop 
            title="Potatoes" 
            type="Food Crop" 
            alt="Raw potato is 79% water, 17% carbohydrates (88% of which is starch), 2% protein, contains 
                negligible fat (table). In a 100 grams (3.5 oz) amount, raw potato provides 322 kilojoules (77 kilocalories) 
                and is a rich source of vitamin B6 and vitamin C (23% and 24% of the Daily Value, respectively), with no 
                other nutrients in significant amount (table). When a potato is baked, contents of vitamin B6 and vitamin C 
                decline with little significant change in other nutrients." 
            poster="./bucket/potatoe_02.png" />
          <FarmCrop
            title="Peanut" 
            type="Food Crop" 
            alt="Peanut is an annual herbaceous plant growing 30 to 50 cm (1.0 to 1.6 ft) tall.[18] As a legume, it belongs to 
            the botanical family Fabaceae (also known as Leguminosae, and commonly known as the bean or pea family). 
            Like most other legumes, peanuts harbor symbiotic nitrogen-fixing bacteria in their root nodules.[5] 
            The leaves are opposite and pinnate with four leaflets (two opposite pairs; no terminal leaflet); each leaflet 
            is 1 to 7 cm (? to 2¾ in) long and 1 to 3 cm (? to 1 in) across." 
            poster="./bucket/peanut_03.png" />
        </div>
      </div>
    );
  }
}

export default App;
