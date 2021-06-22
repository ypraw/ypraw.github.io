import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import _JSXStyle from "styled-jsx/style";
const Hit = (props) => {
  const { hit } = props;

  return (
    <React.Fragment>
      <Link to={hit.slug}>{hit.title}</Link>

      {/* --- STYLES --- */}
      <style jsx global>{`
        .ais-Hits-item {
          padding: 0.5em 0 0.5em 1em;
          position: relative;
          font-size: 1.2em;
          display: block;
          width: 100%;
        }
        .ais-Hits-item a {
          color: #ffffff;
        }
        .ais-Hits-item:before {
          content: "•";
          position: absolute;
          top: 0.5em;
          left: 0.1em;
        }
      `}</style>
    </React.Fragment>
  );
};

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Hit;
