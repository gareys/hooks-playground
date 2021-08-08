import { State, statesService } from '../../services/statesService';
import { Mock } from 'ts-mockery';
import { render, waitFor } from '@testing-library/react';
import { States } from './States';

describe('States', () => {
  it('calls the states service and renders the states', async () => {
    jest
      .spyOn(statesService, 'getStates')
      .mockResolvedValue(Mock.of<State[]>([{ name: 'Alabama', id: 0 }]));

    const wrapper = render(<States />);

    await waitFor(() =>
      expect(wrapper.getByText('Alabama', { exact: false })).toBeVisible()
    );

    expect(statesService.getStates).toHaveBeenCalledTimes(1);
  });
});
