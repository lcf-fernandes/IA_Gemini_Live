
// ---------- import Local Tools
import { useData } from '../../..';
import { tools } from '../..';
import { BtnCounter } from './BtnCounter';
import { pathSel, setData } from '../../base/project';

// ---------- import Packs
import React from 'react';

type Tprops = { pass: { type: 'B3B' | 'B3C'; args: any } };

export const BtnUpdateAmount = (props: Tprops) => {
  const { args } = props.pass;

  // ---------- set Args Data
  const sel1 = args[0];
  const sel2 = sel1[0];
  const currItem = sel2[0].item;
  const currIdx = sel2[0].index;

  // ---------- set Watch Data
  const arrPricesCalc = useData(ct => ct.sc.B3B?.currData?.arrPricesCalc);
  const pathHours = 'sc.B3C.currData.selecHours';
  const bikesSelecteds: any[] = useData(
    ct => ct.sc.B3C?.currData?.mainList ?? [],
  );
  const selecHours = useData(ct => pathSel(ct, pathHours)) ?? {};

  const newItem = { ...currItem };
  const newAmount = newItem.modelAmount;

  // ---------- set Update Lists + Update Amount
  const pathAll = `sc.B3B.currData.mainList`;
  const pathSelected = `sc.B3C.currData.mainList`;
  const pathAmountAll = pathAll + `.` + currIdx + `.modelAmount`;

  const getValue = (count: number, mode: 'inc' | 'dec') => {
    const strCount = String(count);

    tools.setData({ path: pathAmountAll, value: strCount });

    // ----- set Map Items
    const newSelecteds = bikesSelecteds.map(item => {
      const checkID = item.docId === currItem.docId;

      if (!checkID) return item;

      item.modelAmount = strCount;

      const val1 = Number(item?.modelAmount);
      const val2 = Number(item?.modelPrice);
      const currCalc = val1 * val2;

      setData({
        path: 'sc.B3B.currData.arrPricesCalc',
        value: { ...arrPricesCalc, [item.docId]: currCalc },
      });

      return item;
    });

    // ---------- set Conditional Action
    const condStop = count === 0;
    if (condStop) {
      // ---------- set Find Item To Remove
      if (mode === 'dec') {
        tools.setData({ path: pathSelected, value: newSelecteds });
        const ixdToDel = newSelecteds.findIndex(
          i => i.docId === currItem.docId,
        );
        newSelecteds.splice(ixdToDel, 1);
        setData({ path: 'sc.B3C.currData.currPrice', value: '0' });
      }

      // ---------- set Return
      return;
    }

    // ---------- set Conditional Action
    const findItem = newSelecteds.find(i => i.docId === currItem.docId);
    newItem.modelAmount = strCount;
    if (!findItem) newSelecteds.push(newItem);

    tools.setData({ path: pathSelected, value: newSelecteds });
  };

  React.useEffect(() => {
    const newArr = [];
    if (!!arrPricesCalc) {
      for (const key in arrPricesCalc) {
        const price = arrPricesCalc[key];
        newArr.push(price);
      }
    }

    if (newArr?.length > 0) {
      const newValue = newArr.reduce((prev, curr) => {
        const increment = prev + curr;
        return increment;
      }, 0);

      const calcValue = selecHours * newValue;
      setData({ path: 'sc.B3C.currData.currPrice', value: calcValue });
    }
  }, [arrPricesCalc]);

  // ---------- set Render Area JSX
  return <BtnCounter initValue={Number(newAmount)} cbFunc={getValue} />;
};

