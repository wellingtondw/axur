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

  it('should render with white background and black color if the theme is primary', () => {
    render(<ContentBox title="Same title" />);

    expect(screen.getByTestId('content-box-container')).toHaveStyle({
      background: '#fff',
      color: '#222',
    });
  });

  it('should render with black background and white color if the theme is secondary', () => {
    render(<ContentBox title="Same title" theme="secondary" />);

    expect(screen.getByTestId('content-box-container')).toHaveStyle({
      background: '#222',
      color: '#ddd',
    });
  });
});
