
// ---------- import Local Tools
import { getCtData, setData } from '../../project';

type Tprops = {
  pass: {};
  args?: any;
};

export const processCheckout = async (props: Tprops) => {
  const { args } = props;
  const selecHours = Number(args[1]);
  const updatedList = args[0][0].watch; // Recebe do watcher (pai que é um Listener)
  console.log('ARGS do Checkout', { args });

  let newValue = 0;
  updatedList.forEach(item => {
    console.log({ item });
    const val1 = Number(item?.modelValue);
    const val2 = Number(item?.modelAmount);
    const currCalc = val1 * val2;
    console.log({ currCalc });

    newValue = newValue + currCalc;
  });

  console.log({ selecHours });
  console.log({ newValue });
  const calcValue = selecHours * newValue;
  console.log({ calcValue });

  setData({ path: 'sc.B3C.currData.currPrice', value: calcValue });
};

