import { useMediaQuery } from 'react-responsive';

export const size = {
  mobile: '320px',
  beforeTablet: '767px',
  tablet: '768px',
  beforeDesktop: '1279px',
  desktop: '1280px',
};

const mainContainerSizes = {
  mobile: '280px',
  tablet: '690px',
  desktop: '1170px',
};

export const device = {
  mobile: `(min-width: ${size.mobile}) and (max-width: ${size.beforeTablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.beforeDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
  largeDevice: `(min-width: ${size.beforeTablet})`,
  largeTablet: `(min-width: ${size.tablet})`,
  largeDesktop: `(min-width: ${size.desktop})`,
};

export const mainContainerWidth = () => {
  let container;
  const isMobileQuery = useMediaQuery({
    query: device.mobile,
  });
  const isTabletQuery = useMediaQuery({
    query: device.tablet,
  });
  const isDesktopQuery = useMediaQuery({
    query: device.desktop,
  });

  if (isMobileQuery) {
    container = mainContainerSizes.mobile;
  }
  if (isTabletQuery) {
    container = mainContainerSizes.tablet;
  }
  if (isDesktopQuery) {
    container = mainContainerSizes.desktop;
  }

  return container;
};

export const Mobile = ({ children }) => {
  const isMobileQuery = useMediaQuery({
    query: device.mobile,
  });
  return isMobileQuery && children;
};

export const Tablet = ({ children }) => {
  const isTabletQuery = useMediaQuery({
    query: device.tablet,
  });
  return isTabletQuery && children;
};

export const Desktop = ({ children }) => {
  const isDesktopQuery = useMediaQuery({
    query: device.desktop,
  });
  return isDesktopQuery && children;
};
