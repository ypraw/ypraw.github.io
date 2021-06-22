/* eslint-disable require-jsdoc */
import PropTypes from "prop-types";
import React from "react";
import { Link, graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Seo from "../components/Seo";
import _JSXStyle from "styled-jsx/style";
class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = (e) => {
    this.separator.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  render() {
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1 || !currentPage;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : `/${(currentPage - 1).toString()}`;
    const nextPage = `/${(currentPage + 1).toString()}`;

    const {
      data: {
        posts: { edges: posts = [] }
      }
    } = this.props;
    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {(theme) => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>

        <Seo />
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto 20px auto",
            textAlign: "center"
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page&nbsp;
            </Link>
          )}

          {!isLast && (
            <Link to={nextPage} rel="next">
              &nbsp;Next Page →
            </Link>
          )}
        </div>

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "1%",
            listStyle: "none"
          }}
        >
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0
              }}
            >
              <Link
                to={`/${i === 0 ? "" : i + 1}`}
                style={{
                  padding: "3px 8px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  color: i + 1 === currentPage ? "#ffffff" : "",
                  background: i + 1 === currentPage ? "#ff0f7b" : ""
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
        </ul>

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};
export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
          }
        }
      }
    }
  }
`;

// hero-background
