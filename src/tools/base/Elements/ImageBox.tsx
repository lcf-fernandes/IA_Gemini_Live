
// ---------- import Packs
import React from 'react';
import JSON5 from 'json5';
import { Image } from 'react-native';

// ---------- import Local Tools
import { getStlValues, pathSel, getVarValue } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    elementsProperties: any;
    styles: any;
    URIvariablePath: string[];
    args: any;
  };
};

function checkUrl(string: string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
const defaultUri =
  'https://www.budgetbatteries.com.au/wp-content/uploads/2021/12/Budget-batteries-placeholder.jpg';

// Element Image
export const ImageBox = (props: Tprops) => {
  // ------- set Props
  const { elementsProperties, styles, URIvariablePath, args } = props.pass;
  console.log({ URIvariablePath });

  // ---------- set Url Value as a single string
  let pathOrUri = URIvariablePath.join();

  const { condChildren, newArgChildren } = testArgs([pathOrUri], args);

  if (condChildren === 'arg') pathOrUri = newArgChildren;
  if (condChildren === 'var') {
    const joinedChld = pathOrUri.replace('$var_', '');
    console.log({ joinedChld });
    pathOrUri = useData(ct => pathSel(ct, joinedChld));
  }

  // Se for uma URL válida, usa diretamente, senão busca no useData
  const watchData = useData(ct => {
    if (checkUrl(pathOrUri)) return pathOrUri; // Se for uma URL, usa diretamente
    return pathSel(ct, pathOrUri); // Caso contrário, busca do caminho de dados
  });

  // ---------- set Styles
  const stl = getStlValues(styles);

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};
  for (let strObj of elementsProperties) {
    if (!strObj || typeof strObj !== 'string') continue;

    console.log('TEXT', { strObj });
    const parsedObject = JSON5.parse(strObj);

    for (const keyProp in parsedObject) {
      const valueProp = parsedObject[keyProp];
      const [hasVar, varValue] = getVarValue(valueProp, 'Component');
      userElProps[keyProp] = hasVar ? varValue : valueProp;
    }
  }

  console.log({ watchData });
  const isUrl = checkUrl(newArgChildren);
  console.log({ isUrl });

  const condFinalURI = isUrl ? newArgChildren : watchData || defaultUri;

  console.log({ condFinalURI });

  const allProps = {
    source: { uri: condFinalURI },
    style: [stl],
    resizeMode: 'cover',
    ...userElProps,
  };

  return <Image {...allProps} />;
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
    console.log('TEXT', { key });

    const foundItem = findFlatItem(args);
    if (foundItem && key in foundItem) {
      newArgChildren = foundItem[key];
      console.log('TEXT', { newArgChildren });
    }
  }

  if (newArgChildren === 'undefined') console.log('ARG NOT FOUND');

  return { condChildren, newArgChildren };
};
