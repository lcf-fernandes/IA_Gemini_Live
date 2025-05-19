
// ---------- import Local Tools
import { useData } from '../../..';

export const setData = ({ path, value }: { path: string; value: any }) => {
  return useData.setState(ct => {
    const newObj = { ...ct };

    const setVal = (prev, curr, i, arr) => {
      const condNext = arr[i + 1];
      const condSelItem = () => prev[curr] || (prev[curr] = {});
      const newVal = () => (prev[curr] = value);
      const condVal = condNext ? condSelItem() : newVal();
      return condVal;
    };

    path.split('.').reduce(setVal, newObj);

    return newObj;
  });
};

