import React from 'react';
import ReactDOM from 'react-dom';
import Flick from './YonghwaHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flick />, div);
  ReactDOM.unmountComponentAtNode(div);
});
