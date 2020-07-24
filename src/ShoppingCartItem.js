import React from 'react';
import './ShoppingCartItem.css';

export default class ShoppingCartItem extends React.Component {
  render() {
    const { title, description, displayedCost } = this.props;
    return (
      <div className="summary__option">
        <div className="summary__option__label">{title} </div>
        <div className="summary__option__value">{description}</div>
        <div className="summary__option__cost">{displayedCost}</div>
      </div>
    );
  }
}