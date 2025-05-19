
export const templateOrder = {
  items: [
    {
      amount: 2990,
      description: 'Chaveiro do Tesseract',
      quantity: 1,
      code: 123,
    },
  ],
  customer_id: '0LFPsAkFyHntvR80pIaM',
  customer: {
    name: 'Leandro A.',
    type: 'individual',
    email: 'avengerstark@ligadajustica.com.br',
    document: '03154435026',
    document_type: 'CPF',
  },
  metadata: {
    meu_campo1: 'valor1',
    meu_campo2: 'valor2',
  },
  closed: true,
  location: {
    latitude: '-22.970722',
    longitude: '43.182365',
  },
  shipping: {
    amount: 100,
    description: 'Stark',
    recipient_name: 'Tony Stark',
    recipient_phone: '24586787867',
    address: {
      line_1: '10880, Malibu Point, Malibu Central',
      zip_code: '90265',
      city: 'Malibu',
      state: 'CA',
      country: 'US',
    },
  },
  payments: [
    {
      payment_method: 'credit_card',
      credit_card: {
        recurrence: false,
        installments: 1,
        statement_descriptor: 'AVENGERS',
        card: {
          number: '5554262580168214',
          holder_name: 'Tony Stark',
          exp_month: 8,
          exp_year: 24,
          cvv: '264',
          billing_address: {
            line_1: '10880, Malibu Point, Malibu Central',
            zip_code: '90265',
            city: 'Malibu',
            state: 'CA',
            country: 'US',
          },
        },
      },
    },
  ],
};

