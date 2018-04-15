import React from 'react';
import renderer from 'react-test-renderer';

import Toggle from '@/Toggle';

describe('Toggle', () => {
  test('should match react-test-renderer snapshot', () => {
    const component = renderer.create(<Toggle />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the toggle
    tree.children[1].props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the toggle
    tree.children[1].props.onClick();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
