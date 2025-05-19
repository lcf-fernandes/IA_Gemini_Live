
// ---------- import Local Tools
import { getCtData } from '../../project';
import { Torder } from './types';

export const getOrderData = (): (() => Torder) => {
  let newData = getCtData('mock.B4.currData.orderData');
  let customer = getCtData('all.userData');

  // ---------------------------
  // ------ set CREDIT CARD DATA
  // ---------------------------
  newData.payments[0].credit_card.card.exp_month = Number(
    newData.payments[0].credit_card.card.exp_month,
  );
  newData.payments[0].credit_card.card.exp_year = Number(
    newData.payments[0].credit_card.card.exp_year,
  );

  // ---------------------------
  // ----- set Billing Address
  // --------------------------
  const path1 = customer.userAddress.address_components;
  if (path1[0]?.short_name)
    newData.payments[0].credit_card.card.billing_address.line_1 =
      path1[0].short_name;

  if (path1[2]?.short_name)
    newData.payments[0].credit_card.card.billing_address.city =
      path1[2].short_name;

  if (path1[3]?.short_name)
    newData.payments[0].credit_card.card.billing_address.state =
      path1[3].short_name;

  if (path1[4]?.short_name)
    newData.payments[0].credit_card.card.billing_address.country =
      path1[4].short_name;

  if (path1[5]?.short_name)
    newData.payments[0].credit_card.card.billing_address.zip_code =
      path1[5].short_name;

  return newData;
};

