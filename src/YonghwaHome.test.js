import React from 'react';
import ReactDOM from 'react-dom';
import YonghwaHome from './YonghwaHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YonghwaHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
