import React from 'react';
import { } from '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render, screen, cleanup } from '@testing-library/react';
import store from '../redux/configureStore';

import DarkList from '../components/DarkList';

afterEach(() => {
  cleanup();
});

const listProps = {
  name: 'Apocalypse Ravi',
  rarity: 5,
  attribute: 'dark',
};

describe('List renders on the page', () => {
  render(
    <Provider store={store}>
      <DarkList
        name={listProps.name}
        rarity={listProps.rarity}
        attribute={listProps.attribute}
      />
    </Provider>,
  );
  const list = screen.getByTestId('list');

  test('List renders', () => {
    expect(list).toBeInTheDocument();
  });
});
