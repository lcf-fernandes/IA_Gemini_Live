
// ----------- set Path Selection
export const pathSel = (obj?: any, path?: any) => {
  const pathArr = path.split('.');

  const reduceCb = (p, c) => {
    return p && p[c];
  };
  const valueSel = pathArr.reduce(reduceCb, obj);

  return valueSel;
};

