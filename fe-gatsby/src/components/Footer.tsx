import * as React from 'react';

export const Footer: React.VFC = () => {
  return (
    <footer>
      <div>&copy; Slick's Slices {new Date().getFullYear()}</div>
    </footer>
  );
}
