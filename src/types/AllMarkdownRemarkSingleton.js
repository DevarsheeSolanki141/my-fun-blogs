import { useStaticQuery, graphql } from 'gatsby';

/**
 * !Doesn't work for some reason. After clicking 2 related articles, related articles no longer show
 * To reduce build time, because AllMarkdownRemark is only called once
 */
class AllMarkdownRemarkSingleton {

    static _allMarkdownRemark;

    static getAllMarkdownRemark = function(){
        this._allMarkdownRemark = useStaticQuery(graphql`
            query AllMarkdownQuery{
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
        `).allMarkdownRemark;
    };

    static allMarkdownRemark() {
        if (this._allMarkdownRemark) {
            return this._allMarkdownRemark;
        } else {
            this.getAllMarkdownRemark()
            return this._allMarkdownRemark;
        };
    };

};

export default AllMarkdownRemarkSingleton;