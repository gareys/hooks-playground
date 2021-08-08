import { render, waitFor } from '@testing-library/react';
import { Mock } from 'ts-mockery';
import { countriesService, Country } from '../../services/countriesService';
import { Countries } from './Countries';

describe('Countries', () => {
  it('calls the countries service and renders the countries', async () => {
    jest
      .spyOn(countriesService, 'getCountries')
      .mockResolvedValue(
        Mock.of<Country[]>([{ name: 'US', id: 0, media: {} }])
      );

    const wrapper = render(<Countries />);

    await waitFor(() => {
      expect(wrapper.getByText('US')).toBeVisible();
    });

    expect(countriesService.getCountries).toHaveBeenCalledTimes(1);
  });
});
