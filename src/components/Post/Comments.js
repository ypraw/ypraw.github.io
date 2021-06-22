import React from "react";
import PropTypes from "prop-types";
import { DiscussionEmbed } from "disqus-react";

import config from "../../../content/meta/config";
import _JSXStyle from "styled-jsx/style";
const Comments = (props) => {
  const { theme } = props || {};

  const disqusConfig = props.article
    ? {
        url: props.article.url,
        identifier: props.article.id,
        title: props.article.title
      }
    : null;
  return (
    <React.Fragment>
      <div id="post-comments" className="comments">
        <DiscussionEmbed shortname={config.disqusShortname} config={disqusConfig} />
      </div>
      <style jsx>{`
        .comments {
          margin: 0 -8px ${theme.space.default};
        }
      `}</style>
    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  article: PropTypes.shape
};

export default Comments;
