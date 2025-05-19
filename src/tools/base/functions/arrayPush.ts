
import JSON5 from 'json5';
// ---------- import Local Tools
import { getVarValue } from '../project';

type Tprops_arrayPush = {
  args: any;
  pass: { arrPath: string; valuePath: string[] };
};

type Tvalue = [boolean, any[]];

export const arrayPush = (props: Tprops_arrayPush) => {
  console.log('START ARRAY PUSH --------------');
  console.log({ props });

  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { arrPath, valuePath } = pass;

  const [hasOldArr, oldArr] = getVarValue(arrPath, 'noComponent') as Tvalue;
  //   console.log({ oldArr });
  const [hasNewValue, newValue] = getVarValue(
    valuePath,
    'noComponent',
  ) as Tvalue;
  //   console.log({ newValue });

  //   if (hasVar) userElProps[keyProp] = varValue;
  //   if (!hasVar) userElProps[keyProp] = valueProp;

  const strArr = JSON.stringify(oldArr);
  const parsedArr = JSON5.parse(strArr);

  console.log('oldArr:', oldArr);
  console.log('newValue:', newValue);
  console.log('oldArr + newValue:', [...parsedArr, newValue]);

  const newArr: any[] = new Array();
  //   console.log({ newArr });
  newArr.push(...parsedArr);
  newArr.push(newValue);

  //   console.log({ newValue });
  console.log('FINISH ARRAY PUSH --------------');
  // ---------- set New Data
  return newArr;
};
