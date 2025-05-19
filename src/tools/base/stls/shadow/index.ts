
// ---------- import Packs
import { Platform, ShadowStyleIOS } from 'react-native';

type Tprops_shadows = {
  pass: {
    shadowColor: any[];
    shadowOffset: any[];
    shadowOpacity: any[];
    shadowRadius: any[];
  };
};
export const shadows = (props: Tprops_shadows) => {
  let { shadowColor, shadowOffset, shadowOpacity, shadowRadius } = props.pass;

  var keyValuePairs = shadowOffset.join().slice(1, -1).split(', ');
  var iAmAObj: { width: number; height: number } = { width: 0, height: 0 };
  keyValuePairs.forEach(function (pair) {
    var parts = pair.split(':');
    var key = parts[0].trim();
    var value = parseFloat(parts[1].trim());
    iAmAObj[key] = value;
  });

  const isIOs = Platform.OS === 'ios';
  const isWeb = Platform.OS === 'web';
  const isAndroid = Platform.OS === 'android';

  const toValue = (varValue, str?) => {
    if (str === 'str') return varValue.join().replace('px', '');
    if (str !== 'str') return Number(varValue.join().replace('px', ''));
  };

  if (isIOs || isWeb) {
    const objReturn: ShadowStyleIOS = {
      shadowOffset: iAmAObj,
      shadowColor: toValue(shadowColor, 'str'),
      shadowOpacity: toValue(shadowOpacity),
      shadowRadius: toValue(shadowRadius),
    };
    console.log({ objReturn });

    return objReturn;
  }

  if (isAndroid) {
    const elevation = toValue(shadowRadius) - 4;
    const shadowAndroid = { elevation };
    console.log({ shadowAndroid });
    return shadowAndroid;
  }
};

// Fonte - textShadowColor
type Tprops_textShadowColor = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const textShadowColor = (props: Tprops_textShadowColor) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { textShadowColor: arrayValue };
};

// Sombreamento do Texto - textShadowOffset // DESCONTINUADO (REMOVER NO FLAX / DEPOIS APAGAR DAQUI)
type Tprops_textShadowOffset = {
  pass: { arrayValue: any[] };
};
export const textShadowOffset = (props: Tprops_textShadowOffset) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { textShadowOffset: arrayValue };
};

