import Editor from 'draft-js-editor'
import React from 'react';
import {EditorState} from 'draft-js';

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <div className="panel panel-primary">
      <div className="panel-heading">
        <h3>Draft-Js-Editor</h3>
      </div>
        <div className="panel-body">
          <Editor
            onChange={(editorState) => this.setState({ editorState })}
            editorState={this.state.editorState}
          />
      </div>
    </div>
  );
  }
}

export default MyClass;
