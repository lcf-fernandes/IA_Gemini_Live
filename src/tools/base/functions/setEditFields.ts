
// ---------- import Local Tools
import { setData } from '../project';

export const css1 =
  'color: yellow; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: green; background-color: black; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops_setEditFields = {
  args: any;
  pass: { arrFieldsName: any; arrFormPath: string[] };
};
export const setEditFields = (props: Tprops_setEditFields) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  const { arrFieldsName, arrFormPath } = pass;

  const baseP = arrFormPath.join();
  setData({ path: baseP, value: {} });

  const objData = args.flat()[0]?.item;

  for (const currItem of arrFieldsName) {
    const currValue = objData[currItem];

    const newPath = baseP + '.' + currItem;
    setData({ path: newPath, value: currValue ?? '' });

    // --------- set Consoles System
    console.log('%cset EditFields', css1);
    console.log('%csetVar path', css2, newPath);
    console.table('%csetVar value', css2, currValue);
  }
};

