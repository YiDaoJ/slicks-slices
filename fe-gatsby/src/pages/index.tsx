import * as React from 'react';
import type { PageProps } from "gatsby"
import { ItemGrid, LoadingGrid} from '../components';
import { HomePageGrid } from '../styles';
import { useLatestData } from '../utils';

export const IndexRoute = ({path}: PageProps) => {
  const { sliceMasters, hotSlices } = useLatestData();

  return (
    <div className="center">
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <h1>Path: {path}</h1>
      {/* <HomePageGrid>
        <CurrentlySlicing sliceMasters={sliceMasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid> */}
    </div>
  );
}

export default IndexRoute

function CurrentlySlicing({ sliceMasters }: any) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters On</span>
      </h2>
      <p>Standy by</p>
      {!sliceMasters && <LoadingGrid count={4} />}
      {sliceMasters && !sliceMasters?.length && <p>Nothing in the case!</p>}
      {sliceMasters?.length && <ItemGrid items={sliceMasters} />}
    </div>
  );
}

const HotSlices = ({ hotSlices }: any) => (
  <div>
    <h2 className="center">
      <span className="mark tilt">Hot Slices</span>
    </h2>
    <p>Come on</p>
    {!hotSlices && <LoadingGrid count={4} />}
    {hotSlices && !hotSlices?.length && <p>Nothing in the case!</p>}
    {hotSlices?.length && <ItemGrid items={hotSlices} />}
  </div>
);
