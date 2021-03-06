import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Logo } from './Logo';

export const Nav: React.VFC = () => {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/slicemasters">Slice Masters</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        {/* <li>
          <button type="button" onClick={handleClickButton}>
            Click to see slicemasters after 2 seconds
          </button>
        </li> */}
      </ul>
    </NavStyles>
  );
}
// const handleClickButton = () => {
//   setTimeout(() => {
//     console.log(`go to slicemasters`);
//     navigate(`/slicemasters`, { replace: true });
//   }, 2000);
// };

const NavStyles = styled.nav`
  /* margin-bottom: 3rem; */

  .logo {
    transform: translateY(-25%);
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }

  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;

    &:nth-child(1) {
      --rotate: 1deg;
    }

    &:nth-child(2) {
      --rotate: -2.5deg;
    }

    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
      /* --rotate: calc(var(--rotate) + 0.5deg); */
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    } // to learn
  }
`;
