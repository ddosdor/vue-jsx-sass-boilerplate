/* eslint-disable camelcase */
export const h = (componentOrTag, properties, ...children) => ({
  componentOrTag, properties: properties || {}, children,
});

export const toKebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const parseObjectAsInlineStyle = styleObject => Object.keys(styleObject)
    .map(key => `${toKebabCase(key)}: ${styleObject[key]}`)
    .join('; ');

export const prepareGradientBackground = (background) => {
  const { gradient_type, color_one, color_second } = background;
  switch (gradient_type) {
    case 'horizontal':
      return `linear-gradient(to right, ${color_one} 0%,${color_second} 100%)`;
    case 'vertical':
      return ` linear-gradient(to bottom, ${color_one} 0%,${color_second} 100%)`;
    case 'diagonalToBottom':
      return `linear-gradient(135deg, ${color_one} 0%,${color_second} 100%)`;
    case 'diagonalToTop':
      return `linear-gradient(45deg, ${color_one} 0%,${color_second} 100%)`;
    case 'radial':
      return `radial-gradient(ellipse at center, ${color_one} 0%,${color_second} 100%)`;
    default:
      return '';
  }
};

export const prepareBoxShadow = (shadow) => {
  const { left, top, blur_main, blur_second, color } = shadow;
  return `${left}px ${top}px ${blur_main}px ${blur_second}px ${color}`;
};

export const prepareBorder = (border) => {
  const { width, type, color } = border;
  return `${width}px ${type} ${color}`;
};

export const prepareBorderRadius = (borderRadius) => {
  const { top_left, top_right, bottom_right, bottom_left } = borderRadius;
  return `${top_left}px ${top_right}px ${bottom_right}px ${bottom_left}px`;
};
