import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import RichTextEditor from './components/summernote/summernote';
import Draftjs from './components/draftjs/draftjs';
import Textbox from './components/react-draft-wysiwyg/react_draft_wysiwyg';
import MyClass from './components/draft-js-editor/draft_js_editor';
import MyComponent from './components/trumbowyg/trumbowyg';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
      <Route path="/summernote" component={RichTextEditor} />
      <Route path="/react_draft_wysiwyg" component={Textbox} />
      <Route path="/draft_js_editor" component={MyClass} />
      <Route path="/trumbowyg" component={MyComponent} />
  </Route>
);
