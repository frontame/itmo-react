import { createGlobalStyle } from 'styled-components';

import OpenSansLightWoff2 from './OpenSans/OpenSans-Light.woff2';
import OpenSansLightWoff from './OpenSans/OpenSans-Light.woff';
import OpenSansLightTtf from './OpenSans/OpenSans-Light.ttf';

import OpenSansLightItalicWoff2 from './OpenSans/OpenSans-LightItalic.woff2';
import OpenSansLightItalicWoff from './OpenSans/OpenSans-LightItalic.woff';
import OpenSansLightItalicTtf from './OpenSans/OpenSans-LightItalic.ttf';

import OpenSansRegularWoff2 from './OpenSans/OpenSans-Regular.woff2';
import OpenSansRegularWoff from './OpenSans/OpenSans-Regular.woff';
import OpenSansRegularTtf from './OpenSans/OpenSans-Regular.ttf';

import OpenSansRegularItalicWoff2 from './OpenSans/OpenSans-Italic.woff2';
import OpenSansRegularItalicWoff from './OpenSans/OpenSans-Italic.woff';
import OpenSansRegularItalicTtf from './OpenSans/OpenSans-Italic.ttf';

import OpenSansSemiBoldWoff2 from './OpenSans/OpenSans-SemiBold.woff2';
import OpenSansSemiBoldWoff from './OpenSans/OpenSans-SemiBold.woff';
import OpenSansSemiBoldTtf from './OpenSans/OpenSans-SemiBold.ttf';

import OpenSansSemiBoldItalicWoff2 from './OpenSans/OpenSans-SemiBoldItalic.woff2';
import OpenSansSemiBoldItalicWoff from './OpenSans/OpenSans-SemiBoldItalic.woff';
import OpenSansSemiBoldItalicTtf from './OpenSans/OpenSans-SemiBoldItalic.ttf';

import OpenSansBoldWoff2 from './OpenSans/OpenSans-Bold.woff2';
import OpenSansBoldWoff from './OpenSans/OpenSans-Bold.woff';
import OpenSansBoldTtf from './OpenSans/OpenSans-Bold.ttf';

import OpenSansBoldItalicWoff2 from './OpenSans/OpenSans-BoldItalic.woff2';
import OpenSansBoldItalicWoff from './OpenSans/OpenSans-BoldItalic.woff';
import OpenSansBoldItalicTtf from './OpenSans/OpenSans-BoldItalic.ttf';

import OpenSansExtraBoldWoff2 from './OpenSans/OpenSans-ExtraBold.woff2';
import OpenSansExtraBoldWoff from './OpenSans/OpenSans-ExtraBold.woff';
import OpenSansExtraBoldTtf from './OpenSans/OpenSans-ExtraBold.ttf';

import OpenSansExtraBoldItalicWoff2 from './OpenSans/OpenSans-ExtraBoldItalic.woff2';
import OpenSansExtraBoldItalicWoff from './OpenSans/OpenSans-ExtraBoldItalic.woff';
import OpenSansExtraBoldItalicTtf from './OpenSans/OpenSans-ExtraBoldItalic.ttf';

const OpenSansFonts = createGlobalStyle`
  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansLightWoff2}) format('woff2'),
      url(${OpenSansLightWoff}) format('woff'),
      url(${OpenSansLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansLightItalicWoff2}) format('woff2'),
      url(${OpenSansLightItalicWoff}) format('woff'),
      url(${OpenSansLightItalicTtf}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansRegularWoff2}) format('woff2'),
      url(${OpenSansRegularWoff}) format('woff'),
      url(${OpenSansRegularTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansRegularItalicWoff2}) format('woff2'),
      url(${OpenSansRegularItalicWoff}) format('woff'),
      url(${OpenSansRegularItalicTtf}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansSemiBoldWoff2}) format('woff2'),
      url(${OpenSansSemiBoldWoff}) format('woff'),
      url(${OpenSansSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansSemiBoldItalicWoff2}) format('woff2'),
      url(${OpenSansSemiBoldItalicWoff}) format('woff'),
      url(${OpenSansSemiBoldItalicTtf}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansBoldWoff2}) format('woff2'),
      url(${OpenSansBoldWoff}) format('woff'),
      url(${OpenSansBoldTtf}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansBoldItalicWoff2}) format('woff2'),
      url(${OpenSansBoldItalicWoff}) format('woff'),
      url(${OpenSansBoldItalicTtf}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansExtraBoldWoff2}) format('woff2'),
      url(${OpenSansExtraBoldWoff}) format('woff'),
      url(${OpenSansExtraBoldTtf}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
      url(${OpenSansExtraBoldItalicWoff2}) format('woff2'),
      url(${OpenSansExtraBoldItalicWoff}) format('woff'),
      url(${OpenSansExtraBoldItalicTtf}) format('truetype');
    font-weight: 800;
    font-style: italic;
  }
`;

export default OpenSansFonts;
