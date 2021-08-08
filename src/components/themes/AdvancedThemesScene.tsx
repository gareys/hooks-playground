import { AdvancedThemeContextProvider } from './AdvancedThemeContext';
import { AdvancedThemes } from './AdvancedThemes';

export const AdvancedThemesScene = () => {
  return (
    <AdvancedThemeContextProvider>
      <AdvancedThemes />
    </AdvancedThemeContextProvider>
  );
};
