
// ---------- import Local Tools
import { getVarValue } from '../project';
import { argSel } from '../project';

// F8 - ccc_uploadImgs (newBase)
type Tprops_uploadImgs = { pass: { A: any; B: any } };
export const uploadImgs =
  (props: Tprops_uploadImgs) =>
  async (...args: any) => {
    const { A, B } = props.pass;

    console.log({ A });
    console.log({ B });
    // ---------- set Path Array with Arguments + Variables
    const iterator = A.map((item: any) => {
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
    console.log({ iterator });

    // -------------- Major Loop
    for (const currItem of iterator[0]) {
      console.log(currItem);
      for (const currFunc of B) await currFunc(currItem, args);
    }
  };

