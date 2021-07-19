import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primaryColor: string;
      secondaryColor: string;
      hover: string;
    };
  }
}
