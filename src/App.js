import React, { Component } from 'react';
import Configurator from './Configurator.js';
import ShoppingCart from './ShoppingCart.js';
import SiteHeader from './SiteHeader.js';
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class App extends Component {
  constructor(props) {
    super(props);
    const { features } = props;
    this.state = {
      selected: Object.keys(features).reduce((map, key) => {
         map[key] = features[key][0];
         return map;
      }, {})
    };
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const { features } = this.props;
    const { selected } = this.state;
    return (
      <div className="App">
        <SiteHeader />
        <main>
          <Configurator
            extraAttrs={{className: "main__form"}}
            features={features}
            selections={selected}
            currencyFormatter={USCurrencyFormat}
            onFeatureChange={this.updateFeature}
          />
          <ShoppingCart
            extraAttrs={{className: "main__summary"}}
            contents={selected}
            currencyFormatter={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}