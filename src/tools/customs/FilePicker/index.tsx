
// ---------- import Packs
import React from 'react';
import { Pressable } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

// ---------- import Local Tools
import { getStlValues, mapElements } from '../../base/project';

export const css =
  'color: #ddd; background-color: #666; font-size: 11px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  pass: {
    arrChildren: any[];
    styles: any[];
    arrFuncs: any[];
    pathReturn: any[];
    args: any;
  };
};

export const FilePicker = (props: Tprops) => {
  let { arrChildren, styles, arrFuncs, pathReturn, args } = props.pass;

  // ---------- set Load Images
  async function pickDocument() {
    const result: any = await DocumentPicker.getDocumentAsync({
      multiple: false,
    });

    console.log('%cFilePicker', css, result);
    for (const currFunc of arrFuncs) await currFunc(args, result);
  }

  const stl = getStlValues(styles);

  return (
    <Pressable style={[stl]} onPress={() => pickDocument()}>
      {mapElements(arrChildren, args)}
    </Pressable>
  );
};

