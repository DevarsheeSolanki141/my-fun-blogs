import React from "react";
import "./style.scss";
import { graphql } from "gatsby";

//import Img from 'gatsby-image';
import { ArticlePreview, CategoryPath, Layout, PrimaryLink } from "components";
import links from "data/links";
import { SiteMetadata } from "types";
import { edgesToArticles, removeFrontSlash } from "utils";

const createAndSeparateArticles = function (edges, pageCategory) {
  /**
   * Parses the markdown from a graphql request into Article objects and separates them into categories
   * @return an object with values being Article arrays
   */
  const articles = edgesToArticles(edges);
  //Add sorting functionality here if more sorting is to be applied

  const categories = {};

  articles.forEach((article) => {
    if (!(article.category in categories)) {
      //Create the category if it does not exist
      categories[article.category] = [];
    }

    if (article.category === pageCategory) {
      categories[article.category].push(article); //All of the current categories articles will be displayed
    } else if (categories[article.category].length <= 5) {
      categories[article.category].push(article); //Push the article to the category it belongs to
    }
  });
  return categories;
};

const CategoryPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    sitePage: { path },
  } = data;

  const category = removeFrontSlash(path);
  const categories = createAndSeparateArticles(edges);

  const siteMetadata = new SiteMetadata(
    "FFUN",
    path,
    `Automotive articles related to ${category}`,
    "/images/TradeIn/steering-wheel-clock.png"
  );

  const articles = categories[category];

  return (
    <Layout siteMetadata={siteMetadata}>
      <div className="col-lg-9 col-11 mx-auto">
        <CategoryPath
          category={category}
          className="mt-5 mb-md-5 mb-4 blog-category-link"
        />
        <div className="grid-321 mb-5 my-5">
          {articles && articles.map((art) => (
            <ArticlePreview key={art.slug} article={art} />
          ))}
        </div>
        <a
          href={links.client.preQual}
          aria-label="FFUN qualification page"
          className="
                        flex-center-col
                        shadow2 
                        rounded  
                        p-4 
                        my-6 
                        mx-auto
                        bg-gray2 
                        hover-grow 
                        text-dark
                    "
          style={{
            maxWidth: 855,
          }}
        >
          <h2>Apply for your car loan</h2>
          <p>
            Your online application takes only 3 minutes to complete and we only
            ask for information we actually need.
          </p>
          <PrimaryLink>Get approved</PrimaryLink>
        </a>
      </div>
    </Layout>
  );
};

export default CategoryPage;

export const pageQuery = graphql`
  query CategoryQuery($path: String) {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            description
            imgAlt
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    sitePage(path: { eq: $path }) {
      path
    }
  }
`;
