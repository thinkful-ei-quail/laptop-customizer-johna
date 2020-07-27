import React from 'react';
import ConfiguratorFeature from './ConfiguratorFeature.js'
import features from './features.js';
import './Configurator.css';

export default class Configurator extends React.Component {
  render() {
    const { selections, currencyFormatter, onFeatureChange } = this.props;
    return (
      <>
        <h2>Customize your laptop</h2>
        {Object.keys(features).map((name, idx) => {
          const hash = name + '-' + idx;
          return (
            <ConfiguratorFeature 
              key={hash} guid={hash} name={name}
              options={features[name]}
              selectedOption={selections[name].name}
              currencyFormatter={currencyFormatter}
              onFeatureChange={item => onFeatureChange(name, item)}
            />
          )
        })}
      </>
    );
  }
}