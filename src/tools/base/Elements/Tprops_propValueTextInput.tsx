
// ---------- import Local Tools
import { setArgsVars } from '../project';

// P2 - prop value do TextInput
type Tprops_propValueTextInput = { pass: { A: any; args: any } };
export const Tprops_propValueTextInput = (props: Tprops_propValueTextInput) => {
  const { A, args } = props.pass;

  const value = setArgsVars(A, args);
  return value;
};

