import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import config from "../../../content/meta/config";

const Seo = (props) => {
  const { data } = props;
  // const pageTitle = props.pageTitle;
  const postTitle = props.title ? props.title : ((data || {}).frontmatter || {}).title;
  const seoExcerpt = props.excerpt ? props.excerpt : (data || {} || {}).excerpt;
  // const postDescription = ((data || {}).frontmatter || {}).description;
  const postCover = ((data || {}).frontmatter || {}).cover;
  const postSlug = ((data || {}).fields || {}).slug;

  const title = postTitle ? `${postTitle} - ${config.shortSiteTitle}` : config.siteTitle;

  const description = seoExcerpt ? seoExcerpt : config.siteDescription;
  const image = postCover ? postCover : config.siteImage;
  const url = config.siteUrl + config.pathPrefix + postSlug;
  return (
    <StaticQuery
      query={graphql`
        query plausibleDomainQuery {
          site {
            siteMetadata {
              plausibleDomain
            }
          }
        }
      `}
      render={(queryResults) => {
        const domain = queryResults.site.siteMetadata.plausibleDomain;
        return (
          <Helmet
            htmlAttributes={{
              lang: config.siteLanguage,
              prefix: "og: http://ogp.me/ns#"
            }}
          >
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />
            {/* Plausible Analytics */}
            {process.browser && (
              <script async defer data-domain={domain} src="https://plausible.io/js/plausible.js" />
            )}
          </Helmet>
        );
      }}
    />
  );
};

Seo.propTypes = {
  data: PropTypes.object,
  title: PropTypes.object,
  excerpt: PropTypes.object
};

export default Seo;
