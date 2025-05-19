
// ---------- import Local Tools
import { getOrderData } from './helpers/getOrderData';
import { baseUrl, secrets } from '../../../globalVars/data';

import { getCtData, setData } from '../../project';
import { asyncFn } from './asyncFn';
import { errFnc } from '.';
import { createCustomer } from './createCustomer';
import { setCtDataError } from './helpers/setCtDataError';

type Tprops = { args: any; pass: {} };

export const createOrderPIX = async () => {
  console.log('Gerando Pagamento PIX...');
  const newCustomer = !!getCtData('all.userData.customerId');

  // --------- Check IF is A New Pagar.Me Customer
  if (!newCustomer) await createCustomer();

  // ---------- Get CtData
  const processedData = getOrderData('pix');
  console.log('PIX', { processedData });

  // ---------- EndPoint
  const url = baseUrl + '/orders';

  //   // ---------- Headers
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Basic ` + secrets.sk);

  // ---------- Body
  const raw = JSON.stringify(processedData); // ctData REAL DATA
  // const raw = JSON.stringify(templateOrder); // Template

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

  if (!promise) return console.log({ promise_error: promise });

  // ----- check IF Stop Process
  const condError = setCtDataError(promise);
  if (condError) return;

  const res = await promise.json();

  console.log('Depois do Fetch - createOrder', promise);
  console.warn('RESPONSE FETCH', res);

  setData({ path: 'sc.B4.currData.checkout.paymentData', value: res });
};

