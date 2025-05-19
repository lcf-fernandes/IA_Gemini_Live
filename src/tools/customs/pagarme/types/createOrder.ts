
// ---------- import Local Tools
import { asyncFn } from './asyncFn';
import { baseUrl, proxy, secrets } from '../../../data';
import { getOrderData } from './getOrderData';

// ---------- import Packs
import { Buffer } from 'buffer';

type Tprops = { args: any; pass: {} };

export const createOrder = async (props: Tprops) => {
  console.log('Gerando Pagamento...');
  // ---------- Get CtData
  const processedData = getOrderData();
  console.log({ processedData });
  console.log({ key_sk: secrets.sk });

  // ---------- EndPoint
  const url = baseUrl + '/orders';

  // ---------- Headers
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');

  // Codifique as credenciais em Base64
  const encodedCredentials = Buffer.from(secrets.sk).toString('base64');
  console.log({ encodedCredentials });

  myHeaders.append('Authorization', `Bearer ` + encodedCredentials);

  // ---------- Body
  const raw = JSON.stringify(processedData); // ctData REAL DATA

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
  const errFnc: (reason: any) => void | PromiseLike<void> = i =>
    console.log('err pagar.me', i);
  const promise = await asyncFn(url, reqConfig).catch(errFnc);

  if (!promise) return console.log({ promise_error: promise });
  const res = await promise.json();

  console.log('Depois do Fetch - createOrder', promise, res);
};

