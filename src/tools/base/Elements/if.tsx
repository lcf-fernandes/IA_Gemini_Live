
// ---------- import Local Tools
import { setArgsVars } from '../project';

// F4 - if function (fromDB_var)  (newBase)
type Tprops_ifFunc = {
  pass: {
    conditionPath: any;
    expectedValue: any;
    functionsTrue: any;
    functionsFalse: any;
    args: any;
  };
};
export const ifFunc = (props: Tprops_ifFunc) => async () => {
  const { conditionPath, expectedValue, functionsTrue, functionsFalse, args } =
    props.pass;

  // ---------- set Capsules Inputs

  // ---------- set Path Array with Arguments + Variables
  const newArrPath = conditionPath.map((item: any) => setArgsVars(item, args));

  // ---------- set Path Value as a single string
  let varPath = newArrPath.reduce((prev: any, curr: any) => prev + curr, '');

  // ---------- set Arguments / Vars Values (If Exists)
  const setValue = setArgsVars(varPath, args);
  const condIF = setValue === expectedValue;

  if (condIF) {
    for (const currFunc of functionsTrue) await currFunc(args);
  } else {
    for (const currFunc of functionsFalse) await currFunc(args);
  }
};

