import React from 'react';
import {Link} from 'react-router';
import {
ButtonToolbar,
Button,
Modal
} from 'react-bootstrap';

class HomePage extends React.Component {

  constructor(){
    super();
    this.state = {
      showSummernote: false,
      showReactDraft:false,
      showDraftJs: false,
      showTinyMce:false,
      showCke:false,
      showTrumbowyg: false,
      showJodit: false
    };
  }
  render() {
        let close = () => this.setState({
          showSummernote: false,
          showReactDraft:false,
          showDraftJs: false,
          showTinyMce:false,
          showCke:false,
          showTrumbowyg: false,
          showJodit: false
        });
    return (
     <div className="modal-container" style={{height: 200}}>
        <div className="panel-heading">
          <h1>Choose any Editor</h1>
        </div>
        <div className="panel-body">
          <ButtonToolbar>
              <h3>Summernote</h3>
            <Button bsStyle="primary"  bsSize="small" onClick={() => this.setState({ showSummernote: true})}>Details</Button>
            <Button bsStyle="primary" bsSize="small"><Link to = '/summernote' style={{color: 'white'}} target="_blank">Demo</Link></Button>
          </ButtonToolbar>
            <Modal
          show={this.state.showSummernote}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Summernote</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>Drag&Drop images</li>
              <li>Preserve formatting of pasted content</li>
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
      <h3>TinyMCE</h3>
      <ButtonToolbar>
        <Button bsStyle="primary"  bsSize="small" onClick={() => this.setState({ showTinyMce: true})}>Details</Button>
          <Button bsStyle="primary" bsSize="small"><a href="https://www.tinymce.com/" style={{color: 'white'}} target="_blank">Demo</a></Button>
      </ButtonToolbar>
      <Modal
    show={this.state.showTinyMce}
    onHide={close}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">TinyMCE</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ul>
        <li>Drag&Drop images</li>
        <li>Preserve formatting of pasted content</li>
        <li>Can Insert tables</li>
        <li>Print Functionality</li>
        <li>Spell Checker</li>
        <li>Font Styling</li>
        <li>License:<a href = 'https://www.tinymce.com/pricing/' target="_blank">Click here</a></li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={close}>Close</Button>
    </Modal.Footer>
  </Modal>
  </div>
  <div className="panel-body">
    <h3>CKEditor</h3>
    <ButtonToolbar>
      <Button bsStyle="primary"  bsSize="small" onClick={() => this.setState({ showCke: true})}>Details</Button>
        <Button bsStyle="primary" bsSize="small"><a href="http://ckeditor.com/" style={{color: 'white'}} target="_blank">Demo</a></Button>
    </ButtonToolbar>
    <Modal
  show={this.state.showCke}
  onHide={close}
  container={this}
  aria-labelledby="contained-modal-title"
>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title">CKEditor</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <ul>
      <li>Drag&Drop images</li>
      <li>Preserve formatting of pasted content</li>
      <li>Can Insert tables</li>
      <li>Print Functionality</li>
      <li>Font Styling</li>
      <li>License:<a href = 'http://ckeditor.com/pricing' target="_blank">Click here</a></li>
    </ul>
  </Modal.Body>
  <Modal.Footer>
    <Button onClick={close}>Close</Button>
  </Modal.Footer>
</Modal>
</div>

<div className="panel-body">
  <h3>Jodit</h3>
  <ButtonToolbar>
    <Button bsStyle="primary"  bsSize="small" onClick={() => this.setState({ showJodit: true})}>Details</Button>
      <Button bsStyle="primary" bsSize="small"><a href = 'http://xdsoft.net/jodit/' style={{color: 'white'}} target="_blank">Demo</a></Button>
  </ButtonToolbar>
  <Modal
    show={this.state.showJodit}
    onHide={close}
    container={this}
    aria-labelledby="contained-modal-title"
    >
<Modal.Header closeButton>
  <Modal.Title id="contained-modal-title">Jodit</Modal.Title>
</Modal.Header>
<Modal.Body>
  <ul>
    <li>Drag&Drop images</li>
    <li>Preserve formatting of pasted content</li>
    <li>Can Insert tables</li>
    <li>Pure JavaScript. No libraries</li>
    <li>Font Styling</li>
    <li>Insert clean HTML from Microsoft Word</li>
    <li>License:<a href = 'http://xdsoft.net/jodit/#download' target="_blank">Click here</a></li>
  </ul>
</Modal.Body>
<Modal.Footer>
  <Button onClick={close}>Close</Button>
</Modal.Footer>
</Modal>
</div>
<div className="panel-body">
  <h3>Trumbowyg</h3>
  <ButtonToolbar>
    <Button bsStyle="primary"  bsSize="small" onClick={() => this.setState({ show: true})}>Details</Button>
        <Button bsStyle="primary" bsSize="small"><a href = 'http://alex-d.github.io/Trumbowyg/' style={{color: 'white'}} target="_blank">Demo</a></Button>
  </ButtonToolbar>
  <Modal
show={this.state.showTrumbowyg}
onHide={close}
container={this}
aria-labelledby="contained-modal-title"
>
<Modal.Header closeButton>
  <Modal.Title id="contained-modal-title">Trumbowyg</Modal.Title>
</Modal.Header>
<Modal.Body>
  <ul>
    <li>Can not Drag and Drop images</li>
    <li>Preserve formatting of pasted content</li>
    <li>Can not Insert tables</li>
    <li>No Print Functionality</li>
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
    <ButtonToolbar>
  <h3>React-Draft-wysiwyg</h3>

    <Button bsStyle="primary"  bsSize="small" onClick={() => this.setState({ showReactDraft: true})}>Details</Button>
      <Button bsStyle="primary" bsSize="small"><Link to = '/react_draft_wysiwyg' style={{color: 'white'}} target="_blank">Demo</Link></Button>
  </ButtonToolbar>
  <Modal
show={this.state.showReactDraft}
onHide={close}
container={this}
aria-labelledby="contained-modal-title"
>
<Modal.Header closeButton>
  <Modal.Title id="contained-modal-title">React-Draft-wysiwyg</Modal.Title>
</Modal.Header>
<Modal.Body>
  <ul>
    <li>Can not insert Images</li>
    <li>Can not Insert tables</li>
    <li>No Print Functionality</li>
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
  <h3>Draft-Js-Editor</h3>
  <ButtonToolbar>
    <Button bsStyle="primary"  bsSize="small" onClick={() => this.setState({ showDraftJs: true})}>Details</Button>
      <Button bsStyle="primary" bsSize="small"><Link to = '/draft_js_editor' style={{color: 'white'}} target="_blank">Demo</Link></Button>
  </ButtonToolbar>
  <Modal
show={this.state.showDraftJs}
onHide={close}
container={this}
aria-labelledby="contained-modal-title"
>
<Modal.Header closeButton>
  <Modal.Title id="contained-modal-title">Draft-Js-Editor</Modal.Title>
</Modal.Header>
<Modal.Body>
  <ul>
    <li>Can not insert Images</li>
    <li>Can not Insert tables</li>
    <li>No Print Functionality</li>
    <li>Font Styling</li>
    <li>License:<bold>MIT License</bold></li>
  </ul>
</Modal.Body>
<Modal.Footer>
  <Button onClick={close}>Close</Button>
</Modal.Footer>
</Modal>
</div>
      </div>
    );
  }
}

export default HomePage;
