import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1>Choose any Editor</h1>
        </div>
        <div className="panel-body">
          <h3><a href="http://localhost:3000/summernote">Summernote</a></h3>
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
