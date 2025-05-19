
// ---------- import Packs
import React from 'react';

// ---------- import Local Tools
import { useData } from '../../..';
import { mapElements, pathSel } from '../project';

type Tprops_CustomListener = {
  pass: {
    variable: string[];
    childrenItems: any[];
    arrFunctions: any[];
    args: any;
  };
};
export const CustomListener = (props: Tprops_CustomListener) => {
  // ---------- set Props
  const { variable, childrenItems, arrFunctions, args } = props.pass;

  // ---------- set Watch Data
  const watchData = useData(ct => pathSel(ct, variable.join()));
  args.watch = watchData; // pass values to children

  console.log({ watchData });
  console.log({ args });

  // ---------- set Children Items
  const children = mapElements(childrenItems, args);

  // ---------- set Flax Caps Functions
  const execFuncs = async () => {
    for (const currFunc of arrFunctions) await currFunc(args);
  };

  React.useEffect(() => {
    execFuncs();
  }, [watchData]);

  return <>{children}</>;
};

