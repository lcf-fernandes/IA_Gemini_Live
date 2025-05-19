
// ---------- import Local Tools
import { argSel } from './argSel';
import { getVarValue } from './getVarValue';

export const setArgsVars = (value: string, args: any) => {
  const checkArgs = value.startsWith('#');
  if (checkArgs) return argSel(args, value);

  // ---------- set Vars (If Exists)
  const [condVar, varValue] = getVarValue(value, 'noComponent');
  if (condVar) return varValue;

  return value;
};

