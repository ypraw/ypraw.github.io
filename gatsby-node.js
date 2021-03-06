/* eslint-disable no-dupe-else-if */
require("core-js/features/array/from");

const _ = require("lodash");
const path = require("path");
const Promise = require("bluebird");
const { createFilePath } = require(`gatsby-source-filesystem`);
// const { blogPostTeaserFields, blogPostSort } = require(`./src/fragments.js`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separatorIndex = slug.indexOf("--") >= 0 ? slug.indexOf("--") : null;
    const shortSlugStart = separatorIndex ? separatorIndex + 2 : 0;

    if (source !== "parts") {
      createNodeField({
        node,
        name: `slug`,
        value: `${separatorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separatorIndex ? slug.substring(1, separatorIndex) : ""
    });
    createNodeField({
      node,
      name: `source`,
      value: source
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("./src/templates/PostTemplate.js");
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    const categoryTemplate = path.resolve("./src/templates/CategoryTemplate.js");
    const IndexPage = path.resolve("./src/templates/index.js");
    const filters = `filter: { fields: { slug: { ne: null } } }`;
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              ` +
          filters +
          `
              sort: { fields: [fields___prefix, fields___slug], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 300)
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                    category
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        // Create category list
        const categorySet = new Set();
        items.forEach((edge) => {
          const {
            node: {
              frontmatter: { category }
            }
          } = edge;

          if (category && category !== null) {
            category.forEach((tag) => {
              if (tag && tag !== null) {
                categorySet.add(tag);
              }
            });
          }
        });

        // Create category pages
        const categoryList = Array.from(categorySet);
        categoryList.forEach((category) => {
          createPage({
            path: `/category/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category
            }
          });
        });
        // Create posts
        const posts = items.filter((item) => item.node.fields.source === "posts");
        posts.forEach(({ node }, index) => {
          const slug = node.fields.slug;
          const next = index === 0 ? undefined : posts[index - 1].node;
          const prev = index === posts.length - 1 ? undefined : posts[index + 1].node;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              prev,
              next,
              source
            }
          });
        });

        // and pages.
        const pages = items.filter((item) => item.node.fields.source === "pages");
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source
            }
          });
        });

        // Create blog post list pages
        const postsPerPage = 5;
        const numPages = Math.ceil(posts.length / postsPerPage);
        _.times(numPages, (i) => {
          createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: IndexPage,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            }
          });
        });
      })
    );
  });
};

// exports.onCreateWebpackConfig = ({ loaders, stage, actions }) => {
//   switch (stage) {
//     case `build`:
//       actions.setWebpackConfig({
//         plugins: [
//           new BundleAnalyzerPlugin({
//             analyzerMode: "static",
//             reportFilename: "./report/treemap.html",
//             openAnalyzer: true,
//             logLevel: "error",
//             defaultSizes: "gzip",
//             analyzerHost: "127.0.0.1",
//             analyzerPort: "8001"
//           })
//         ],
//         devtool: false,
//         module: {
//           rules: [
//             {
//               test: /\.js$/,
//               exclude: modulePath => /node_modules/.test(modulePath),
//               // whitelist specific es6 module
//               // && !/node_modules\/@papertrailio\/js-core/.test(modulePath),
//               use: loaders.js()
//             }
//           ]
//         }
//       });
//   }
// };

// exports.onCreateWebpackConfig = ({
//   actions, //, stage, getConfig, rules, loaders,
// }) => {
//   actions.setWebpackConfig({
//     externals: ["canvas"],
//   });
// };
