import React from 'react';
import ConfiguratorFeature from './ConfiguratorFeature.js'
import './Configurator.css';

export default class Configurator extends React.Component {
  render() {
    const { extraAttrs, features, selections, currencyFormatter, onFeatureChange } = this.props;
    return (
      <form {...extraAttrs}>
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
      </form>
    );
  }
}