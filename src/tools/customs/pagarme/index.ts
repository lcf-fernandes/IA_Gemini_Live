
// ---------- import Local Tools
import { createOrderPIX } from './createOrderPIX';
import { createCustomer } from './createCustomer';
import { createOrder } from './createOrder';

import { updateCredCard } from './updateCredCard';

import { getCardHash } from './getCardHash';
import { listOrders } from './listOrders';

export const errFnc: (reason: any) => void | PromiseLike<void> = i =>
  console.log('err pagar.me', i);

export const pagarme = {
  createCustomer,
  createOrderPIX,
  createOrder,

  updateCredCard,

  listOrders,
  getCardHash,
};

