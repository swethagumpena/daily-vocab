import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../Card';

describe('example', () => {
  test('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
});

describe(Card.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<Card word="abet" sentence="abet a suicide" />);
    expect(container).toMatchSnapshot();
  });

  test('should display a word', () => {
    render(<Card word="abet" sentence="abet a suicide" />);
    expect(screen.getByText('abet'));
  });

  test('should display a sentence', () => {
    render(<Card word="abet" sentence="abet a suicide" />);
    expect(screen.getByText('abet a suicide'));
  });
});
