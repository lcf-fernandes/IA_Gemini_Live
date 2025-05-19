
// ---------- import Local Tools
import { useData } from '../../../';
import { pathSel } from './pathSel';

export const getCtData = (path: string) => {
  const ct = useData.getState();
  const varValue = pathSel(ct, path);
  return varValue;
};

