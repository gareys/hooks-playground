import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { customThemes } from './customThemes';
import { Themes } from './Themes';
import { CustomTheme, CustomThemeContextType } from './types';

export const CustomThemeContext = createContext<
  CustomThemeContextType | undefined
>(undefined);

export const ThemesScene = () => {
  const [theme, setTheme] = useState<CustomTheme>('light');
  return (
    <CustomThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={customThemes[theme]}>
        <Themes />
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
