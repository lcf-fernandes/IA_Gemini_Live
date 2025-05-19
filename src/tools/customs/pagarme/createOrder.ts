
// ---------- import Local Tools
import { baseUrl, secrets } from '../../../globalVars/data';
import { asyncFn } from './asyncFn';

import { getOrderData } from './helpers/getOrderData';
import { argSel, getCtData, goTo, setData } from '../../project';

import { createCustomer } from './createCustomer';
import { getCardHash } from './getCardHash';
import { errFnc } from '.';
import { setCtDataError } from './helpers/setCtDataError';
import { setDoc } from '../../functions/firebase/setDoc';
import { updateDoc } from '../../functions/firebase/updateDoc';

type Tprops = {
  args: any;
  pass: {
    ipt1: any[];
    ipt2: string;
    ipt3: any[];
  };
};

export const createOrder = async (props: Tprops) => {
  const customerId = getCtData('all.userData.customerId');
  console.log('pagarme', 'Gerando Pag. C.Crédito...', { customerId });

  // --------- Check IF is A New Pagar.Me Customer
  if (!customerId) {
    console.log('pagarme', 'New Customer');
    const resCustomer = await createCustomer().catch(errFnc);

    console.warn({ resCustomer });
    const condSuccess = !!resCustomer?.id;

    if (!condSuccess)
      return console.warn(
        '<<<<<<<<<<<< Erro Ao Gerar Customer PAGAR.ME >>>>>>>>>>> ',
      );
  }

  // ---------- Get CtData
  const processedData = getOrderData('ccard');

  // ---------- EndPoint
  const url = baseUrl + '/orders';

  // ---------- Headers
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Basic ` + secrets.sk);

  // ----------- CHECK IF IS A FIRST PRUCHASE
  // ----------- get Card Hash --------------
  const cardId = getCtData('all.userData.paymentData.id');
  const firstPurchase = !cardId;

  if (firstPurchase) {
    console.log('pagarme', 'First Purchase (Create Token)');
    const resCrdHash = await getCardHash();
    // ----- check IF Stop Process

    setData({ path: 'all.userData.paymentData', value: resCrdHash });
  }

  console.warn('>>>>>>>>>>>>>>>>>>', { processedData });
  console.log('>>>>>>>>>>>>>>>>>>', { processedData });

  // ---------- Body
  const raw = JSON.stringify(processedData);

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

  // ----- check IF Stop Process
  const condError = setCtDataError(promise); // set ctData status + return condError

  // ---------------------------
  // ----- check IF ERROR / STOP
  // ---------------------------
  if (condError) {
    console.log('Depois do Fetch - createOrder - PROMISE', condError, promise);
    return condError;
  }

  // ----------------------
  // ----- check IF SUCCESS
  // ----------------------
  if (!condError) {
    console.log('Depois do Fetch - createOrder - PROMISE', condError, promise);
    const res = await promise.json();
    setData({ path: 'sc.B4.currData.checkout.paymentData', value: res });
    console.warn('Depois do Fetch - createOrder - RES', res);

    // ------------------------------------
    // ------ CREATE NEW RENT DOCUMENT ----
    // -------------------------------------
    const fireInit = getCtData('all.fireInit');
    const passProps = {
      fbInit: [fireInit],
      arrRefStrings: ['rents'],
      arrPathData: ['sc.B4.currData.checkout'],
      arrFuncs: [
        async (...args) => {
          // ----------------------------------
          // ------ UPDATE USER WITH TOKEN ----
          // ----------------------------------
          const dataToUpdate = {
            ['activeRentData.rentId']: argSel(args, '#0.docId'),
          };
          setData({ path: 'all.tempData', value: dataToUpdate });

          // ----------------------------------
          // ---------- set Firestore TimerData
          // ----------------------------------
          const selectedUser = getCtData('all.userData.docId');
          const fireInit = getCtData('all.fireInit');
          const passProps = {
            fbInit: [fireInit],
            arrRefStrings: ['users', selectedUser],
            arrPathData: ['all.tempData'],
            arrFuncs: [
              () => {
                goTo('b5timer');
              },
            ],
          };

          await updateDoc({ args, pass: passProps });

          // clean temp data
          setData({ path: 'all.tempData', value: null });
        },
      ],
    };

    await setDoc({ args: {}, pass: passProps });

    return res;
  }
};

