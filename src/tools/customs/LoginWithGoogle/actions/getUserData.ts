
// ---------- import Packs
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

// ---------- import Local Tools
import { getCtData } from '../../../project';

export const getUserData = async (idToSearch: any) => {
  console.log({ idToSearch });
  const fbInit = getCtData('all.fireInit');
  console.log({ fbInit });

  // ---- Aqui deixar banco (default), ou seja sem o segundo parametro
  const fireInit = getFirestore(fbInit);

  const refColl = collection(fireInit, 'loginWorkFlow');
  console.log({ refColl });
  const filter = where('uniqueID', '==', idToSearch);
  const dbRef = query(refColl, filter);
  const searchID = await getDocs(dbRef);

  const arrID: any = [];

  searchID.forEach(doc => {
    const obj = doc.data();
    console.log({ obj });
    return arrID.push(obj);
  });
  const workFlow = arrID[0];
  console.log({ workFlow });
  return workFlow;
};

