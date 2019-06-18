import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function googlePlusLink(url) {
  assert(url, 'googlePlus.url');

  return 'https://plus.google.com/share' + objectToGetParams({ url: url });
}

var GooglePlusShareButton = createShareButton('googlePlus', googlePlusLink, undefined, undefined, {
  windowWidth: 550,
  windowHeight: 400
});

export default GooglePlusShareButton;