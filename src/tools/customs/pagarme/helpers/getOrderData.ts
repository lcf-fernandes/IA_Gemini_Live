
// ---------- import Local Tools
import { getCtData } from '../../../project';
import { getAddress } from './getAddress';
import {
  cardNumPath,
  cardTokenPath,
  checkoutPath,
  userDataPath,
} from './paths';

export const getOrderData = (method?: 'ccard' | 'pix' | undefined) => {
  const isACard = method === 'ccard';
  const isAPix = method === 'pix';
  let orderData: any = {};

  let credCardData = getCtData(cardNumPath); // Só Numero Cartão vai pra esse caminho
  let ctDataCheckout = getCtData(checkoutPath); // Todos os demais dados (itens do pedido, valor etc)
  const priceWithoutDot = String(ctDataCheckout?.totalPrice).replace('.', '');
  const totalPriceCents = ctDataCheckout?.totalPrice && priceWithoutDot;

  // ---------------------------
  // ------ set CREDIT CARD DATA
  // ---------------------------
  if (isACard) {
    console.log({ isACard, ctDataCheckout });
    let cardId = getCtData(cardTokenPath);

    // ------ COMMON DATA
    credCardData.credit_card.statement_descriptor = 'Good Bike';
    credCardData.credit_card.operation_type = 'auth_and_capture';
    credCardData.credit_card.installments = 1;

    credCardData.payment_method = 'credit_card';
    credCardData.amount = Number(totalPriceCents);

    // --- Quando TEM token
    if (cardId) {
      console.log({ cardId });
      delete credCardData.credit_card.card.holder_name;
      delete credCardData.credit_card.card.exp_month;
      delete credCardData.credit_card.card.exp_year;
      delete credCardData.credit_card.card.number;

      credCardData.credit_card.card_id = cardId;
    }

    // --- Quando NÃO tem token
    // ---- Usar dados do Formulário
    if (!cardId) {
      console.log({ bikesList: ctDataCheckout?.bikesList });
      const expMonth = credCardData?.credit_card?.card?.exp_month;
      const expYear = credCardData?.credit_card?.card?.exp_year;
      console.log({ expMonth });
      console.log({ expYear });
      const cardNumberStr = credCardData?.credit_card?.card?.number.replace(
        /[^0-9]/g,
        '',
      );

      credCardData.credit_card.card.number = cardNumberStr;
      credCardData.credit_card.card.exp_month = Number(expMonth);
      credCardData.credit_card.card.exp_year = Number(expYear);

      // ---------------------------
      // ----- set Billing Address
      // --------------------------
      const userAddress = getCtData(userDataPath + '.userAddress');
      const prefix = 'administrative_area_level_';
      console.log({ userAddress });

      const arrayAd = userAddress?.address_components;
      console.log({ arrayAd });

      const formatedZip = getAddress(arrayAd, 'postal_code').replace(',', '');
      const condZip = formatedZip === '' ? '00000-000' : formatedZip;

      let form_billing_address: any = {};
      form_billing_address.line_1 = getAddress(arrayAd, 'route');
      form_billing_address.city = getAddress(arrayAd, prefix + 2);
      form_billing_address.state = getAddress(arrayAd, prefix + 1);
      form_billing_address.country = getAddress(arrayAd, 'country');
      form_billing_address.zip_code = condZip;

      credCardData.credit_card.card.billing_address = form_billing_address;
    }
  }

  orderData.payments = [credCardData];
  // ---------------------------
  // ---------- set Order Items
  // ---------------------------
  const oldListBike = ctDataCheckout?.bikesList;
  const newBikeList = oldListBike.map((i, idx) => {
    const unitPrice = i?.modelPrice.replace(/[^0-9]/g, ''); // Number in cents (só numeros)
    console.log({ unitPrice });
    return {
      description: i?.modelName,
      amount: Number(totalPriceCents),
      quantity: Number(i?.modelAmount) ?? 0,

      code: idx,
    };
  });

  orderData.items = newBikeList;
  orderData.antifraud_enabled = false;
  orderData.closed = true;

  // ---------------------------
  // ---------- set Customer ---
  // ---------------------------
  orderData.customer_id = getCtData('all.userData.customerId');
  // ----------- LOGS
  console.warn(
    'pagarme',
    'billing_address',
    orderData.payments[0].credit_card?.card?.billing_address,
  );

  console.warn('pagarme', 'customer_id', orderData.customer_id);
  console.warn('pagarme', 'payments', orderData.payments);
  console.warn('pagarme', 'items', orderData.items);
  return orderData;
};

