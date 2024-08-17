import React from "react";
import "styles/index.scss";
import { graphql } from "gatsby";
import { Layout, ArticlePreview } from "components";
import { SiteMetadata } from "types";
import links from "data/links";
import { edgesToArticles } from "utils";
import "./style.scss";

// //TODO: Update description, image
const siteMetadata = new SiteMetadata(
  "FFUN - Blog",
  links.blog.home,
  "THE FFUN BLOG - Read up on the latest trends within the auto industry and the must-know info for everyone buying a vehicle."
);

const styles = {
  bannerBgContainer: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 50%,rgba(0,0,0,0) 90%), url("https://pictures.dealer.com/f/ffuncars/0475/9463ddc10e4fbe96f6a7e07b167faf52x.jpg?impolicy=downsize_bkpt&w=1280")`,
    backgroundPosition: "center 10%",
  },
};

const Blog = ({ data }) => {
  //livechat
  // useEffect(() => {
  //   window.$crisp = [];
  //   window.CRISP_WEBSITE_ID = "deb4d3d6-cdc3-403b-aa28-b74f669ff69b";
  //   (function () {
  //     var d = document;
  //     var s = d.createElement("script");
  //     s.src = "https://client.crisp.chat/l.js";
  //     s.async = 1;
  //     d.getElementsByTagName("head")[0].appendChild(s);
  //   })();
  // }, []);

  return (
    <Layout siteMetadata={siteMetadata}>
      <div className="w-100 bg-black">
        <div
          className="position-relative overflow-hidden p-0 flex-column mx-auto align-items-center d-flex justify-content-between"
          style={{ minHeight: "55vh" }}
        >
          <div
            style={styles.bannerBgContainer}
            className="bg-black w-100 h-100 position-absolute"
          ></div>
          <div className="py-4 py-lg-6">
            <div className="w-100 h-100 position-relative m-0 p-5 text-center text-white">
              <h1 className="font-weight-boldest static-page-banner-title">
                THE FFUN NEWS & BLOG
              </h1>
              <p className="font-weight-bold static-page-banner-sub-title mb-5">
                Read up on the latest trends within the auto industry and the
                must-know info for everyone <br />
                buying a vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mw-100">
        <div
          id="article-grid"
          className="grid-321 col-lg-9 col-11 mx-auto mt-5 mb-6"
        >
          {edgesToArticles(data.allMarkdownRemark.edges).map((article) => (
            <ArticlePreview article={article} key={article.slug} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

//TODO: Check if noBase64 is still good
export const pageQuery = graphql`
  query MainPageQuery {
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
            category
            description
            imgAlt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;
