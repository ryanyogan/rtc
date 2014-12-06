var React = require('../../vendor/react/react');
var MessageList = require('./message_list');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  send: function(e) {
    if (e.keyCode !== 13 || e.target.value === "") {
      return;
    }

    // Append a new message
    var newMessage = this.props.name + ": " + e.target.value;
    this.addMessage(newMessage);
  },

  addMessage: function(newMessage) {
    this.state.messages.push(newMessage);
    this.refs.messageForm.getDOMNode().value = '';

    return this.setState({
      messages: this.state.messages
    });
  },
  render: function() {
    return React.DOM.div({
      className: 'chat'
    }, this.messageList(), this.messageForm());
  },
  messageForm: function() {
    return React.DOM.input({
      className: 'form-control',
      name: 'message',
      onKeyUp: this.send,
      placeholder: 'Send message...',
      ref: 'messageForm',
      type: 'text'
    });
  },
  messageList: function() {
    return MessageList({
      messages: this.state.messages
    });
  }
});
