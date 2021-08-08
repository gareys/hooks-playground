import { render, waitFor } from '@testing-library/react';
import { Mock } from 'ts-mockery';
import { countriesService, Country } from '../../services/countriesService';
import { Countries } from './Countries';

describe('Countries', () => {
  it('calls the countries service and renders the countries sorted alphabetically', async () => {
    jest.spyOn(countriesService, 'getCountries').mockResolvedValue(
      Mock.of<Country[]>([
        { name: 'US', id: 0, media: {} },
        { name: 'Ecuador', id: 1, media: {} },
        { name: 'Zimbabwe', id: 2, media: {} },
      ])
    );

    const wrapper = render(<Countries />);

    await waitFor(() => {
      expect(wrapper.getAllByTestId('country-item')).toHaveLength(3);
    });

    const countries = wrapper.getAllByTestId('country-item');
    expect(countriesService.getCountries).toHaveBeenCalledTimes(1);
    expect(countries[0].textContent).toContain('Ecuador');
    expect(countries[1].textContent).toContain('US');
    expect(countries[2].textContent).toContain('Zimbabwe');
  });
});
