
// ---------- import Local Tools
import { getCtData, setData } from '../../base/project';

export const css =
  'color: #009966; background-color: #fff; font-size: 11px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  pass: {};
  args?: any;
};

export const processCheckout = async (props: Tprops) => {
  const { args } = props;
  const selecHours = Number(args[1]);

  // ---- Watch Data List B3C (mainList)
  const updatedList = args[0][0].watch; // Recebe do watcher (pai que é um Listener)

  let newValue = 0;
  updatedList.forEach(item => {
    console.log({ item });
    const val1 = Number(item?.modelAmount);
    const val2 = Number(item?.modelPrice);
    const currCalc = val1 * val2;

    newValue = newValue + currCalc;
    setData({ path: 'sc.B3C.currData.selecHours', value: selecHours });
    console.log('%cPicker Hora', css, {
      path: 'sc.B3C.currData.selecHours',
      selecHours,
    });
  });

  const calcValue = selecHours * newValue;
  setData({ path: 'sc.B3C.currData.currPrice', value: calcValue });
};

