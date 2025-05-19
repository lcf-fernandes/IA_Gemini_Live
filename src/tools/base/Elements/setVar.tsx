
// ---------- import Local Tools
import { getVarValue, setData } from '../project';
import { argSel } from '../project';

// setVar - setVar (fromDB_var)  (newBase)
type Tprops_setVar = { pass: { variablePath: any; variableValue: any } };
export const setVar =
  (props: Tprops_setVar) =>
  async (...args: any) => {
    let { variablePath, variableValue } = props.pass;

    // ---------- set Caps Inputs

    // ---------- set Path Array with Arguments + Variables
    const newArrPath = variablePath.map((item: any) => {
      // ---------- set Arguments Values (If Exists)
      const checkArgs = item.startsWith('#');
      if (checkArgs) item = argSel(args, item);

      // ---------- set Variables Values (If Exists)
      const [condVar, varValue] = getVarValue(item, 'noComponent');
      if (condVar) item = varValue;

      // ---------- set return
      return item;
    });

    // ---------- set Url Value as a single string
    let keyPath = newArrPath.reduce((prev: any, curr: any) => prev + curr, '');
    if (typeof keyPath === 'string') {
      // ---------- set Path Conditional
      if (keyPath.startsWith('{{')) {
        keyPath = keyPath.replace('{{', '').replace('}}', '');
      }
    }

    // ---------- set Arguments Values (If Exists)
    if (typeof variableValue === 'string') {
      const checkArgs = variableValue.startsWith('#');
      if (checkArgs) variableValue = argSel(args, variableValue);
    }

    console.log({ keyPath });
    console.log({ variableValue });
    // ---------- set New Data
    setData({ path: keyPath, value: variableValue });
  };

