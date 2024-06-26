/**
 * ${componentName} icon set component.
 * Usage: <${componentName} name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons-variant/lib/create-icon-set';
const glyphMap = ${glyphMap};

const iconSet = createIconSet(glyphMap, '${fontFamily}', '${componentName}.ttf');

export default iconSet;
export const {
  Button,
  getImageSource,
  getImageSourceSync,
} = iconSet;
