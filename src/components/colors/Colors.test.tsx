import { MockedProvider } from '@apollo/client/testing';
import { Colors, Color, ALL_COLORS_QUERY } from './Colors';
import { act, render, waitFor } from '@testing-library/react';

describe('Colors', () => {
  const mocks = [
    {
      request: {
        query: ALL_COLORS_QUERY,
        variables: {
          page: 0,
          perPage: 25,
        },
      },
      result: {
        data: {
          allColors: [{ name: 'black', hex: '#000000' }],
        },
      },
    },
    {
      request: {
        query: ALL_COLORS_QUERY,
        variables: {
          page: 1,
          perPage: 25,
        },
      },
      result: {
        data: {
          allColors: [{ name: 'white', hex: '#FFFFFF' }],
        },
      },
    },
    {
      request: {
        query: ALL_COLORS_QUERY,
        variables: {
          page: 2,
          perPage: 25,
        },
      },
      result: {
        data: {
          allColors: [],
        },
      },
    },
  ];

  it('calls the colors service and renders the colors', async () => {
    const wrapper = render(
      <MockedProvider mocks={mocks}>
        <Colors />
      </MockedProvider>
    );

    await waitFor(() => expect(wrapper.getByText('black')).toBeVisible());
    expect(wrapper.getAllByTestId('color-row')).toHaveLength(1);
  });

  it('calls the colors service again and renders more colors', async () => {
    const wrapper = render(
      <MockedProvider mocks={mocks}>
        <Colors />
      </MockedProvider>
    );

    await waitFor(() => expect(wrapper.getByText('black')).toBeVisible());
    act(() => wrapper.getByText('GET MORE COLORS').click());
    await waitFor(() => () => expect(wrapper.getByText('white')).toBeVisible());
    expect(wrapper.getAllByTestId('color-row')).toHaveLength(2);
  });

  it('does not display the GET MORE COLORS button when there are no more colors', async () => {
    const wrapper = render(
      <MockedProvider mocks={mocks}>
        <Colors />
      </MockedProvider>
    );

    await waitFor(() => expect(wrapper.getByText('black')).toBeVisible());
    act(() => wrapper.getByText('GET MORE COLORS').click());
    await waitFor(() => expect(wrapper.getByText('white')).toBeVisible());
    expect(wrapper.getAllByTestId('color-row')).toHaveLength(2);
    act(() => wrapper.getByText('GET MORE COLORS').click());
    await waitFor(() =>
      expect(wrapper.queryByText('GET MORE COLORS')).not.toBeInTheDocument()
    );
    expect(wrapper.getAllByTestId('color-row')).toHaveLength(2);
  });
});
