
// ---------- import Packs
import React from 'react';
import JSON5 from 'json5';
import { Text as RNText } from 'react-native';

// ---------- import Local Tools
import { getStlValues, pathSel, getVarValue } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: { arrProps: any; arrStyles: any; children: any; args?: any };
};

export const Text = (props: Tprops) => {
  // ---------- set Capsules Inputs
  const { arrProps, arrStyles, args } = props.pass;
  let { children } = props.pass;

  const { condChildren, newArgChildren } = testArgs(children, args);

  let watchChildren = '';

  if (condChildren === 'arg') children = newArgChildren;
  if (condChildren === 'var') {
    const joinedChld = children.join().replace('$var_', '');

    watchChildren = useData(ct => pathSel(ct, joinedChld));

    children = watchChildren;
  }

  // Não existe mais leitor de var leitor de args

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};
  for (let strObj of arrProps) {
    if (!strObj) continue;
    if (!props) continue;
    if (typeof strObj !== 'string') continue;

    const parsedObject = JSON5.parse(strObj);

    for (const keyProp in parsedObject) {
      const valueProp = parsedObject[keyProp];

      const [hasVar, varValue] = getVarValue(valueProp, 'Component');

      if (hasVar) userElProps[keyProp] = varValue;
      if (!hasVar) userElProps[keyProp] = valueProp;
    }
  }

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(arrStyles);

  const allProps = {
    style: stl,
    children,

    ...userElProps,
  };

  // ---------- set Render
  return <RNText {...allProps} />;
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

const testArgs = (children, args) => {
  let condChildren = '';
  let newArgChildren = 'undefined';

  const joinedChild = children.join();
  if (joinedChild.includes('$var_')) condChildren = 'var';
  if (joinedChild.includes('$arg_')) condChildren = 'arg';

  if (condChildren === 'arg') {
    const key = joinedChild.split('_')[1];

    const foundItem = findFlatItem(args);
    if (foundItem && foundItem[key]) {
      newArgChildren = foundItem[key];
    }
  }

  if (newArgChildren === 'undefined') console.log('ARG NOT FOUND');

  return { condChildren, newArgChildren };
};
