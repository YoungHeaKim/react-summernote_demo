import React from 'react';
import {Link} from 'react-router';
import {
Button,
Modal,
} from 'react-bootstrap';

class HomePage extends React.Component {

  constructor(){
    super();
    this.state = {
      show: false,
    };
  }
  render() {
        let close = () => this.setState({ show: false});
    return (
     <div className="modal-container" style={{height: 200}}>
        <div className="panel-heading">
          <h1>Choose any Editor</h1>
        </div>
        <div className="panel-body">
          <h3><a href="http://localhost:3000/summernote">Summernote</a></h3>
            <Button
              bsStyle="primary"
              bsSize="small"
              onClick={() => this.setState({ show: true})}>
              Details
            </Button>
            <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Summernote</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>Paste images from clipboard</li>
              <li>Saves images directly in the content of the field using base64 encoding, so you don't need to implement image handling at all</li>
              <li>Can Insert tables</li>
              <li>Print Functionality</li>
              <li>Font Styling</li>
              <li>License:<bold>MIT License</bold></li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
          </div>
        <div className="panel-body">
          <h3><a href="http://localhost:3000/react_draft_wysiwyg">React-Draft-wysiwyg</a></h3>
      </div>
      <div className="panel-body">
        <h3><a href="http://localhost:3000/draft_js_editor">Draft-Js-Editor</a></h3>
    </div>
    <div className="panel-body">
      <h3><a href="https://www.tinymce.com/">TinyMCE</a></h3>
  </div>
  <div className="panel-body">
    <h3><a href="http://ckeditor.com/">CKEditor</a></h3>
</div>
<div className="panel-body">
  <h3><a href="http://alex-d.github.io/Trumbowyg/">Trumbowyg</a></h3>
</div>
<div className="panel-body">
  <h3><a href="http://xdsoft.net/jodit/">Jodit</a></h3>
</div>
      </div>
    );
  }
}

export default HomePage;
