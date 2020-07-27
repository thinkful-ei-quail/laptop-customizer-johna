import React from 'react';
import './ShoppingCartTotal.css';

export default class ShoppingCartTotal extends React.Component {
  render() {
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">{this.props.children}</div>
      </div>
    );
  }
}