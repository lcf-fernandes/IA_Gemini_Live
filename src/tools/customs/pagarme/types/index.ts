
export type Titems = [
  {
    amount: number;
    description: string;
    quantity: number;
    code: number;
  },
];

export type Tcustomer = {
  name: string;
  type: string;
  email: string;
  document: string;
  document_type: string;
};

export type TpayOptions = 'credit_card';

export type TPayments = [
  {
    payment_method: TpayOptions;
    credit_card: {
      recurrence: boolean;
      installments: number;

      card: {
        number: string; // Entre 13 e 19 caracteres
        holder_name: string; // Máximo de 64 caracteres (Caracteres especiais e números não são aceitos)
        holder_document?: string; // CPF ou CNPJ do portador do cartão. Obrigatório caso o tipo do cartão seja voucher (bandeiras VR ou Sodexo).
        exp_month: number; // Mês de validade do cartão. Valor entre 1 e 12 (inclusive)
        exp_year: number; // Ano de validade do cartão. Formatos yy ou yyyy. Ex: 23 ou 2023.
        cvv: string; // Código de segurança do cartão. O campo aceita 4 ou 3 caracteres, variando por bandeira.

        // (Opcional) Bandeira do cartão. Para cartões de crédito, temos como valores possíveis: Elo, Mastercard, Visa, Amex, ou Hipercard. Para voucher, temos como valores possíveis: Alelo, Ticket, VR ou Sodexo.
        // brand?: string;
        // label?: string; // Indica a label do cartão

        billing_address: {
          line_1: string; // Linha 1 do endereço. (Número, Rua, e Bairro - Nesta ordem e separados por vírgula) Max: 256 caracteres.

          zip_code: string; // CEP. Max: 16 caracteres.
          city: string; // Cidade. Max: 64 caracteres.
          state: string; // Código do estado no formato ISO 3166-2.
          country: string; //Código do país no formato ISO 3166-1 alpha-2.
        };
      };
    };
  },
];

// ---------- Required;

export type Torder = {
  items: Titems;
  customer?: Tcustomer;
  customer_id: string;

  payments: TPayments;
};

