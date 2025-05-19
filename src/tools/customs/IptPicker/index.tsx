
// ---------- import Packs
import { ViewStyle } from 'react-native';
import { useEffect, useState } from 'react';
import { Picker } from 'react-native-picker';

// ---------- import Local Tools
import { pathSel, setData } from '../../base/project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    pathList: any[];
    pathEdit: any[];
    arrFuncs: any[];
    pathReturn: any[];
    args: any;
  };
};

export const IptPicker = (props: Tprops) => {
  let { pathList, pathEdit, arrFuncs, pathReturn, args } = props.pass;

  pathEdit = ['sc.A3.forms.editData.locationId'];
  const [sttSelected, setSelected] = useState('');
  const dataList = useData(ct => pathSel(ct, pathList.join()));
  const newEditData = useData(ct => pathSel(ct, pathEdit.join()));

  // ---------- set Render Item
  const renderItem = () => {
    const checkData = dataList && dataList.length > 0;

    if (checkData) {
      const containFirstOpt = dataList.find(
        (e: any) => e.label === 'Selecione...',
      );
      !containFirstOpt && dataList.unshift({ label: 'Selecione...', id: '0' });

      return dataList.map((item: any, idx: number) => (
        <Picker.Item key={idx} label={item.label} value={item.id} />
      ));
    }

    return (
      <>
        <Picker.Item label={'Nenhum item encontrado'} value={'0'} />
      </>
    );
  };

  // ---------- set Func Fx
  useEffect(() => {
    if (newEditData && newEditData.length > 0) {
      if (newEditData !== '') setSelected(newEditData);
    } else {
      setSelected('0');
    }
  }, [newEditData]);

  // ---------- set Func On Change
  const funOnChange = (val: string) => {
    console.log('1', { args, val });
    setSelected(val);
    console.log({ arrFuncs });
    for (const currFunc of arrFuncs) currFunc(args, val);
  };

  console.log('2', { sttSelected });
  return (
    <>
      <Picker
        style={stlPicker}
        selectedValue={sttSelected}
        onValueChange={funOnChange}
      >
        {renderItem()}
      </Picker>
    </>
  );
};

const stlPicker: ViewStyle = {
  backgroundColor: 'transparent',
  borderWidth: 0,
};

