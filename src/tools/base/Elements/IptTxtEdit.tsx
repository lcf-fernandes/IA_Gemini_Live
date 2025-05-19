
// ---------- import Packs
import React from 'react';
import JSON5 from 'json5';
import { TextInput } from 'react-native';

// ---------- import Local Tools
import { getVarValue, getStlValues, pathSel, setData } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    propsArray: any;
    stylesArray: any;
    funcsArray: any;
    path: any;
    args: any;
  };
};

// IptTxtEdit - Entrada de Texto com prop value
export const IptTxtEdit = (props: Tprops) => {
  // ------- set IptTxt Inputs
  const { propsArray, stylesArray, funcsArray, path, args } = props.pass;

  // --------------------------
  // ----------- set COND VALUE
  // --------------------------
  const joinedPath = path.join();

  // ------- set Data to Watch
  const [sttText, setText] = React.useState('');
  const editData = useData(ct => pathSel(ct, joinedPath));

  const fxFunction1 = () => {
    if (editData) setText(editData);
  };

  React.useEffect(fxFunction1, [editData]);

  // ---------- Functions
  const getTxt = async (val: string) => {
    setText(val);

    for (const currFunc of funcsArray) {
      setData({ path: joinedPath, value: val });
      await currFunc(val, args);
    }
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};
  for (let strObj of propsArray) {
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
    style: stlsUser,
    onChangeText: getTxt,
    value: sttText,
    placeholderTextColor: '#ccc',
    placeholder: 'Escreva...',

    ...userElProps,
  };

  return <TextInput {...allProps} />;
};
