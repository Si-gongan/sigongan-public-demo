import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    backgroundBase: string;
    background1: string;
    background2: string;
    background3: string;
    backgroundEmp: string;

    textBase: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    textEmp: string;

    accent1: string;
    accent2: string;

    border1: string;
    border2: string;

    primary1: string;
    primary2: string;

    increment: string;
    decrement: string;
  }
}
