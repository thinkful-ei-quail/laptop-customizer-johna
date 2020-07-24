import React from 'react';
import ShoppingCartItem from './ShoppingCartItem.js';
import './ShoppingCart.css';

export default class ShoppingCart extends React.Component {
  render() {
    const { extraAttrs, contents, currencyFormatter } = this.props;
    const contentKeys = Object.keys(contents);
    return (
      <section {...extraAttrs}>
        <h2>Your cart</h2>
        {contentKeys.map((name, idx) => {
          const hash = name + '-' + idx;
          const item = contents[name];
          return <ShoppingCartItem key={hash} title={name} description={item.name}
            displayedCost={currencyFormatter.format(item.cost)} />;
        })}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {currencyFormatter.format(contentKeys.reduce((acc, curr) => acc + contents[curr].cost, 0))}
          </div>
        </div>
      </section>
    );
  }
}