
// ---------- import Local Tools
import { getVarValue } from '../project/getVarValue';
import { tools } from '../..';

type Tprops_goTo = {
  args: any;
  pass: { path: string };
};
export const goTo = async (props: Tprops_goTo) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { path } = pass;
  console.log('GOTO', path);
  const [condVar, varValue] = getVarValue(path, 'noComponent');
  console.log('GOTO', varValue);
  if (condVar) return tools.goTo(varValue);

  // ---------- get Function from A_Project Scope
  if (!condVar) return tools.goTo(path);
};
