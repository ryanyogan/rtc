var React = require('../vendor/react/react');
var Chat  = require('./components/chat');

window.app = (function() {
  var name = prompt("Please enter your name");
  React.renderComponent(Chat({
    name: name
  }), document.getElementById('chat'));
}());

