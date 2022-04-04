import React, { useState } from 'react';
import { attachNamesAndPrices } from './attachNamesAndPrices';
import { calculateOrderTotal } from './calculateOrderTotal';

export function usePizza({ pizzas, values }: any) {
  // 1. create some states to hold the order
  const [order, setOrder] = useState([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  // 2. make a funtion to add pizza to order
  const addToOrder = (orderedPizza: any) => {
    setOrder([...order, orderedPizza] as any);
  };
  // 3. make a funtion to remove pizza from order
  const removeFromOrder = (index: number) => {
    // console.log('___ index', [
    //   ...order.slice(0, index),
    //   ...order.slice(index + 1),
    // ]);
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  };

  // triggered when someone submit the form
  const submitOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(undefined);
    // setMessage('Go eat!');

    const body = {
      order: attachNamesAndPrices(order, pizzas),
      total: calculateOrderTotal(order, pizzas),
      name: values.name,
      email: values.email,
      mapleSyrup: values.mapleSyrup,
    };

    // 4. send this data to a serverless funtion when they check out
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const text = JSON.parse(await res.text());

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(text.message);
    } else {
      // works!
      setLoading(false);
      setMessage('Success!!!!');
    }
  };

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
}
