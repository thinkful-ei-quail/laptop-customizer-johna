import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const testFeatures = {};
for(let x = 0; x < 6; ++x) {
  const testFeature = [];
  for(let y = 0; y < 2; ++y)
    testFeature[y] = { name: Math.random().toString(36), cost: Math.random() * 2000 };
  testFeatures[Math.random().toString(36)] = testFeature;
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App features={testFeatures} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
