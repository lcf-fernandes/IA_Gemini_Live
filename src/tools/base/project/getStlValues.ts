
// ---------- import Packs
import JSON5 from 'json5';
import { Style, getStylesForProperty } from 'css-to-react-native';

// ---------- import Local Tools
import { getVarValue } from './getVarValue';

// ----------- set Style Variable Selection
export const getStlValues = (arrGetValues: string[]) => {
  const arrStyles = arrGetValues.map(value => {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }

    const trimmedString = value.trim();

    const parsedObject = JSON5.parse(trimmedString);

    return parsedObject;
  });

  const allStls = arrStyles.flatMap(style => {
    if (style.shadowOffset) return style;

    const possibleValues = Object.keys(style);

    const setPx = (stlVal: any) => {
      const checkNum = typeof stlVal === 'number';
      const condVal = checkNum ? String(stlVal) + 'px' : stlVal;

      return condVal;
    };

    const result = possibleValues.flatMap(key => {
      const stlVal = style[key];

      const [condVar, varValue] = getVarValue(stlVal, 'noComponent');

      if (!condVar) {
        const valToPx = String(setPx(stlVal));
        const process2 = getStylesForProperty(key, valToPx);

        return process2;
      }

      const varToPx = String(setPx(varValue));
      const process3 = getStylesForProperty(key, varToPx, true);

      return process3;
    });

    return result as Style[];
  });

  return allStls;
};
