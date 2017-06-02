import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import RichTextEditor from './components/summernote/summernote';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
      <Route path="/summernote" component={RichTextEditor} />
  </Route>
);
