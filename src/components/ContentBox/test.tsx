import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentBox from '.';

describe('<ContentBox />', () => {
  it('should render correctly in the document', () => {
    const { container } = render(<ContentBox title="Same title" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a title in the document', () => {
    render(<ContentBox title="Same title" />);

    expect(
      screen.getByRole('heading', { name: /same title/i }),
    ).toBeInTheDocument();
  });
});
