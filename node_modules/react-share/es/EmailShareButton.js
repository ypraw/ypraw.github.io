import PropTypes from 'prop-types';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function emailLink(url, _ref) {
  var subject = _ref.subject,
      body = _ref.body;

  return 'mailto:' + objectToGetParams({ subject: subject, body: body || url });
}

var EmailShareButton = createShareButton('email', emailLink, function (props) {
  return {
    subject: props.subject,
    body: props.body
  };
}, {
  subject: PropTypes.string,
  body: PropTypes.string
}, {
  openWindow: false,
  onClick: function onClick(link) {
    window.location.href = link;
  }
});

export default EmailShareButton;