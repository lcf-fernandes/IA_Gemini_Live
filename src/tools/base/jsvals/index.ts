
// ---------- import Packs
import { Platform } from 'react-native';

// ---------- import Local Tools
import { argSel, getCtData } from '../project';

const css2 =
  'color: cyan; background-color: #444; font-size: 11px; padding: 2px 6px; border-radius: 3px';

// ---------------- varReader
// --------------------------
type Tprops_varReader = { pass: { path: string[] | string } };
export const varReader = (props: Tprops_varReader) => {
  const { path } = props.pass;

  let newPath = '';

  const isArray = Array.isArray(path);
  if (isArray) {
    newPath = path.reduce((prev, curr) => prev + curr, '');
  } else {
    newPath = path;
  }
  const returnVarValue = getCtData(newPath);
  console.log('%cvarReader', css2, { varPath: newPath, value: returnVarValue });

  return returnVarValue;
};

// ---------------- argReader
// --------------------------
type Tprops_argReader = { pass: { argPath: string; args: any } };
export const argReader = (props: Tprops_argReader) => {
  const { argPath, args } = props.pass;

  let newArgPath = '';

  const isArray = Array.isArray(argPath);
  if (isArray) {
    newArgPath = argPath.reduce((prev, curr) => prev + curr, '');
  } else {
    newArgPath = argPath;
  }
  const returnArgValue = argSel(args, newArgPath);
  console.log('%cargReader', css2, {
    varPath: newArgPath,
    value: returnArgValue,
  });

  return returnArgValue;
};

// ------------ joinStringValue
// ----------------------------
type Tprops_j3 = { pass: { arrayStrings: any; joinSeparator: any } };
export const j3 = (props: Tprops_j3) => {
  const { arrayStrings, joinSeparator } = props.pass;

  return arrayStrings.join(joinSeparator);
};

// --------- propJsonStrignify
// ---------------------------
type Tprops_j7 = {
  pass: { objectProperties: any };
};
export const j7 = (props: Tprops_j7) => {
  const { objectProperties } = props.pass;

  return JSON.stringify(objectProperties);
};

// ---------------------- Direct Return
// -------- propObj, propString, propArray
// ------ stringValue, arrayValue, freeValue
type Tprops_j8 = {
  pass: { propertieValues: any };
};
export const j8 = (props: Tprops_j8) => {
  console.log('CONSOLEJ8', props);
  const { propertieValues } = props.pass;
  console.log('CONSOLEJ8', propertieValues);
  const nativeDevices = Platform.OS !== 'web';
  const isAString = typeof propertieValues === 'string';
  const checkValues = isAString && propertieValues?.includes('px');

  if (checkValues && nativeDevices) {
    return parseInt(propertieValues.replace(/D/g, ''), 10);
  }

  console.log('CONSOLEJ8', propertieValues);
  return propertieValues;
};

// ---------- prop urlEncoded
// --------------------------
type Tprops_j10 = {
  pass: { objectProperties: {} };
};
export const j10 = (props: Tprops_j10) => {
  const { objectProperties } = props.pass;

  return new URLSearchParams(objectProperties);
};

// ---------------- toggleVar
// --------------------------
type Tprops_j12 = { pass: { varToToggle: any; args: any } };
export const j12 = (props: Tprops_j12) => {
  const { varToToggle, args } = props.pass;

  return varToToggle;
};
