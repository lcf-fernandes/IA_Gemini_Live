
// ---------- import Local Tools
import { setData } from '../../../project';
import { errorPathShow, errorPathTxt, txtErrorDefault1 } from './paths';

type Tcheck =
  | {
      [key: string]: any;
    }
  | Response;

export const setCtDataError = (checkResponse: Tcheck) => {
  console.log('Set Error Msg...');
  let condError = false;

  if (checkResponse) {
    const status = checkResponse?.status;

    if (status > 400) {
      condError = true;
      console.log('setErr 1', { condError });

      const statusText = checkResponse?.statusText;
      console.log('setErr 2', { statusText });

      const resErr = statusText ? 'Error ' + status + ': ' + statusText : false;
      console.log({ checkResponse });

      // ------------------------------
      // --------- UPDATE CT DATA ERROR
      // ------------------------------
      setData({ path: errorPathTxt, value: resErr ?? txtErrorDefault1 });
      setData({ path: errorPathShow, value: 'true' });
      return condError;
    }
    return condError;
  }

  // --------- BREAK FUNCTION
  return condError;
};

