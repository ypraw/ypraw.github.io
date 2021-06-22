import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import _JSXStyle from "styled-jsx/style";

const moment = require("moment-timezone");

const Footer = (props) => {
  const { theme } = props;
  const buildTime = useStaticQuery(query).site.buildTime;
  const timeGMT = moment(buildTime).tz("Asia/Jakarta").format("dddd, Do MMMM YYYY | HH:mm");

  return (
    <React.Fragment>
      <footer className="footer">
        <a href="https://www.github.com/ypraw/">
          This blog is open source. Last updated {timeGMT} GMT/UTC+7
        </a>
      </footer>
      {/* --- STYLES --- */}
      <style jsx>{`
        .footer {
          background: ${theme.background.color.dark};
          padding: ${theme.space.inset.default};
          padding-top: 0;
          padding-bottom: 120px;
          text-align: center;
          font-size: ${theme.font.size.xxs};
          :global(a) {
            color: ${theme.color.brand.primary};
          }
        }

        @from-width desktop {
          .footer {
            padding: 0 1em 1.5em;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;

const query = graphql`
  query Info {
    site {
      buildTime
    }
  }
`;
