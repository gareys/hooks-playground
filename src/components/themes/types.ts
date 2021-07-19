export type CustomTheme = 'light' | 'dark';

export type CustomThemeContextType = {
  theme: CustomTheme;
  setTheme: React.Dispatch<React.SetStateAction<CustomTheme>>;
};
