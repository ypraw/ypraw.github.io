import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon
} from "react-share";
import _JSXStyle from "styled-jsx/style";
import config from "../../../content/meta/config";
const PostShare = (props) => {
  const {
    post: {
      fields: { slug },
      frontmatter: { title },
      excerpt
    },
    theme
  } = props;

  const url = config.siteUrl + config.pathPrefix + slug;

  const iconSize = 36;
  const filter = (count) => (count > 0 ? count : "");

  return (
    <Fragment>
      <div className="share">
        <span className="label">SHARE</span>
        <div className="links">
          <TwitterShareButton
            url={url}
            title={title}
            additionalProps={{
              "aria-label": "Twitter share"
            }}
          >
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <TelegramShareButton
            url={url}
            title={title}
            additionalProps={{
              "aria-label": "Telegram share"
            }}
          >
            <TelegramIcon round size={iconSize} />
          </TelegramShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title} - ${excerpt}`}
            additionalProps={{
              "aria-label": "Facebook share"
            }}
          >
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {(count) => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            description={excerpt}
            additionalProps={{
              "aria-label": "LinkedIn share"
            }}
          >
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
        </div>
      </div>

      <style jsx>{`
        .share {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .links {
          display: flex;
          flex-direction: row;
          :global(.SocialMediaShareButton) {
            margin: 0 0.8em;
            cursor: pointer;
          }
        }
        .label {
          font-size: 1.2em;
          margin: 0 1em 1em;
          color: ${theme.color.brand.primary};
        }
        @from-width tablet {
          .share {
            flex-direction: row;
            margin: ${theme.space.inset.l};
          }
          .label {
            margin: ${theme.space.inline.m};
          }
        }
      `}</style>
    </Fragment>
  );
};

PostShare.propTypes = {
  post: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default PostShare;
