
// Desativado - disabled
type Tprops_disabled = {
  pass: { boolean: any };
};
export const disabled = (props: Tprops_disabled) => {
  const { boolean } = props.pass;

  const toBoolean = boolean.join() === 'true';

  return { disabled: toBoolean };
};

// Opacidade Ativa - activeOpacity
type Tprops_activeOpacity = { pass: { activeOpacity: any } };
export const activeOpacity = (props: Tprops_activeOpacity) => {
  const { activeOpacity } = props.pass;

  console.log({ activeOpacity });

  return { activeOpacity: activeOpacity };
};

// Apple Tv Parallax - tvParallaxProperties
type Tprops_tvParallaxProperties = { pass: { tvParallaxProperties: any } };
export const tvParallaxProperties = (props: Tprops_tvParallaxProperties) => {
  const { tvParallaxProperties } = props.pass;

  console.log({ tvParallaxProperties });

  // return; aqui fica comentado por enquanto
};

// Foco preferencial da TV - hasTVPreferredFocus
type Tprops_hasTVPreferredFocus = { pass: { hasTVPreferredFocus: any } };
export const hasTVPreferredFocus = (props: Tprops_hasTVPreferredFocus) => {
  const { hasTVPreferredFocus } = props.pass;

  console.log({ hasTVPreferredFocus });

  // return; aqui fica comentado por enquanto
};

// Próximo Foco para Baixo - nextFocusDown
type Tprops_nextFocusDown = { pass: { nextFocusDown: any } };
export const nextFocusDown = (props: Tprops_nextFocusDown) => {
  const { nextFocusDown } = props.pass;

  console.log({ nextFocusDown });

  // return; aqui fica comentado por enquanto
};

// Próximo Foco à Esquerda - nextFocusLeft
type Tprops_nextFocusLeft = { pass: { nextFocusLeft: any } };
export const nextFocusLeft = (props: Tprops_nextFocusLeft) => {
  const { nextFocusLeft } = props.pass;

  console.log({ nextFocusLeft });

  // return; aqui fica comentado por enquanto
};

// Próximo Foco à Direita - nextFocusRight
type Tprops_nextFocusRight = { pass: { nextFocusRight: any } };
export const nextFocusRight = (props: Tprops_nextFocusRight) => {
  const { nextFocusRight } = props.pass;

  console.log({ nextFocusRight });

  // return; aqui fica comentado por enquanto
};

// Próximo Foco - nextFocusUp
type Tprops_nextFocusUp = { pass: { nextFocusUp: any } };
export const nextFocusUp = (props: Tprops_nextFocusUp) => {
  const { nextFocusUp } = props.pass;

  console.log({ nextFocusUp });

  // return; aqui fica comentado por enquanto
};

// --------------------------------------
// --------------------------------------
// --------------------------------------

