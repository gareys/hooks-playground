export type Country = {
  abbreviation: string;
  capital: string;
  currency: string;
  name: string;
  phone: string;
  population: number;
  media: {
    flag: string;
    emblem: string;
    orthographic: string;
  };
  id: number;
};

export const countriesService = {
  getCountries: async (): Promise<Country[]> =>
    await fetch('https://api.sampleapis.com/countries/countries').then((res) =>
      res.json()
    ),
};
