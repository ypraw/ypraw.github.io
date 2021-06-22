import React from "react";
import { ThemeContext } from "../../layouts";
import { FaGithub, FaTelegram, FaLinkedin, FaTwitter } from "react-icons/fa";
import config from "../../../content/meta/config";
import _JSXStyle from "styled-jsx/style";

const About = () => {
  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <div className="wrapper">
            <div className="icons">
              <a href={config.authorGithub} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href={config.authorTelegram} target="_blank" rel="noreferrer">
                <FaTelegram />
              </a>
              <a href={config.authorLinkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a
                href={config.authorTwitterAccount}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>

              {/* TODO Codeforces */}
            </div>
            {/* <style jsx>{`
              .wrapper {
                text-align: center;
              }
              .icons {
                display: inline-block;
                font-size: 60px;
                :global(svg) {
                  margin: 10px;
                  fill: ${theme.color.brand.primary};
                }
              }
            `}</style> */}
            <style jsx>{`
              .wrapper {
                text-align: center;
              }
              .icons {
                display: inline-block;
                font-size: 40px;
                :global(svg) {
                  margin: 10px;
                  fill: ${theme.color.brand.primary} !important;
                }
              }
              @from-width tablet {
                .icons :global(a svg) {
                  font-size: 60px;
                  transition: 500ms;
                }
                @media (hover: hover) {
                  .icons :global(a:hover svg) {
                    margin-top: 0px;
                    margin-bottom: 20px;
                    fill: ${theme.color.neutral.white} !important;
                  }
                }
              }
              @from-width desktop {
                .icons :global(a svg) {
                  margin-top: 20px;
                  transition: 500ms;
                }
                @media (hover: hover) {
                  .icons :global(a:hover svg) {
                    margin-top: 0px;
                    margin-bottom: 20px;
                    fill: ${theme.color.neutral.white} !important;
                  }
                }
              }
            `}</style>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

export default About;
