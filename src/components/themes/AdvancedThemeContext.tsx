import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { customThemes } from './customThemes';
import { CustomTheme, CustomThemeContextType } from './types';

const AdvancedThemeContext = createContext<CustomThemeContextType | undefined>(
  undefined
);

export const AdvancedThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<CustomTheme>('light');
  return (
    <AdvancedThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={customThemes[theme]}>{children}</ThemeProvider>
    </AdvancedThemeContext.Provider>
  );
};

export const useAdvancedThemeContext = () => {
  const context = useContext(AdvancedThemeContext);
  if (context === undefined) {
    throw new Error(
      'useAdvancedThemeContext must be used within an AdvancedThemeContextProvider'
    );
  }
  return context;
};
