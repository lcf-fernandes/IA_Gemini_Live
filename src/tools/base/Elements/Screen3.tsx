
// ---------- import Packs
import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements } from '../project';
import { useRoutes } from '../../..';

// ---------- Types
type Tprops = {
  pass: {
    pathScreen: string;
    styles: any;
    screenElements: any;
    functions: any;
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

// Screen3 (newBase)
export const Screen3 = ({ pass }: Tprops) => {
  const { pathScreen } = pass;
  const currRoute = useRoutes(ct => ct.currRoute);
  const condShow = pathScreen === currRoute;

  return condShow ? <Screen3Render pass={pass} /> : null;
};

function Screen3Render({ pass }: Tprops) {
  const { styles, screenElements, functions, args } = pass;
  const [sttTypeFunc, setTypeFunc] = useState('');
  const [sttPressFuncs, setPressFuncs] = useState<
    Array<(args: any) => Promise<void>>
  >([]);

  const callFn = async () => {
    const { trigger, arrFunctions } = await processFunctions(functions);
    setTypeFunc(trigger);
    setPressFuncs(arrFunctions);

    // ------- set Init Functions (Capsules)
    if (trigger === 'on init') {
      for (const currFunc of arrFunctions) await currFunc(args);
    }
  };

  useEffect(() => {
    callFn();
  }, []);

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(styles);

  // ---------- set Render
  if (!sttTypeFunc) {
    return <View style={stl}>{mapElements(screenElements, args)}</View>;
  }

  if (sttTypeFunc === 'on press') {
    const onPressFunc = async () => {
      for (const currFunc of sttPressFuncs) await currFunc(args);
    };
    return (
      <Pressable style={stl} onPress={onPressFunc}>
        {mapElements(screenElements, args)}
      </Pressable>
    );
  }

  if (sttTypeFunc === 'on init') {
    return <View style={stl}>{mapElements(screenElements, args)}</View>;
  }
}
