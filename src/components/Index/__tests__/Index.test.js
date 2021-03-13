import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Index from '../Index';

describe(Index.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });

  test('should display daily vocab!', () => {
    render(<Index />);
    expect(screen.getByText('daily vocab!'));
  });

  test('should display learn a new word everyday!', () => {
    render(<Index />);
    expect(screen.getByText('learn a new word everyday!'));
  });

  test('should display a Get  started button', () => {
    render(<BrowserRouter><Index /></BrowserRouter>);
    const gettingStartedElement = screen.getByText('Get Started');
    expect(gettingStartedElement.tagName).toBe('BUTTON');
    fireEvent.click(gettingStartedElement);
    expect(document.location.href).toBe('http://localhost/home');
  });
});
