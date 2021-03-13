import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

describe(App.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test('should render Index component', async () => {
    await waitFor(() => render(<App />));
    expect(screen.getByTestId('Index'));
  });

  // test('should render Home component', async () => {
  //   await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
  //   expect(screen.getByTestId('Home'));
  // });
});
