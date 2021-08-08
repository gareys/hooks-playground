import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { countriesService, Country } from '../../services/countriesService';
import { ImageWithErrorFallback } from '../shared/ImageWithErrorFallback';

export const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const sortedCountries = countries.sort((countryA, countryB) => {
    if (countryA.name < countryB.name) {
      return -1;
    }
    if (countryA.name > countryB.name) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    const getCountries = async () => {
      const countriesJson = await countriesService.getCountries();
      setCountries(countriesJson);
    };
    getCountries();
  }, []);

  return (
    <CountryList>
      {sortedCountries.map((country) => (
        <li key={country.id}>
          <CountryItem>
            <CountryFlag>
              <FlagImg src={country.media.flag} />
            </CountryFlag>
            <CountryDetails>
              <h2>{country.name}</h2>
              <CountryDetailsList>
                <li>
                  <strong>Capital:&nbsp;&nbsp;&nbsp;</strong>
                  {country.capital}
                </li>
                <li>
                  <strong>Population:&nbsp;&nbsp;&nbsp;</strong>
                  {country.population?.toLocaleString() || 'N/A'}
                </li>
                <li>
                  <strong>Currency:&nbsp;&nbsp;&nbsp;</strong>
                  {country.currency || 'N/A'}
                </li>
              </CountryDetailsList>
            </CountryDetails>
            {country.media.emblem && (
              <CountryEmblem>
                <EmblemImg src={country.media.emblem} />
              </CountryEmblem>
            )}
          </CountryItem>
        </li>
      ))}
    </CountryList>
  );
};

const CountryList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const CountryItem = styled.div`
  display: flex;
  padding: 5px 0;
`;

const CountryFlag = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 150px;

  &:after {
    z-index: -1;
    width: 100px;
    position: relative;
    right: 115px;
    content: 'N/A';
    text-align: center;
  }
`;

const FlagImg = styled(ImageWithErrorFallback)`
  border: 2px solid #fff;
  width: 200px;
  min-width: 200px;
  min-height: 100px;
  height: auto;
`;

const CountryEmblem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100%;
`;

const EmblemImg = styled(ImageWithErrorFallback)`
  max-height: 100px;
`;

const CountryDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  h2 {
    margin: 15px 0;
  }
`;

const CountryDetailsList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
