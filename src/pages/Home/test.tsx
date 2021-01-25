import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import api from '../../services/api';
import Home from '.';

const apiMock = new MockAdapter(api);

describe('<HomePage />', () => {
  beforeEach(() => {
    apiMock.onPost('/crawl').reply(200, {
      id: '30vbllyb',
    });
  });

  it('should render correctly in the document', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to add new term', async () => {
    render(<Home />);
    const inputEl = screen.getByPlaceholderText(
      'Digite o termo para ser inspecionado',
    ) as HTMLInputElement;
    const buttonEl = screen.getByTitle('Cadastrar novo termo');
    const termsListEl = screen.getByTestId('terms-list');

    await act(async () => {
      await fireEvent.change(inputEl, { target: { value: 'some term' } });
      await fireEvent.click(buttonEl);
    });

    await waitFor(() => {
      expect(termsListEl.getElementsByTagName('a').length).toEqual(1);
      expect(screen.getByText('some term')).toBeInTheDocument();
      expect(inputEl.value).toBe('');
    });
  });

  it('should be able to render url term list with active status', async () => {
    apiMock.onGet(`crawl/30vbllyb`).reply(200, {
      id: '30vbllyb',
      status: 'active',
      urls: [
        'http://hiring.axreng.com/index2.html',
        'http://hiring.axreng.com/htmlman1/chcon.1.html',
      ],
    });

    render(<Home />);

    const linkEl = screen.getByText('some term');
    const contentBoxContainerEl = screen.getByTestId('home-content-container');

    await act(async () => {
      await fireEvent.click(linkEl);
    });

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /some term - 30vbllyb/i }),
      ).toBeInTheDocument();
      expect(screen.getByText('Em andamento')).toBeInTheDocument();
      expect(
        screen.getByText('http://hiring.axreng.com/htmlman1/chcon.1.html'),
      ).toBeInTheDocument();
      expect(
        screen.getByText('http://hiring.axreng.com/index2.html'),
      ).toBeInTheDocument();
      expect(contentBoxContainerEl.getElementsByTagName('a').length).toBe(2);
    });
  });

  it('should be able to render url term list with done status', async () => {
    apiMock.onGet(`crawl/30vbllyb`).reply(200, {
      id: '30vbllyb',
      status: 'done',
      urls: [
        'http://hiring.axreng.com/index2.html',
        'http://hiring.axreng.com/htmlman1/chcon.1.html',
      ],
    });

    render(<Home />);
    const linkEl = screen.getByText('some term');

    await act(async () => {
      await fireEvent.click(linkEl);
    });

    await waitFor(() => {
      expect(screen.getByText('Concluído')).toBeInTheDocument();
    });
  });

  it('should be able to render url term list with other status', async () => {
    apiMock.onGet(`crawl/30vbllyb`).reply(200, {
      id: '30vbllyb',
      status: 'some status',
      urls: [],
    });

    render(<Home />);
    const linkEl = screen.getByText('some term');

    await act(async () => {
      await fireEvent.click(linkEl);
    });

    await waitFor(() => {
      expect(screen.getByTestId('status').parentElement).toHaveTextContent(
        'Erro',
      );
    });
  });
});
