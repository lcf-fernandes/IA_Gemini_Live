
// ---------- import Packs
import React from 'react';

// ---------- import Local Tools
import { useData } from '../../../';
import { mapElements, pathSel } from '../../base/project';

type Tprops_CustomListener = {
  pass: {
    variable: string[];
    childrenItems: any[];
    arrFuncs: any[];
    args: any;
  };
};
const css =
  'color: #54ff00; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';

export const Watcher = (props: Tprops_CustomListener) => {
  // ---------- set Props
  const { variable, childrenItems, arrFuncs, args } = props.pass;

  // ---------- set Watch Data
  const watchData = useData(ct => pathSel(ct, variable.join()));
  args.watch = watchData; // pass values to children

  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of arrFuncs) await currFunc();
    };
    callFn().catch(initFuncsErr => console.log({ initFuncsErr }));

    console.log('%c WATCHER', css, { watchData, args });
  }, [watchData]);

  // ---------- set Children Items
  const children = mapElements(childrenItems, args);

  return <>{children}</>;
};
