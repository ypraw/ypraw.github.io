import React from "react";
import PropTypes from "prop-types";
import rehypeReact from "rehype-react";
import Icons from "../../components/About/About";
import ReImg from "./ReImg";
import { Link } from "gatsby";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "re-icons": Icons,
    "re-img": ReImg,
    "re-link": Link
  }
}).Compiler;

const Bodytext = props => {
  // const { html, theme } = props;
  const { content, theme } = props;
  const html = props.content.html;

  return (
    <React.Fragment>
      {/* <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} /> */}
      <div className="bodytext">{renderAst(content.htmlAst)}</div>

      <style jsx>{`
        .bodytext {
          animation-name: bodytextEntry;
          animation-duration: ${theme.time.duration.long};
          :global(h2),
          :global(h3) {
            margin: 1.5em 0 1em;
          }

          :global(h1) {
            color: ${theme.color.neutral.white};
          }
          :global(h2) {
            line-height: ${theme.font.lineHeight.s};
            font-size: ${theme.font.size.l};
            color: ${theme.color.neutral.gray.e};
          }

          :global(h3) {
            font-size: ${theme.font.size.m};
            line-height: ${theme.font.lineHeight.m};
            color: ${theme.color.neutral.gray.e};
          }
          :global(h4) {
            color: ${theme.color.neutral.gray.e};
          }

          :global(p) {
            font-size: ${theme.font.size.s};
            line-height: ${theme.font.lineHeight.xxl};
            margin: 0 0 1.5em;
            color: ${theme.color.neutral.white};
          }
          :global(ul) {
            list-style: circle;
            margin: 0 0 1.5em;
            padding: 0 0 0 1.5em;
          }
          :global(li) {
            margin: 0.7em 0;
            line-height: 1.5;
            color: ${theme.color.neutral.white};
          }
          :global(a) {
            font-weight: ${theme.font.weight.bold};
            color: ${theme.color.brand.primary};
            text-decoration: underline;
          }
          :global(a.gatsby-resp-image-link) {
            border: 0;
            display: block;
            margin: 2.5em 0;
            border-radius: ${theme.size.radius.default};
            overflow: hidden;
            border: 1px solid ${theme.line.color};
          }
          :global(code.language-text) {
            background: ${theme.color.neutral.gray.j};
            text-shadow: none;
            color: inherit;
            padding: 0.1em 0.3em 0.2em;
            border-radius: 0.1em;
          }
        }

        @keyframes bodytextEntry {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

// Bodytext.propTypes = {
//   html: PropTypes.string.isRequired,
//   theme: PropTypes.object.isRequired
// };
Bodytext.propTypes = {
  content: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default Bodytext;
