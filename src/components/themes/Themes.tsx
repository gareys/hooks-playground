import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CustomThemeContext } from './ThemesScene';
import { CustomTheme } from './types';

export const Themes = () => {
  const { theme, setTheme } = useContext(CustomThemeContext)!;
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
        In this example, the custom theme context lives inside of the parent
        component, ThemesScene. The implementation is very basic and not as
        easily reusable as the Advanced Theme Context. However, it gets the job
        done and provides a basic example of React Context.
      </p>
      <h3>Sample Link</h3>
      <p>
        <Link to="/advancedThemes">
          See the advanced themes context implementation
        </Link>
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
