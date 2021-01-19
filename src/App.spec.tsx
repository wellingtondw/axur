import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<App />);

    expect(
      screen.getByRole('heading', { name: /hello world/i }),
    ).toBeInTheDocument();
  });
});
