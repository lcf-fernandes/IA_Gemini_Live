
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

// Login
export const Login = (props: Tprops) => {
  console.log('INICIO DO LOGIN');

  // ---------- set Props
  const { elementProperties, styles, childrenItems, pressableFunctions, args } =
    props.pass;

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(styles);

  // ---------- set Actions
  const btn = async () => {
    console.log('clicou no btn signin');
  };

  // ---------- set Children Items
  const children = mapElements(childrenItems, args);
  console.log({ children });

  // ------- set User Element Properties (If Exists)
  const userElProps = {};

  for (const object of elementProperties) {
    for (const keyProp in object) {
      const valueProp = object[keyProp];
      userElProps[keyProp] = valueProp;
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

