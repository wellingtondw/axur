import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Input from '.';

describe('<Input />', () => {
  it('should render correctly in the document', () => {
    const { container } = render(<Input placeholder="same placeholder" />);

    expect(screen.getByPlaceholderText(/same placeholder/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a white border bottom by default', () => {
    render(<Input placeholder="same placeholder" />);

    expect(
      screen.getByPlaceholderText(/same placeholder/i).parentElement,
    ).toHaveStyle({
      borderBottom: '1px solid #ddd',
    });
  });

  it('should render a orange border color if is focused', async () => {
    render(<Input placeholder="same placeholder" />);
    const inputEl = screen.getByPlaceholderText(/same placeholder/i);
    const inputContainerEl = screen.getByTestId('input-container');

    fireEvent.focus(inputEl);
    await waitFor(() => {
      expect(inputContainerEl).toHaveStyle('border-color: #ff5824');
    });

    fireEvent.blur(inputEl);
    await waitFor(() => {
      expect(inputContainerEl).not.toHaveStyle('border-color: #ff5824');
    });
  });
});
