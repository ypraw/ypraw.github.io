import React from "react";
import PropTypes from "prop-types";
import "prismjs/themes/prism-tomorrow.css";
import Loadable from "react-loadable";

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import Author from "./Author";
// import Comments from "./Comments";
import NextPrev from "./NextPrev";
import Loading from "../Loading";

const Share = Loadable({
  loader: () => import("./PostShare"),
  loading: Loading
});

const CommentsLazy = Loadable({
  loader: () => import("./Comments"),
  loading: Loading
});

const Post = ({
  post,
  post: {
    html,
    htmlAst,
    fields: { prefix, slug },
    frontmatter: { title, author, category }
  },
  authornote,
  next: nextPost,
  prev: prevPost,
  theme
}) => {
  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
        <Meta
          prefix={prefix}
          author={author}
          category={category}
          theme={theme}
        />
      </header>
      {/* <Bodytext html={html} theme={theme} /> */}
      <Bodytext content={post} theme={theme} />
      <footer>
        <Share post={post} theme={theme} />
        <Author note={authornote} theme={theme} />
        <NextPrev next={nextPost} prev={prevPost} theme={theme} />
        <CommentsLazy slug={slug} theme={theme} />
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default Post;
