import React from 'react';
import { } from '@testing-library/jest-dom';

import { render, screen, cleanup } from '@testing-library/react';
import Card from '../components/Card';

const cardProps = {
  id: 1,
  name: 'wind',
};

afterEach(() => {
  cleanup();
});

describe('Card component', () => {
  render(<Card id={cardProps.id} name={cardProps.name} />);
  const card = screen.getByTestId('card');

  test('Card Rendering', () => {
    expect(card).toBeInTheDocument();
  });

  test('Card Text', () => {
    expect(card).toHaveTextContent('WIND');
  });
});
