export type State = {
  id: number;
  name: string;
  abv: string;
  capital: string;
  largest_city: string;
  admitted_to_union: string;
  population: string;
  flag: string;
};

export const statesService = {
  getStates: async (): Promise<State[]> =>
    await fetch('https://api.sampleapis.com/the-states/the-states').then(
      (res) => res.json()
    ),
};
