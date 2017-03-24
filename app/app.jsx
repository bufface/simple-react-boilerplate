import React from 'react';
import ReactDOM from 'react-dom';

import ChildComponent from 'ChildComponent';

// Styles
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <ChildComponent />,
  document.getElementById('app')
);