
// ---------- set Packs

// ---------- import Packs
import { Timestamp, setDoc } from 'firebase/firestore';

// ---------- set Internals

// ---------- set Local Types

// ---------- export Function
export const addNewUser = async (props: any) => {
  // ---------- set Props
  const { userDbInfo, refDoc } = props;

  // ---------- set Doc Data to Add
  userDbInfo.createdAt = Timestamp.now();
  userDbInfo.docId = refDoc.id;

  // ---------- set Type Account
  userDbInfo.typeAccount = 'app';

  // ---------- set New Doc
  const dataToAdd = { ...userDbInfo };
  await setDoc(refDoc, dataToAdd);
};

