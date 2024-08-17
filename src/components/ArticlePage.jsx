import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import {
  Layout,
  ArticlePreview,
  CategoryPath,
  IconBlockWithText,
  ShareButtons,
  AuthorInfo,
} from "components";
import { Article, SiteMetadata } from "types";
import { edgesToArticles } from "utils";
import links from "data/links";
import Finance from "images/tiles/ffuncars-finance.webp";
import Trades from "images/tiles/ffuncars-free-pickup.webp";
import Schedule from "images/tiles/ffuncar-free-delivery.webp";

const styles = {
  container: {
    maxWidth: 1130,
  },
  img: {
    height: 350,
  },
};

const ArticlePage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
    markdownRemark: {
      frontmatter: {
        date,
        description,
        imgAlt,
        title,
        category,
        author,
        featuredImage: {
          childImageSharp: { fluid: imgProps },
          publicURL: imageURL,
        },
      },
      html,
      timeToRead,
      fields: { slug },
    },
    site: {
      siteMetadata: { siteUrl },
    },
  } = data;

  const metadata = new SiteMetadata(
    `FFUN - ${title}`,
    `${slug}`,
    description,
    `${siteUrl}${imageURL}`
  );

  const sameCatArt = [];
  const otherArt = [];

  edgesToArticles(edges).forEach((article) => {
    if (article.category === category && article.title !== title) {
      sameCatArt.push(article);
    } else {
      otherArt.push(article);
    }
  });

  const articles = sameCatArt.concat(otherArt);
  const thisArticle = new Article(
    title,
    imgProps,
    imgAlt,
    slug,
    category,
    description,
    date
  );

  return (
    <Layout siteMetadata={metadata}>
      <div style={styles.container} className="mx-3 d-flex mx-auto">
        <div className="d-flex flex-column">
          <Img
            fluid={imgProps}
            alt={imgAlt}
            className="mr-auto w-100 ml-auto ml-lg-0 rounded mb-5 mt-lg-5"
            style={styles.img}
            imgStyle={{ objectFit: "cover" }}
          />
          <div className="d-flex">
            <div className="mr-auto ml-auto ml-lg-0 text-left px-lg-0 px-3">
              <CategoryPath category={category} className="font-h5m" />
              <div className="d-flex flex-column">
                <span>{date}</span>
                <span>{`${timeToRead} min read`}</span>
              </div>
              <div className="d-flex">
                <ShareButtons className="my-3" article={thisArticle} />
                <div>
                  <h1 className="d-flex mt-4">{title}</h1>
                  <div
                    id="article-content"
                    className="text-left"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative only-gt-lg col-md-4 mt-5">
          <div
            style={{ top: 0 }}
            className=" only-gt-lg d-flex flex-column justify-content-between"
          >
            <IconBlockWithText
              title="Finance with FFUN"
              text="It takes 2 minutes"
              link={links.client.preQual}
              buttonText="Get Approved"
            >
              <img
                height="250px"
                style={{ marginTop: -18 }}
                alt="Get pre approved lady with a phone in hand"
                src={Finance}
              />
            </IconBlockWithText>
            <IconBlockWithText
              className="my-4"
              title="Sell or trade in your vehicle"
              text="Get a great offer on your vehicle in minutes!"
              link={links.client.tradeIn}
              buttonText="Trade in"
            >
              <img alt="Trade in image" height="220px" src={Trades} />
            </IconBlockWithText>
            <IconBlockWithText
              title="Schedule a test drive"
              text="Like it? Keep it. Don’t like it? Simply return it."
              link={links.client.searchCars}
              buttonText="Schedule now"
            >
              <img alt="Schedule delivery guy" height="250px" src={Schedule} />
            </IconBlockWithText>
          </div>
        </div>
      </div>
      <hr style={styles.container} className="mx-auto" />
      <div style={{ maxWidth: 1130, paddingLeft: 66 }} className="mx-auto mt-3">
        <AuthorInfo author={author} />
      </div>
      <div style={styles.container} className="px-lg-0 px-3 mx-auto mt-5">
        <h2 className="text-left">You may also like</h2>
        <div className="my-5 grid-321">
          {articles.splice(0, 3).map((art) => (
            <ArticlePreview key={art.slug} article={art} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;

/**
 * Filter in query is not working
 */
export const pageQuery = graphql`
  query ArticleQuery($path: String, $category: String, $title: String) {
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: $category }, title: { ne: $title } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
                fluid(maxWidth: 370) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        imgAlt
        title
        category
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
      }
      html
      timeToRead
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
