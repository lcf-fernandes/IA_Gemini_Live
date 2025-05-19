
// ---------- import Local Tools
import { errFnc } from '.';
import { baseUrl, secrets } from '../../../globalVars/data';
import { updateDoc } from '../../functions/firebase/updateDoc';
import { getCtData, setData } from '../../project';
import { asyncFn } from './asyncFn';
import { getAddress } from './helpers/getAddress';
import { setCtDataError } from './helpers/setCtDataError';

type Tprops = {
  args?: any;
  pass?: {
    ipt1?: any[];
    ipt2?: string;
    ipt3?: any[];
  };
};

export const createCustomer = async (props?: Tprops) => {
  console.log('Create Customer...');
  const userData = getCtData('all.userData');
  const condMale = userData?.userGender === 'Masculino';
  const condGender = condMale ? 'male' : 'female';

  const arrayAd = userData?.userAddress?.address_components;
  const prefix = 'administrative_area_level_';
  const formatedZip = getAddress(arrayAd, 'postal_code').replace(',', '');
  const condZip = formatedZip === '' ? '00000-000' : formatedZip;

  // ---------- Get CtData
  const processedData = {
    name: userData?.userName,
    email: userData?.userEmail,
    code: userData?.docId,

    type: 'individual',
    document_type: 'CPF',
    document: userData?.userCPF.replace(/[^0-9]/g, ''),

    gender: condGender,

    address: {
      line_1: getAddress(arrayAd, 'route'),
      zip_code: condZip,
      city: getAddress(arrayAd, prefix + 2),
      state: getAddress(arrayAd, prefix + 1),
      country: getAddress(arrayAd, 'country'),
    },

    phones: {
      home_phone: {
        country_code: '55',
        area_code: '21',
        number: '000000000',
      },
    },
    metadata: {
      company: 'Aluguel de Bikes',
    },
  };
  console.log('CUSTOMER - dataToSet', { processedData });

  // ---------- EndPoint
  const url = baseUrl + '/customers';

  // ---------- Headers
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', `Basic ` + secrets.sk);

  // ---------- Body
  const raw = JSON.stringify(processedData); // ctData REAL DATA
  console.log('CUSTOMER - dataToSet RAW', raw);

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
  console.log('antes do fetch');
  const promise = await asyncFn(url, reqConfig).catch(errFnc);

  if (!promise) return console.log({ promise_error: promise });

  // ----- check IF Stop Process
  const condError = setCtDataError(promise);
  if (condError) return;

  const res = await promise.json();

  setData({ path: 'all.tempData', value: { customerId: res.id } });

  console.log('Depois do Fetch - createCUSTOMER', promise, res);

  // ----------------------------------------
  // ----------- SET UPDATE FIRESTORE USER --
  // ----------------------------------------
  const selectedUser = getCtData('all.userData.docId');
  const fireInit = getCtData('all.fireInit');
  const passProps = {
    fbInit: [fireInit],
    arrRefStrings: ['users', selectedUser],
    arrPathData: ['all.tempData'],
    arrFuncs: [() => {}],
  };

  await updateDoc({ args: {}, pass: passProps });

  // clean temp data
  setData({ path: 'all.tempData', value: null });

  return res;
};

