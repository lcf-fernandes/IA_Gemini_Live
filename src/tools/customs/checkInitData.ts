
// ---------- import Local Tools
import { getCtData } from '../base/project';

type Tprops = {
  pass: { pathToCheck: any[]; returnFuncs: any[]; args: any };
};

export const checkInitData = async (props: Tprops) => {
  console.log('CHECK INIT DATA');
  const { pathToCheck, returnFuncs, args } = props.pass;
  console.log({ pathToCheck });
  console.log({ returnFuncs });

  const dataToCheck = getCtData(pathToCheck.join());
  console.log({ dataToCheck });

  const isArray = Array.isArray(dataToCheck);
  const isEmptyArray = isArray && dataToCheck.length === 0;
  const condUndefined = !dataToCheck;
  const checkData = isEmptyArray || condUndefined;

  if (checkData) {
    console.log({ pathToCheck });
    console.log({ dataToCheck });
    for (const currFunc of returnFuncs) await currFunc(args);
  }
};

