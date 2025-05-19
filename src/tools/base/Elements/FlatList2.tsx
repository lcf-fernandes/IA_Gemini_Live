
// ---------- import Packs
import React from 'react';
import JSON5 from 'json5';
import { FlatList } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements, getVarValue, pathSel } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    elementProperties: any;
    pData: any;
    itemElements: any;
    styles: any;
    args: any;
  };
};

// FlatList2 - ccc_flatList (newBase)
export const FlatList2 = (props: Tprops) => {
  // ------- set Caps Inputs
  const { elementProperties, pData, itemElements, styles, args } = props.pass;

  // ---------- set Data Listener

  let watchData = '';
  if (typeof pData === 'string') watchData = useData(ct => pathSel(ct, pData));

  // ---------- set List Item
  const renderItem = ({ item, index }: any) => (
    <>{mapElements(itemElements, { item, index })}</>
  );

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};
  for (let strObj of elementProperties) {
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

  // ------- set Styles
  const stl = getStlValues(styles);

  const allProps = {
    style: stl,
    data: watchData,
    renderItem,

    ...userElProps,
  };

  // ------- set Render
  return <FlatList {...allProps} />;
};
