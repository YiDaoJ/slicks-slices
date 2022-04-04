import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

// grid-template-rows: subgrid; take your row sizing not from pizzastyles div, but from the PizzaGridStyles grid
// chrome does not support subgrid 😭
const PizzaStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

const SinglePizza: React.VFC<{pizza: any}> = ({ pizza }) => {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>{pizza.toppings.map((topping: any) => topping.name).join(`, `)}</p>
      {/* <GatsbyImage fluid={pizza.image.asset.fluid} alt={pizza.name} /> TODO */}
      <GatsbyImage image={pizza.image} alt={pizza.name} />
    </PizzaStyles>
  );
}

export const PizzaList: React.VFC<{pizzas: any}> = ({ pizzas }) =>  (
    <PizzaGridStyles>
      {pizzas.map((pizza: any) => (
        <SinglePizza pizza={pizza} key={pizza.id} />
      ))}
    </PizzaGridStyles>
  );


export default PizzaList
