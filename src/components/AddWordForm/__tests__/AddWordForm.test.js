/* eslint-disable react/jsx-props-no-spreading */
import {
  render, screen, fireEvent, act,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import AddWord from '../AddWordForm';

describe(AddWord.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockProps = {
    addNewVocab: jest.fn(),
  };

  test('should match snapshot', () => {
    const { container } = render(<AddWord {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  test('should display add a new word', () => {
    render(<AddWord {...mockProps} />);
    expect(screen.getByText('add a new word'));
  });

  test('should display a tick button', () => {
    render(<BrowserRouter><AddWord {...mockProps} /></BrowserRouter>);
    const addElement = screen.getByText('✓');
    expect(addElement.tagName).toBe('BUTTON');
    act(() => { fireEvent.click(addElement); });
    // expect(document.location.href).toBe('http://localhost/home');
  });
});
