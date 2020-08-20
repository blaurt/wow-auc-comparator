import React from 'react';
import { mount } from 'enzyme';
import { Button } from './Button';
test('Example test', () => {
  const wrapper = mount(<Button />);
  expect(wrapper.text()).toMatch('Here is Button');
});
