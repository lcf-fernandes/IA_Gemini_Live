
// ---------- import Local Tools
import { getVarValue } from './getVarValue';

// ---------- import Packs
import { Style, getStylesForProperty } from 'css-to-react-native';

// ----------- set Style Variable Selection
export const getStlValues = (arrGetValues: any) => {
  const allStls = arrGetValues.flatMap(style => {
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
        // console.log({ process2 });
        return process2;
      }

      const varToPx = String(setPx(varValue));
      const process3 = getStylesForProperty(key, varToPx, true);
      // console.log({ process3 });
      return process3;
    });

    return result as Style[];
    // return result;
  });

  return allStls;
};

