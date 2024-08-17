import React from "react";
import "./style.scss";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { kebabCaseToSentenceCase } from "utils";

const styles = {
  img: {
    height: "65%",
  },
  textBlock: {
    minHeight: "25%",
  },
};

const ArticlePreview = ({ article, style = {}, className, ...props }) => (
  <div
    className={`article-preview hover-grow rounded overflow-hidden mh-100 ${className}`}
    {...props}
  >
    <Link
      aria-label={`Go to the article page for ${article.title}`}
      className="d-flex h-100 flex-column text-decoration-none"
      to={article.slug}
    >
      <Img
        fluid={article.imgProps}
        alt={article.imgAlt}
        style={styles.img}
        imgStyle={{ objectFit: "cover" }}
      ></Img>

      <div
        style={styles.textBlock}
        className="bg-gray2 flex-grow-1 d-flex flex-column text-left px-3 w-100"
      >
        <span className="text-dark d-flex justify-content-between mt-3 mb-2 font-h7">
          <span className="font-weight-bold text-secondary">
            {kebabCaseToSentenceCase(article.category)}
          </span>{" "}
          <span>{article.date}</span>
        </span>
        <strong className="font-h5m text-dark mb-2 text-decoration-none article-preview-title">
          {article.title}
        </strong>
      </div>
    </Link>
  </div>
);

ArticlePreview.propTypes = {
  //imgProps: PropTypes.instanceOf(GatsbyImageProps), //TODO: Causes a warning for some reason, fix this
  article: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.any,
};

export default ArticlePreview;
