
// ---------- import Local Tools
import { asyncFn } from './asyncFn';
import { baseUrl, secrets } from '../../../globalVars/data';
import { getCtData, setData } from '../../project';
import { setCtDataError } from './helpers/setCtDataError';

type Tprops = { args: any; pass: {} };

export const listOrders = async (props: Tprops) => {
  console.log('Listando Pedidos...');

  // ---------- EndPoint
  const customerId = getCtData('all.userData.customerId');
  if (!customerId) {
    setData({ path: 'all.apis.msgs.condShow', value: 'true' });
    setData({
      path: 'all.apis.msgs.error',
      value: 'Nenhuma reserva encontrada.',
    });

    return;
  }

  const url = baseUrl + `/orders?customer_id=` + customerId;

  // ---------- Headers
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Basic ` + secrets.sk);

  // ---------- Body

  // ---------- Request Config
  const reqConfig = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  // ---------------------------
  // ----------- SET CALL API --
  // ---------------------------
  const errFnc: (reason: any) => void | PromiseLike<void> = i =>
    console.log('err pagar.me', i);
  const promise = await asyncFn(url, reqConfig).catch(errFnc);

  if (!promise) return console.log({ promise_error: promise });

  // ----- check IF Stop Process
  const condError = setCtDataError(promise);
  if (condError) return;

  const res = await promise.json();

  console.log('Depois do Fetch - createOrder', promise, res);

  setData({ path: 'sc.B4C.lists.listOrders', value: res.data });
};

