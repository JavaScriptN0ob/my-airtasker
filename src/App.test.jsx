import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('mounts', () => {
    mount(<App />);
  });
});
