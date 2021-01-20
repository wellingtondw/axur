import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  it('should render correctly in the document', () => {
    const { container } = render(<Button title="Same title">Same Text</Button>);

    expect(screen.getByTitle(/Same title/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
