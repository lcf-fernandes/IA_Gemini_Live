
// ---------- import Packs
import JSON5 from 'json5';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements, getVarValue, pathSel } from '../project';
import { useData } from '../../..';

export const css =
  'color: lightblue; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  pass: {
    elementsProperties: any;
    styles: any;
    functions: any[];
    childrenItems: any;
    args: any;
  };
};

export const processFunctions = async (arr: any[]) => {
  const defaultVal = { trigger: '', arrFunctions: [] };

  for (const fn of arr) {
    if (typeof fn === 'function') {
      const result = await fn();
      return result || defaultVal;
    }
  }

  return defaultVal;
};

// DynView / BOX
export const DynView = (props: Tprops) => {
  if (!props) return <></>;

  const [sttTypeFunc, setTypeFunc] = useState('');
  const [sttVarPath, setVarPath] = useState('');
  const [sttPressFuncs, setPressFuncs] = useState<
    Array<(args: any) => Promise<void>>
  >([]);

  let condShow = useData(ct => pathSel(ct, sttVarPath));

  // ---------- set Props
  const { elementsProperties, styles, functions } = props.pass;
  const { childrenItems, args } = props.pass;

  const callFn = async () => {
    const { trigger, arrFunctions } = await processFunctions(functions);
    setTypeFunc(trigger);
    setPressFuncs(arrFunctions);

    // ------- set Init Functions (Capsules)
    if (trigger === 'on init') {
      for (const currFunc of arrFunctions) await currFunc(args);
    }
    if (trigger === 'on listen') {
      for (const currFunc of arrFunctions) {
        // setVarPath
        const res = await currFunc(args);
        if (typeof res === 'string') {
          console.log('VarPath', res);
          setVarPath(res);
        }
      }
    }
  };

  useEffect(() => {
    callFn();
  }, []);

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(styles);

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};
  for (let strObj of elementsProperties) {
    if (!strObj) continue;
    if (!props) continue;
    if (typeof strObj !== 'string') continue;

    const parsedObject = JSON5.parse(strObj);

    for (const keyProp in parsedObject) {
      const valueProp = parsedObject[keyProp];

      const [hasVar, varValue] = getVarValue(valueProp);

      if (hasVar) userElProps[keyProp] = varValue;
      if (!hasVar) userElProps[keyProp] = valueProp;
    }
  }

  const allProps = {
    style: stl,
    ...userElProps,
  };

  // ---------- set Render
  if (!sttTypeFunc)
    return <View {...allProps}>{mapElements(childrenItems, args)}</View>;

  if (sttTypeFunc === 'on press') {
    allProps.children = mapElements(childrenItems, args);
    allProps.onPress = async () => {
      for (const currFunc of sttPressFuncs) await currFunc(args);
    };

    return <Pressable {...allProps} />;
  }

  if (sttTypeFunc === 'on init')
    return <View {...allProps}>{mapElements(childrenItems, args)}</View>;

  if (sttTypeFunc === 'on listen') {
    return (
      condShow && <View {...allProps}>{mapElements(childrenItems, args)}</View>
    );
  }
};

