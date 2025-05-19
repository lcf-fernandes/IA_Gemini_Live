
// ---------- import Local Tools
import { getCtData, setData } from '../project';

// F2 - setTimeOut (newBase)
type Tprops_setTimeOut = { pass: { A: any; B: any; C: any } };
export const setTimeOut =
  (props: Tprops_setTimeOut) =>
  async (...args: any) => {
    const { A, B, C } = props.pass;

    // ---------- set Caps Inputs
    const timeID = getCtData(A);
    if (timeID) clearTimeout(timeID);

    const fnGroup = async () => {
      for (const currFunc of C) await currFunc(args[0]);
    };

    const newTimeID = setTimeout(fnGroup, Number(B));
    setData({ path: A, value: newTimeID });
  };

