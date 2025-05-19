
// size
type Tprops_size = { pass: { A: any; B: any; C: any; D: any; args: any } };
export const size = (props: Tprops_size) => {
  const { A, B, C, D, args } = props.pass;

  console.log({ A });

  // return; aqui fica comentado por enquanto
};

// color
type Tprops_color = { pass: { A: any; B: any; C: any; D: any; args: any } };
export const color = (props: Tprops_color) => {
  const { A, B, C, D, args } = props.pass;

  console.log({ A });

  // return; aqui fica comentado por enquanto
};

// --------------------------------------
// --------------------------------------
// --------------------------------------

