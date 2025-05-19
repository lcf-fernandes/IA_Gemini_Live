
// ---------- import Local Tools
import { css } from '../Elements/DynView';
import { getCtData } from '../project';

// ---------------- varReader
// --------------------------
type Tprops_varReader = { pass: { path: string[] | string } };
export const varReader = (props: Tprops_varReader) => {
  const { path } = props.pass;

  let newPath = '';

  const isArray = Array.isArray(path);
  if (isArray) {
    newPath = path.reduce((prev, curr) => prev + curr, '');
  } else {
    newPath = path;
  }
  const returnVarValue = getCtData(newPath);
  console.log('%cvarReader', css, { varPath: newPath, value: returnVarValue });

  return returnVarValue;
};

