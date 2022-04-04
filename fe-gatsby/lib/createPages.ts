import path from "path"
import type { GatsbyNode } from "gatsby"

export const turnPizzasIntoPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  // 1. get a template for this page
  const pizzaTemplate = path.resolve(`src/templates/Pizza.tsx`);
  // 2. query all pizzas
  const { data }: any = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      // page url
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
};

// const turnToppingIntoPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
//   // 1. Get the template
//   const toppingTemplate = path.resolve(`src/pages/pizzas.tsx`);
//   // 2. query all the toppings
//   const { data }: any = await graphql(`
//     query {
//       toppings: allSanityTopping {
//         nodes {
//           name
//           id
//           vegetarian
//         }
//       }
//     }
//   `);
//   // 3. createPage for that topping
//   data.toppings.nodes.forEach((topping) => {
//     actions.createPage({
//       // page url
//       path: `topping/${topping.name}`,
//       component: toppingTemplate,
//       context: {
//         topping: topping.name,
//         toppingRegex: `/${topping.name}/i`,
//       },
//     });
//   });
//   // 4. Pass topping data to pizza.js
// };

// const turnSlicemastersIntoPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
//   // 1. query all slicemasters
//   const { data }: any = await graphql(`
//     query {
//       slicemasters: allSanityPerson {
//         totalCount
//         nodes {
//           name
//           id
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);
//   // TODO: 2. Turn each slicemaster into their own page
//   data.slicemasters.nodes.forEach((slicemaster) => {
//     actions.createPage({
//       path: `/slicemasters/${slicemaster.slug.current}`,
//       component: path.resolve('src/templates/Slicemaster.tsx'),
//       context: {
//         name: slicemaster.name,
//         slug: slicemaster.slug.current,
//       },
//     });
//   });
//   // 3. figure out how many pages there are -> based on how many slicemasters there are, and how many per page
//   const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
//   const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize);

//   // 4. loop from 1 to n and create the pages for them
//   Array.from({ length: pageCount }).forEach((_, i) => {
//     actions.createPage({
//       path: `/slicemasters/${i + 1}`,
//       component: path.resolve('src/pages/slicemasters.tsx'),
//       context: {
//         skip: i * pageSize,
//         currentPage: i + 1,
//         pageSize,
//       },
//     });
//   });
// };


// const NodeAPI = {
//     // create pages dynamically
//     // 1. pizzas
//     // 2. Toppings
//     // wait for all promises to be resolved before finishing this function
//   // await Promise.all([
//   //   turnPizzasIntoPages(params),
//   //   turnToppingIntoPages(params),
//   //   turnSlicemastersIntoPages(params),
//   // ]);
//   turnPizzasIntoPages
// };
// export default NodeAPI;
