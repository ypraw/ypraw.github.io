import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function weiboLink(url, _ref) {
  var title = _ref.title,
      image = _ref.image;

  assert(url, 'weibo.url');
  assert(image, 'weibo.image');

  return 'http://service.weibo.com/share/share.php?' + objectToGetParams({
    url: url,
    title: title,
    pic: image
  });
}

var WeiboShareButton = createShareButton('weibo', weiboLink, function (props) {
  return {
    title: props.title,
    image: props.image
  };
}, {
  title: PropTypes.string,
  image: PropTypes.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

export default WeiboShareButton;