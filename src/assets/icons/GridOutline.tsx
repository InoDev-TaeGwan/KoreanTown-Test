import * as React from 'react';
import {SvgCss} from 'react-native-svg';

const xml = `
<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Grid</title><rect x='48' y='48' width='176' height='176' rx='20' ry='20' fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><rect x='288' y='48' width='176' height='176' rx='20' ry='20' fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><rect x='48' y='288' width='176' height='176' rx='20' ry='20' fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/><rect x='288' y='288' width='176' height='176' rx='20' ry='20' fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
  `;

export default () => <SvgCss xml={xml} />;
