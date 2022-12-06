import size from './size';

const device = {
  mobile: `screen and (min-width: ${size.mobile})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  maxTablet: `screen and (max-width: ${size.tablet})`,
};

export default device;
