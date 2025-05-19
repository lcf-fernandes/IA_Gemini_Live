
// ---------- import React Packs
import { doc } from 'firebase/firestore';

// ---------- import Internals
// ---------- import Local Tools
import { goTo, setData } from '../../../project';
import { updateUser } from './updateUser';
import { addNewUser } from './addNewUser';
import { getDbInfo } from './getDbInfo';

// -----------------------------
// --------- Login WEB (Browser)
// -----------------------------
export const waitForUserData = async (userLogin: any) => {
  const userEmail = userLogin?.userData?.email;
  const userImage = userLogin?.userData?.image;
  const userName = userLogin?.userData?.name;

  // ---------- set Collection Reference
  const userDbInfo: any = { userName, userImage, userEmail };
  const dbInfo = await getDbInfo({ userEmail, userName, userImage });
  const { refColl, condNewUser, arrUser } = dbInfo;
  console.log({ condNewUser });
  console.log({ arrUser });

  const refDoc = doc(refColl);
  // ---------- set New User
  if (condNewUser) {
    (userDbInfo.userStatus = 'Pendente'),
      (userDbInfo.fullRegister = 'false'),
      await addNewUser({ userDbInfo, refDoc });
  }

  // ---------- set Update User
  if (!condNewUser) await updateUser({ arrUser, refColl, userDbInfo });

  // ------ return SUCCESS
  const dataSuccess = condNewUser ? userDbInfo : arrUser[0];
  const successUserName = dataSuccess?.userName;
  console.log({ dataSuccess });

  setData({ path: 'all.userData', value: dataSuccess });
  setData({ path: 'sc.B2.forms.editData.userName', value: successUserName });

  const condUrl = dataSuccess?.fullRegister === 'true';
  const condRedirect2 = condUrl ? 'b3bikemap' : 'b2register';

  goTo(condRedirect2);
};

