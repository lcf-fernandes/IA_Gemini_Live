
// ---------- set Local Imports
import JSON5 from 'json5';
import { initializeApp } from 'firebase/app';
import { setVar } from '../';

type Tprops = { args: any; pass: { fbConfig: any; arrFuncs: any[] } };

export const fireInit = async (props: Tprops) => {
  console.log('fireInit');
  // ---------- set Props
  const { args, pass } = props;
  const { fbConfig } = pass;

  if (typeof fbConfig !== 'string') {
    return console.log('Erro Ao inicializar o Firebase', fbConfig);
  }

  console.log('BOX', { fbConfig });
  const parsedObject = JSON5.parse(fbConfig);

  // ---------- set Caps Inputs
  if (typeof parsedObject === 'object') {
    // ---------- set FB Init on a Variable
    const fbInit = initializeApp(parsedObject, 'secondary');
    console.log({ fbInit });

    setVar({
      args: {},
      pass: { keyPath: ['all.temp.fireInit'], value: fbInit },
    });
  } else {
    console.log('parsedObject precisa ser um objeto', { parsedObject });
  }
};
