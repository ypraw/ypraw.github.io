import { FaTag } from "react-icons/fa/";
import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import List from "../components/List";
import Seo from "../components/Seo";

const TagsPage = props => {
  const {
    data: {
      posts: { edges: posts }
    }
  } = props;

  // Create category list
  const categories = {};
  posts.forEach(edge => {
    const {
      node: {
        frontmatter: { category }
      }
    } = edge;

    if (category && category != null) {
      category.forEach(element => {
        if (!categories[element]) {
          categories[element] = [];
        }
        categories[element].push(edge);
      });
    }
  });

  const categoryList = [];

  for (var key in categories) {
    categoryList.push([key, categories[key]]);
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Posts by categories" theme={theme} />
            </header>
            {categoryList.map(item => (
              <section key={item[0]}>
                <h2>
                  <FaTag /> {item[0]}
                </h2>
                <List edges={item[1]} theme={theme} />
              </section>
            ))}
            {/* --- STYLES --- */}
            <style jsx>{`
              h2 {
                margin: 0 0 0.5em;
                color: ${theme.color.brand.primary};
              }
              :global(a) {
                color: ${theme.color.neutral.gray.b};
              }
              @from-width desktop {
                :global(a:hover) {
                  color: ${theme.color.brand.primary};
                }
              }
              h2 :global(svg) {
                height: 0.8em;
                fill: ${theme.color.brand.primary};
              }
            `}</style>
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo />
    </React.Fragment>
  );
};

TagsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default TagsPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
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
