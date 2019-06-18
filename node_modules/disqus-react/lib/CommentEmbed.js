'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentEmbed = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RADIX_BASE = 36;

var CommentEmbed = exports.CommentEmbed = function (_React$Component) {
    _inherits(CommentEmbed, _React$Component);

    function CommentEmbed() {
        _classCallCheck(this, CommentEmbed);

        return _possibleConstructorReturn(this, (CommentEmbed.__proto__ || Object.getPrototypeOf(CommentEmbed)).apply(this, arguments));
    }

    _createClass(CommentEmbed, [{
        key: 'getSrc',
        value: function getSrc() {
            var post = Number(this.props.commentId).toString(RADIX_BASE);
            var parentParam = this.props.showParentComment ? '1' : '0';
            var mediaParam = this.props.showMedia ? '1' : '0';

            return 'https://embed.disqus.com/p/' + post + '?p=' + parentParam + '&m=' + mediaParam;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('iframe', {
                src: this.getSrc(),
                width: this.props.width,
                height: this.props.height,
                seamless: 'seamless',
                scrolling: 'no',
                frameBorder: '0'
            });
        }
    }]);

    return CommentEmbed;
}(_react2.default.Component);

CommentEmbed.defaultProps = {
    showMedia: true,
    showParentComment: true,
    width: 420,
    height: 320
};