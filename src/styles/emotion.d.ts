import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      text: string;
      background: string;
      primary: string;
      secondary: string;
      border: string;
      muted: string;
    };
    lineChart: {
      primary: string;
      secondary: string;
      primaryBlue: string;
      secondaryBlue: string;
      dotStroke: string;
    };
    searchBar: {
      background: string;
    };
    mainBtn: {
      background: string;
      content: string;
    };
    subBtn: {
      background: string;
      content: string;
      border: string;
    };
    clearBtn: {
      background: string;
      color: string;
    };
    card: {
      background: string;
      color: string;
    };
  }
}
