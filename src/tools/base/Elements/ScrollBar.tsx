
// ---------- import Packs
import React from 'react';
import { ScrollView } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements } from '../project';

type Tprops_ScrollBar = {
  pass: { styles: any[]; arrProps: any[]; arrItems: any; args: any };
};
export const ScrollBar = (props: Tprops_ScrollBar) => {
  const { styles, arrItems, arrProps, args } = props.pass;

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(styles);

  // ------- set User Element Properties (If Exists)
  let userElProps = {};

  for (const object of arrProps) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      console.log('IS A FUNCTION !!!!!!!!!!');
      console.log({ object });
      console.log({ newObj });
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      console.log('NOT FUNCTION');
      console.log({ object });
      console.log({ newObj });
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  const allProps = {
    style: [stl],
    ...userElProps,
  };

  return <ScrollView {...allProps}>{mapElements(arrItems, args)}</ScrollView>;
};

