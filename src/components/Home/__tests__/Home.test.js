/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from '../Home';

describe(Home.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockProps = [
    { addWordData: { word: 'abet', sentence: 'abet a suicide', id: 1 } },
  ];

  test('should match snapshot', () => {
    const { container } = render(<Home vocab={mockProps} />);
    expect(container).toMatchSnapshot();
  });

  test('should render Card component', () => {
    render(<Home vocab={mockProps} />);
    expect(screen.getByTestId('Card'));
  });

  test('should display welcome back', () => {
    render(<Home vocab={mockProps} />);
    expect(screen.getByText('welcome back'));
  });

  test('should display a + button', () => {
    render(<BrowserRouter><Home vocab={mockProps} /></BrowserRouter>);
    const addWordElement = screen.getByText('+');
    expect(addWordElement.tagName).toBe('BUTTON');
    fireEvent.click(addWordElement);
    expect(document.location.href).toBe('http://localhost/add-word');
  });
});
