
// ---------- import Local Tools
import { updateDoc } from '../../functions/firebase/updateDoc';
import { baseUrl, secrets } from '../../../globalVars/data';
import { getCtData, setData } from '../../project';
import { asyncFn } from './asyncFn';
import { cardNumPath } from './helpers/paths';
import { errFnc } from '.';
import { setCtDataError } from './helpers/setCtDataError';

type Tprops = () => Promise<Response>;

export const getCardHash: Tprops = async () => {
  console.log('Gerando Card Hash...');
  const customerId = getCtData('all.userData.customerId');
  let mockCardNumber = getCtData(cardNumPath); // Dados do Cartão
  mockCardNumber.credit_card.card.number =
    mockCardNumber?.credit_card?.card?.number.replace(/[^0-9]/g, '');

  const card1 = mockCardNumber?.credit_card?.card;
  console.log({ mockCardNumber });

  // ---------- EndPoint
  const url = baseUrl + `/customers/` + customerId + `/cards`;
  console.log({ url });

  // ---------- Headers
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Basic ` + secrets.sk);

  const bodyData = {
    ...card1,
  };

  console.log({ bodyData });
  // ---------- Body
  const raw = JSON.stringify(bodyData);

  console.log({ raw });
  // ---------- Request Config
  const reqConfig = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  // ---------------------------
  // ----------- SET CALL API --
  // ---------------------------
  const promise = await asyncFn(url, reqConfig).catch(errFnc);
  console.log({ promise });

  if (!promise) {
    console.log({ promise_error: promise });
    return true;
  }
  // ----- check IF Stop Process
  const condError = setCtDataError(promise);
  if (condError) return condError;

  console.log({ promise });

  const res = await promise.json();
  console.log({ res });

  // ----------------------------------
  // ------ UPDATE USER WITH TOKEN ----
  // ----------------------------------
  const dataToUpdate = {
    paymentData: res,
  };
  setData({ path: 'all.tempData', value: dataToUpdate });

  const args = {};

  // ----------------------------------
  // ---------- set Firestore TimerData
  // ----------------------------------
  const selectedUser = getCtData('all.userData.docId');
  const fireInit = getCtData('all.fireInit');
  const passProps = {
    fbInit: [fireInit],
    arrRefStrings: ['users', selectedUser],
    arrPathData: ['all.tempData'],
    arrFuncs: [() => {}],
  };

  await updateDoc({ args, pass: passProps });

  // clean temp data
  setData({ path: 'all.tempData', value: null });

  return res;
};

