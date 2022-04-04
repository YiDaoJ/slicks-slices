// @ts-check
/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('source-map-support').install()
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})

// typescript files
exports.createPages = require('./lib/onCreateNode')
// exports.onCreateNode = require('./lib/onCreateNode')

// exports.sourceNodes = async (params) => {
//   // fetch a list of beers and source them into our gatsby API
//   await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
// };

// exports.createPages = async (params) => {
//   // create pages dynamically
//   // 1. pizzas
//   // 2. Toppings
//   // wait for all promises to be resolved before finishing this function
//   await Promise.all([
//     turnPizzasIntoPages(params),
//     // turnToppingIntoPages(params),
//     // turnSlicemastersIntoPages(params),
//   ]);
// };