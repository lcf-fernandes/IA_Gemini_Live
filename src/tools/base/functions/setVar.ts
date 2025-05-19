
// ---------- import Local Tools
import { setData, getVarValue } from '../project';

export const css1 =
  'color: yellow; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: green; background-color: black; font-size: 10px; padding: 2px 6px; border-radius: 3px';

export const css3 =
  'color: yellow; background-color: red; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css4 =
  'color: yellow; background-color: darkred; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops_setVar = { args: any; pass: { keyPath: string[]; value: any } };

export const setVar = (props: Tprops_setVar) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { keyPath, value } = pass;
  console.log({ value });

  // ---------- join String
  const url = keyPath.reduce((prev, curr) => prev + curr, '');

  const typeValue = testArgsVars(value);

  // -------------------------------
  // ------------- IF is FREE VALUE
  // -------------------------------
  if (typeValue === 'free') {
    // --------- set Consoles System
    console.log('%csetVar', css1);
    console.log('path:', url);
    console.log('type:', typeValue);
    console.table('value:', value[0]);

    return setData({ path: url, value: value[0] });
  }

  // -----------------------------------
  // ------------ IF is ARG or VAR VALUE
  // -----------------------------------
  value = getCondValue(typeValue, value, args);
  // value = updatedValue;

  // --------- DEPURAR ERRO
  if (value === undefined) {
    // --------- set Consoles System
    console.log('%csetVar', css3);
    console.log('%csetVar path', css4, url);
    console.log('%csetVar type', css4, typeValue);
    console.log('%csetVar value', css4, 'o valor de value é ' + value);
  }

  // --------- DEPURAR OK
  if (value !== undefined) {
    // --------- set Consoles System
    console.log('%csetVar', css1);
    console.log('path:', url);
    console.log('type:', typeValue);
    console.table('value:', value);

    return setData({ path: url, value: value });
  }
};

const findFlatItem = obj => {
  if (typeof obj !== 'object' || obj === null) return null;

  if ('item' in obj) return obj.item;

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      for (const element of obj[key]) {
        const found = findFlatItem(element);
        if (found) return found;
      }
    } else if (typeof obj[key] === 'object') {
      const found = findFlatItem(obj[key]);
      if (found) return found;
    }
  }

  return null;
};

const testArgsVars = (value: string[]) => {
  let typeValue: 'free' | 'var' | 'arg' = 'free';

  const joinedChild = value.join();
  if (joinedChild.includes('$var_')) typeValue = 'var';
  if (joinedChild.includes('$arg_')) typeValue = 'arg';

  return typeValue;
};

const getCondValue = (typeValue, value, args) => {
  let updatedValue = undefined;
  console.log({ value });

  const joinedChild = value.join();
  if (joinedChild.includes('$var_')) typeValue = 'var';
  if (joinedChild.includes('$arg_')) typeValue = 'arg';

  // --------------------------
  // ------- Tratamento de ARGs
  // --------------------------
  if (typeValue === 'arg') {
    const key = joinedChild.split('_')[1];

    // ---- Para Callback Functions
    // ---- Ex. onChangeText do TextInput
    const condInput = key === 'callback';
    if (condInput) {
      updatedValue = args[0];
    }

    // ---- Para Listas
    // ---- Passa todo objeto 'item'
    const condFull = key === 'full';
    if (condFull) {
      updatedValue = findFlatItem(args);
    }

    // ---- Para Listas
    // ---- Seleciona um campo dentro de 'item'
    const foundItem = findFlatItem(args);
    if (foundItem && foundItem[key]) {
      updatedValue = foundItem[key];
    }

    if (updatedValue === undefined) console.log('ARG ERROR', { updatedValue });
  }

  // --------------------------
  // ------- Tratamento de VARs
  // --------------------------
  if (typeValue === 'var') {
    console.log({ joinedChild });
    const [condVar, varValue] = getVarValue(joinedChild, 'noComponent');
    if (condVar) updatedValue = varValue;
    if (!condVar) console.log('VAR ERROR', { updatedValue });
  }

  return updatedValue;
};
