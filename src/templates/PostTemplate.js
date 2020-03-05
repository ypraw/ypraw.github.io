import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Article from "../components/Article";
import Post from "../components/Post";
import { ThemeContext } from "../layouts";
// require("katex/dist/katex.min.css");

require("prismjs/themes/prism-okaidia.css");

const PostTemplate = props => {
  const {
    data: {
      post,
      authornote: { html: authorNote },
      site: {
        siteMetadata: { facebook },
      },
    },
    pageContext: { next, prev },
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Post
              post={post}
              next={next}
              prev={prev}
              authornote={authorNote}
              facebook={facebook}
              theme={theme}
            />
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo data={post} facebook={facebook} />
    </React.Fragment>
  );
};

PostTemplate.prototype = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};
export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        author
        category
      }
    }
    authornote: markdownRemark(fileAbsolutePath: { regex: "/author/" }) {
      id
      html
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
