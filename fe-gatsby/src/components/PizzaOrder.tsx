import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MenuItemStyles } from '../styles/MenuItemStyles';
import { calculatePizzaPrice } from '../utils/calculatePizzaPrice';
import { formatMoney } from '../utils/formatMoney';

interface PizzaOrderProps {
  order: any
  pizzas: any
  removeFromOrder: any
}

export const PizzaOrder: React.VFC<PizzaOrderProps> = ({ order, pizzas, removeFromOrder }) => {
  return (
    <>
      <p>you have {order.length} items in your order.</p>
      {order.map((singleOrder: any, index: number) => {
        const pizza = pizzas.find((item: any) => item.id === singleOrder.id);
        return (
          <MenuItemStyles key={singleOrder.id}>
            <GatsbyImage image={pizza.image} alt="order" />
            {/* <GatsbyImage fluid={pizza.image.asset.fluid} /> */}
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(calculatePizzaPrice(pizza.price, singleOrder.size))}
              <button
                type="button"
                className="remove"
                onClick={() => removeFromOrder(index)}
                title={`Remove ${singleOrder.size} ${pizza.name} from Order`}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
