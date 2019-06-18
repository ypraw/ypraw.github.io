import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function linkedinLink(url, _ref) {
  var title = _ref.title,
      description = _ref.description;

  assert(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + objectToGetParams({
    url: url,
    title: title,
    summary: description
  });
}

var LinkedinShareButton = createShareButton('linkedin', linkedinLink, function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: PropTypes.string,
  description: PropTypes.string
}, {
  windowWidth: 750,
  windowHeight: 600
});

export default LinkedinShareButton;