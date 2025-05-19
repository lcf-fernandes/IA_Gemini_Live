
// ---------- import Local Tools
import { tools } from '../..';

type Tprops_stringFunc = {
  args: any;
  pass: { value: string };
};
export const stringFunc = async (props: Tprops_stringFunc) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { value } = pass;

  // ---------- set Arguments Values (If Exists)
  const checkArgs = value.startsWith('#');
  if (checkArgs) value = tools.argSel(args, value);

  // ---------- set Variables Values (If Exists)
  const [condVar, varValue] = tools.getVarValue(value, 'noComponent');
  if (condVar) value = varValue;

  return value;
};

