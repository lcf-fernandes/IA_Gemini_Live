
// ---------- set Packs

// ---------- import Packs
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';

// ---------- set Internals
// ---------- import Local Tools
import { firestoreId } from '../../../../globalVars/data';
import { getCtData } from '../../../project';

// ---------- export Function
export const getDbInfo = async (userData: any) => {
  const fbInit = getCtData('all.fireInit');
  console.log({ fbInit });
  const fireInit = getFirestore(fbInit, firestoreId);

  const refColl = collection(fireInit, 'users');

  // ---------- set Data Query
  const filter1 = where('userEmail', '==', userData.userEmail);
  const dbRef = query(refColl, filter1);

  // ---------- get all collection data
  const searchUser = await getDocs(dbRef);

  // ---------- set Users Found if any
  const arrUser: any[] = [];
  searchUser.forEach(doc => {
    const obj = doc.data();
    return arrUser.push(obj);
  });
  console.log({ arrUser });
  const condNewUser = arrUser.length === 0;
  console.log({ condNewUser });

  // ---------- set Return
  return { refColl, condNewUser, arrUser };
};

