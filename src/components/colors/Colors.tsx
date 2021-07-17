import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';

const ALL_COLORS = gql`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`;

export const Colors = () => {
  const [nextPage, setNextPage] = useState(1);
  const { loading, error, data, fetchMore } = useQuery(ALL_COLORS, {
    variables: {
      page: 0,
      perPage: 25,
    },
  });

  const handleGetMoreColors = () => {
    fetchMore({
      variables: {
        page: nextPage,
        perPage: 25,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.allColors.length) {
          setNextPage(0);
          return prev;
        }
        return {
          allColors: [...prev.allColors, ...fetchMoreResult.allColors],
        };
      },
    });
    setNextPage(nextPage + 1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ColorTable>
      <tbody>
        {data.allColors.map(({ name, hex }: { name: string; hex: string }) => (
          <ColoredRow key={hex} hex={hex}>
            <ColoredCell>{name}</ColoredCell>
          </ColoredRow>
        ))}
        {nextPage > 0 && (
          <MoreColorsRow
            key={'NEXT_PAGE'}
            hex={'#FFFFFF'}
            onClick={() => handleGetMoreColors()}
          >
            <ColoredCell>GET MORE COLORS</ColoredCell>
          </MoreColorsRow>
        )}
      </tbody>
    </ColorTable>
  );
};

const ColorTable = styled.table`
  width: 100%;
`;

const ColoredRow = styled.tr<{ hex: string }>`
  background-color: ${({ hex }) => hex};
  color: ${({ hex }) => getContrastingTextColor(hex)};
`;

const MoreColorsRow = styled(ColoredRow)`
  text-align: center;
  cursor: pointer;
`;

const ColoredCell = styled.td`
  padding: 10px;
  font-weight: 500;
`;

const getContrastingTextColor = (hexcolor: string) => {
  hexcolor = hexcolor.replace('#', '');
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#FFFFFF';
};
