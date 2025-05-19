
// ---------- set Packs

// ---------- import Packs
import { doc, updateDoc } from 'firebase/firestore';

// ---------- set Internals

// ---------- set Local Types

// ---------- export Function
export const updateUser = async (props: any) => {
  // ---------- get Props
  const { arrUser, refColl, userDbInfo } = props;

  // ---------- get Doc to Update
  const currUser = arrUser[0].docId;
  const userDoc = doc(refColl, currUser);

  // ---------- set Update Doc
  const dataToUpdate = { ...userDbInfo };
  await updateDoc(userDoc, dataToUpdate);
};

