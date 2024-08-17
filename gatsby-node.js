const { createFilePath } = require(`gatsby-source-filesystem`);
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2");
const path = require("path");
const uniqueValuesFromArr = (arr) =>
  arr.filter((item, i, ar) => ar.indexOf(item) === i);
const titleCaseToKebabCase = (text) => text.replace(/\s+/g, "-").toLowerCase();

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const postTemplate = path.resolve(`src/components/ArticlePage.jsx`);
  //const catTemplate = path.resolve(`src/components/CategoryPage/index.jsx`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return Promise.reject(result.errors);
  }

  const categories = uniqueValuesFromArr(
    result.data.allMarkdownRemark.edges.map(({ node }) =>
      titleCaseToKebabCase(node.frontmatter.category)
    )
  );

  categories.forEach((cat) => {
    createPage({
      path: `${cat}`,
      component: path.resolve(`src/components/CategoryPage/index.jsx`),
    });
  });

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `${node.fields.slug}`,
      category: `${node.frontmatter.category}`,
      title: `${node.frontmatter.title}`,
      component: postTemplate,
      context: { node },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node);
  if (node.internal.type === `MarkdownRemark`) {
    actions.createNodeField({
      node,
      name: `slug`,
      value: createFilePath({
        node,
        getNode,
        basePath: `pages`,
        trailingSlash: true,
      }),
    });
  }
};
