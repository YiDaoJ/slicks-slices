import * as React from 'react';

import { ItemsGrid, ItemStyles } from '../styles';

interface ItemGridProps {
  items: any
}

export const ItemGrid: React.VFC<ItemGridProps> = ({ items }) => {
  return (
    <ItemsGrid>
      {items.map((item: any) => (
        <ItemStyles key={item._id}>
          <p>
            <span className="mark">{item.name}</span>
          </p>
          <img
            width="500"
            height="400"
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            alt={item.name}
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}
