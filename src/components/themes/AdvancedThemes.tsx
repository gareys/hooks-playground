import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAdvancedThemeContext } from './AdvancedThemeContext';
import { CustomTheme } from './types';

export const AdvancedThemes = () => {
  const { theme, setTheme } = useAdvancedThemeContext();
  return (
    <ThemeSandbox>
      <h2>Themes</h2>
      <SelectThemeLabel htmlFor="theme">Choose a Theme: </SelectThemeLabel>
      <select
        id="theme"
        name="theme"
        defaultValue={theme}
        onChange={(ev) => {
          return setTheme(ev.currentTarget.value as CustomTheme);
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {theme === 'light' && ' 🌞'}
      {theme === 'dark' && ' 🌚'}
      <h3>Sample Paragraph</h3>
      <p>
        In this example, the context of the custom theme provider is wrapped
        into a separate file with safeguards (helpful error messaging) against
        usage outside the provider. It requires little to no implementation when
        utilizing the context within a child other than using the custom
        useAdvancedThemeContext hook. The advantage of this implementation is
        ease of use, composability, and reusability of the context as well as
        the aforementioned safeguard.
      </p>
      <h3>Sample Link</h3>
      <p>
        <Link to="/themes">See the basic themes context implementation</Link>
      </p>
    </ThemeSandbox>
  );
};

const ThemeSandbox = styled.div`
  padding: 0 10px;
  width: calc(100%-10px);
  height: 50vh;
  color: ${(props) => props.theme.colors.primaryColor};
  background: ${(props) => props.theme.colors.background};

  a {
    color: ${(props) => props.theme.colors.secondaryColor};
    &:hover {
      color: ${(props) => props.theme.colors.hover};
    }
  }

  select {
    border-color: ${(props) => props.theme.colors.secondaryColor};
    color: ${(props) => props.theme.colors.primaryColor};
    background: ${(props) => props.theme.colors.background};
  }
`;

const SelectThemeLabel = styled.label`
  display: block;
`;
