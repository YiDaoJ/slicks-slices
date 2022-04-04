import {calculatePizzaPrice} from './calculatePizzaPrice';
import {formatMoney} from './formatMoney';

export const attachNamesAndPrices = (order: any, pizzas: any) =>
  order.map((item: any) => {
    const selectedPizza = pizzas.find((pizza: any) => pizza.id === item.id);
    return {
      ...item,
      name: selectedPizza.name,
      thumbnail: selectedPizza.image.asset.fluid.src,
      price: formatMoney(calculatePizzaPrice(selectedPizza.price, item.size)),
    };
  });
