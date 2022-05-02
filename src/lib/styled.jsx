import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    --color-white: #ffffff;
    --color-emerald: #009fac;
    --color-blue: #001337;
    --color-dark-blue: #000d26;
    --color-light-blue: #e0f0ff;

    --bg-color-blue: var(--color-blue);
    --bg-color-dark-blue: var(--color-dark-blue);
    --bg-color-emerald: var(--color-emerald);
    --bg-color-light-blue: var(--color-light-blue);

    --main-header-54-bold: 700 54px/68px OpenSans;
    --main-header-54: 400 54px/68px OpenSans;

    --main-header-32-bold: 700 32px/44px OpenSans;
    --main-header-32: 400 32px/44px OpenSans;

    --main-header-20: 400 20px/30px OpenSans;

    --header-36: 600 36px/68px OpenSans;
    --header-24: 600 24px/33px OpenSans;
    --header-18: 600 18px/30px OpenSans;
    --header-16: 600 16px/22px OpenSans;
    --header-14: 600 14px/19px OpenSans;
    --header-12: 600 12px/16px OpenSans;
    --header-10: 600 10px/14px OpenSans;

    --main-18: 400 18px/30px OpenSans;
    --main-18-26-light: 300 18px/26px OpenSans;
    --main-16: 400 16px/22px OpenSans;
    --main-14-20: 400 14px/20px OpenSans;
    --main-14-20-light: 300 14px/20px OpenSans;
    --main-14-19: 400 14px/19px OpenSans;
    --main-12: 400 12px/16px OpenSans;
    --main-12-20: 400 12px/20px OpenSans;
    --main-10: 400 10px/14px OpenSans;

    --accent-14: italic 400 14px/19px OpenSans;
    --accent-12: italic 400 12px/17px OpenSans;
    --accent-10: italic 400 10px/14px OpenSans;

    --letter-spacing-1: 0.10000000149011612px;
    --letter-spacing-06: 0.05883720517158508px;

    /*
    пример применения:

    font: var(--header-36);
    letter-spacing: var(--letter-spacing);

    color: var(--color-white);
    background-color: var(--bg-color-blue);

    */
  }

  #root {
    // тут стили размера экрана и тд (тк в реакте все рендерится в <div id="root"></div>, а не в body)
  }
`;

export default GlobalStyles;
