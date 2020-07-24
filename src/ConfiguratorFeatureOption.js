import React from 'react';
import './ConfiguratorFeatureOption.css';

export default class ConfiguratorFeatureOption extends React.Component {
  render() {
    const { checked, guid, featureGuid, name, displayedCost, onChange } = this.props;
    return (
      <div className="feature__item">
        <input type="radio" id={guid} className="feature__option" name={featureGuid} {...{checked, onChange}}/>
        <label htmlFor={guid} className="feature__label">
          {name} ({displayedCost})
        </label>
      </div>
    );
  }
}