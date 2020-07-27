import React from 'react';
import ShoppingCartItem from './ShoppingCartItem.js';
import ShoppingCartTotal from './ShoppingCartTotal.js';
import './ShoppingCart.css';

export default class ShoppingCart extends React.Component {
  render() {
    const { contents, currencyFormatter } = this.props;
    const contentKeys = Object.keys(contents);
    return (
      <>
        <h2>Your cart</h2>
        {contentKeys.map((name, idx) => {
          const hash = name + '-' + idx;
          const item = contents[name];
          return <ShoppingCartItem key={hash} title={name} description={item.name}
            displayedCost={currencyFormatter.format(item.cost)} />;
        })}
        <ShoppingCartTotal>
          {currencyFormatter.format(contentKeys.reduce((acc, curr) => acc + contents[curr].cost, 0))}
        </ShoppingCartTotal>
      </>
    );
  }
}