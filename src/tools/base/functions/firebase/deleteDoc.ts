
import { getCtData } from '../../project';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

export const css1 =
  'color: red; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: yellow; background-color: red; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  args: any;
  pass: {
    arrRefStrings: string[];
    arrPathData: string[];
    arrFuncs: any[];
  };
};

export const deleteDocTool = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { arrRefStrings, arrFuncs } = pass;
  // ---------- set Local Imports

  // -----------------------------
  // -------- set Firestore Call 1
  // -----------------------------
  const fbInit = getCtData('all.temp.fireInit');

  const fireInit: any = getFirestore(fbInit);
  const refColl = doc(fireInit, ...arrRefStrings);
  await deleteDoc(refColl);

  // -----------------------------
  // -------- set Firestore Call 2
  // -----------------------------

  // ---------- set Get Value Functions

  for (const currFunc of arrFuncs) await currFunc(arrRefStrings, args);

  console.log('%cdeleteDoc ok', css1);
  console.log('%cReferencia da Exclusão', css2, arrRefStrings);
};
