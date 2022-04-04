import fetch from 'cross-fetch';
import type { GatsbyNode } from "gatsby"



const fetchBeersAndTurnIntoNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  // 1. Fetch the list of beers
  const res = await fetch('https://api.sampleapis.com/beers/ale');
  const beers = await res.json();

  // 2. loop over each one
  for (const beer of beers) {
    // create a node for each beer
    // const nodeContent = JSON.stringify(beer);
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };
    // 3. create a node for that beer
    actions.createNode({ ...beer, ...nodeMeta });
  }
};

