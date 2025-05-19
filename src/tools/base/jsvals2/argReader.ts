
// ---------- import Local Tools
import { css } from '../Elements/DynView';
import { argSel } from '../project';

// ---------------- argReader
// --------------------------
type Tprops_argReader = { pass: { argPath: string; args: any } };
export const argReader = (props: Tprops_argReader) => {
  const { argPath, args } = props.pass;
  console.log('DENTRO DO ARG READER', { argPath, args });

  let newArgPath = '';

  const isArray = Array.isArray(argPath);
  if (isArray) {
    newArgPath = argPath.reduce((prev, curr) => prev + curr, '');
  } else {
    newArgPath = argPath;
  }
  const returnArgValue = argSel(args, newArgPath);
  console.log('%cargReader', css, {
    varPath: newArgPath,
    value: returnArgValue,
  });

  return returnArgValue;
};

