
// ---------- import Packs
import React from 'react';
import { Pressable } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements } from '../project';

type Tprops = {
  pass: {
    elementProperties: any;
    styles: any;
    childrenItems: any;
    pressableFunctions: any;
    args: any;
  };
};

// Pressable3 - ccc_pressable (newBase)
export const Pressable3 = (props: Tprops) => {
  // ---------- set Props
  const { elementProperties, styles, childrenItems, pressableFunctions, args } =
    props.pass;

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(styles);

  // ---------- set Actions
  const btn = () => {
    const callFn = async () => {
      for (const currFunc of pressableFunctions) await currFunc(args);
    };
    callFn().catch(err => console.log('Pressable - ', { err }));
  };

  // ---------- set Children Items
  const children = mapElements(childrenItems, args);

  // ------- set User Element Properties (If Exists)
  let userElProps = {};

  for (const object of elementProperties) {
    const isFnc = typeof object === 'function';
    let newObj = {};
    if (isFnc) {
      newObj = object();
      userElProps = { ...userElProps, ...newObj };
    }

    if (!isFnc) {
      for (const keyProp in object) {
        const valueProp = object[keyProp];
        userElProps[keyProp] = valueProp;
      }
    }
  }

  const allProps = {
    style: [stl],
    onPress: btn,
    children,

    ...userElProps,
  };

  // ---------- set Render
  return <Pressable {...allProps} />;
};

