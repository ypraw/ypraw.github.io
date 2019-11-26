import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function viberLink(url, _ref) {
  var title = _ref.title;

  assert(url, 'viber.url');
  return 'viber://forward' + objectToGetParams({
    text: (title || '') + ' ' + url
  });
}

var ViberShareButton = createShareButton('viber', viberLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: PropTypes.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

export default ViberShareButton;