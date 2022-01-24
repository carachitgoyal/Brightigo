import { extendTheme } from '@chakra-ui/react';
import '@fontsource/playfair-display';
import '@fontsource/work-sans';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    attire: {
      1: '#ffffff',
      2: '#626365',
      3: '#929292',
      4: '#C7EDE4',
      5: '#000000',
    },
  },
  fonts: {
    body: 'Work Sans',
  },
  styles: {
    global: {
      'html, body': {
        background: 'purple.50',
        color: 'purple.900',
      },
    },
  },
});

export default theme;
