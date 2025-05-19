
// ---------- import Local Tools
import { tools } from '../..';

type Tprops_listFilter = {
  args: any;
  pass: { pathOrigin: string; field: any; arrFuncs: any };
};
export const listFilter = async (props: Tprops_listFilter) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { pathOrigin, field, arrFuncs } = pass;

  // ---------- set Arguments Values (If Exists)
  const checkArgs = pathOrigin.startsWith('#');
  if (checkArgs) pathOrigin = tools.argSel(args, pathOrigin);

  // ---------- set Variables Values (If Exists)
  const [condVar, varValue] = tools.getVarValue(pathOrigin, 'noComponent');
  if (condVar) pathOrigin = varValue;

  // ---------- set Filtered Array
  const filteredArr = pathOrigin.filter(currItem => {
    let term1 = '';
    if (field) {
      term1 = currItem[field].toLowerCase();
    } else {
      term1 = currItem.toLowerCase();
    }

    const term2 = args[0].toLowerCase();

    return term1.includes(term2);
  });

  // ---------- set Get Value Functions
  for (const currFunc of arrFuncs) await currFunc(filteredArr, args);

  return filteredArr;
};

