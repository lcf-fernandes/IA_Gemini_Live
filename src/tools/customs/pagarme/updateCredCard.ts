
// ---------- import Local Tools
import { goTo, setData } from '../../project';
import { getCardHash } from './getCardHash';

export const updateCredCard = async () => {
  console.log('Update Credit Card');
  const resCrdHash: any = await getCardHash();
  const condSuccess = !!resCrdHash?.id;

  // ----- check IF Stop Process
  if (!condSuccess) return;

  // ----- check IF Success
  if (condSuccess) {
    setData({ path: 'all.userData.paymentData', value: resCrdHash });
    goTo('b4chistory');
  }
};

