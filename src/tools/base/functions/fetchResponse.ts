
// ---------- import Local Tools
import { tools } from '../..';

export const css1 =
  'color: red; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: yellow; background-color: red; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops_fetchResponse = {
  args: any;
  pass: { resMethod: string; pathToSet: string; argToPass: any };
};
export const fetchResponse = async (props: Tprops_fetchResponse) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { resMethod, pathToSet, argToPass } = pass;

  // ---------- set Consoles Pattern
  console.log('%cfetch response', css1);

  // ---------- set Update CtData
  const response = args[0];
  const value = await response[resMethod]();
  const checkKeys = pathToSet.includes('{{');

  let cleanPath = pathToSet;
  if (checkKeys) {
    cleanPath = pathToSet.replace('{{', '').replace('}}', '');
  }

  tools.setData({ path: cleanPath, value });
  console.log('%cfetch save path', css2, cleanPath);
  console.table('%cfetch save value', css2, value);
};

