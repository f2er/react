/**
 * @jsx React.DOM
 */

var MARKDOWN_COMPONENT = "\
/** @jsx React.DOM */\n\
\n\
var converter = new Showdown.converter();\n\
\n\
var MarkdownEditor = React.createClass({\n\
  getInitialState: function() {\n\
    return {value: 'Type some *markdown* here!'};\n\
  },\n\
  handleKeyUp: React.autoBind(function() {\n\
    this.setState({value: this.refs.textarea.getDOMNode().value});\n\
  }),\n\
  render: function() {\n\
    return (\n\
      <div className=\"MarkdownEditor\">\n\
        <h3>Input</h3>\n\
        <textarea onKeyUp={this.handleKeyUp} ref=\"textarea\">\n\
          {this.state.value}\n\
        </textarea>\n\
        <h3>Output</h3>\n\
        <div\n\
          className=\"content\"\n\
          dangerouslySetInnerHTML={{\n\
            __html: converter.makeHtml(this.state.value)\n\
          }}\n\
        />\n\
      </div>\n\
    );\n\
  }\n\
});\n\
\n\
React.renderComponent(<MarkdownEditor />, mountNode);\
";

React.renderComponent(
  <ReactPlayground codeText={MARKDOWN_COMPONENT} />,
  document.getElementById('markdownExample')
);
