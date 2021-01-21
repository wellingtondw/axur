import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkItem from '.';

describe('<LinkItem />', () => {
  it('should render correctly in the document', () => {
    const { container } = render(<LinkItem text="Same text" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a text in the document', () => {
    render(<LinkItem text="Same text" />);

    expect(
      screen.getByRole('link', { name: /same text/i }),
    ).toBeInTheDocument();
  });
});
