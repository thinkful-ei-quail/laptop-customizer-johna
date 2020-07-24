import React from 'react';
import ConfiguratorFeatureOption from './ConfiguratorFeatureOption.js';
import './ConfiguratorFeature.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export default class ConfiguratorFeature extends React.Component {
  render() {
    const { name, guid : featureGuid, options, selectedOption, currencyFormatter, onFeatureChange } = this.props;
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{name}</h3>
        </legend>
        {options.map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <ConfiguratorFeatureOption
              key={itemHash} guid={itemHash}
              featureGuid={featureGuid}
              name={item.name}
              displayedCost={currencyFormatter.format(item.cost)}
              checked={item.name===selectedOption}
              onChange={() => onFeatureChange(item)}
            />
          );
        })}
      </fieldset>
    );
  }
}