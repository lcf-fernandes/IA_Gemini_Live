
// Visibilidade da Face Oposta - backfaceVisibility
type Tprops_backfaceVisibility = { pass: { arrayValue: any } };
export const backfaceVisibility = (props: Tprops_backfaceVisibility) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { backfaceVisibility: arrayValue };
};

// Cor de Fundo - backgroundColor
type Tprops_backgroundColor = { pass: { arrayValue: any } };
export const backgroundColor = (props: Tprops_backgroundColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }

  return { backgroundColor: arrayValue };
};

// Cor da Borda de Baixo - borderBottomColor
type Tprops_borderBottomColor = { pass: { arrayValue: any } };
export const borderBottomColor = (props: Tprops_borderBottomColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomColor: arrayValue };
};

// Arredondamento da Borda de Baixo(Final) - borderBottomEndRadius
type Tprops_borderBottomEndRadius = { pass: { arrayValue: any } };
export const borderBottomEndRadius = (props: Tprops_borderBottomEndRadius) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomEndRadius: arrayValue };
};

// Arredondamento da Borda de Baixo(Esquerda) - borderBottomLeftRadius
type Tprops_borderBottomLeftRadius = { pass: { arrayValue: any } };
export const borderBottomLeftRadius = (
  props: Tprops_borderBottomLeftRadius,
) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomLeftRadius: arrayValue };
};

// Arredondamento da Borda de Baixo(Direita) - borderBottomRightRadius
type Tprops_borderBottomRightRadius = { pass: { arrayValue: any } };
export const borderBottomRightRadius = (
  props: Tprops_borderBottomRightRadius,
) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomRightRadius: arrayValue };
};

// Arredondamento da Borda de Baixo(Início) - borderBottomStartRadius
type Tprops_borderBottomStartRadius = { pass: { arrayValue: any } };
export const borderBottomStartRadius = (
  props: Tprops_borderBottomStartRadius,
) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomStartRadius: arrayValue };
};

// Espessura da Borda(Baixo) - borderBottomWidth
type Tprops_borderBottomWidth = { pass: { arrayValue: any } };
export const borderBottomWidth = (props: Tprops_borderBottomWidth) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomWidth: arrayValue };
};

// Cor da Borda Geral - borderColor
type Tprops_borderColor = { pass: { arrayValue: any } };
export const borderColor = (props: Tprops_borderColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderColor: arrayValue };
};

// Cor do Fim da Borda - borderEndColor
type Tprops_borderEndColor = { pass: { arrayValue: any } };
export const borderEndColor = (props: Tprops_borderEndColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderEndColor: arrayValue };
};

// Cor da Borda Esquerda - borderLeftColor'
type Tprops_borderLeftColor = { pass: { arrayValue: any } };
export const borderLeftColor = (props: Tprops_borderLeftColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderLeftColor: arrayValue };
};

// Espessura da Borda (Esquerda) - borderLeftWidth
type Tprops_borderLeftWidth = { pass: { arrayValue: any } };
export const borderLeftWidth = (props: Tprops_borderLeftWidth) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderLeftWidth: arrayValue };
};

// Arredondamento da Borda - borderRadius
type Tprops_borderRadius = { pass: { arrayValue: any } };
export const borderRadius = (props: Tprops_borderRadius) => {
  let { arrayValue } = props.pass;

  return { borderRadius: arrayValue[0] };
};

// Cor da Borda Direita - borderRightColor
type Tprops_borderRightColor = { pass: { arrayValue: any } };
export const borderRightColor = (props: Tprops_borderRightColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderRightColor: arrayValue };
};

// Espessura da Borda (Direita) - borderRightWidth
type Tprops_borderRightWidth = { pass: { arrayValue: any } };
export const borderRightWidth = (props: Tprops_borderRightWidth) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderRightWidth: arrayValue };
};

// Cor do Início da Borda - borderStartColor
type Tprops_borderStartColor = { pass: { arrayValue: any } };
export const borderStartColor = (props: Tprops_borderStartColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderStartColor: arrayValue };
};

// Tipo de Borda - borderStyle
type Tprops_borderStyle = { pass: { arrayValue: any } };
export const borderStyle = (props: Tprops_borderStyle) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderStyle: arrayValue };
};

// Cor do Topo da Borda - borderTopColor
type Tprops_borderTopColor = { pass: { arrayValue: any } };
export const borderTopColor = (props: Tprops_borderTopColor) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopColor: arrayValue };
};

// Arredondamento da Borda de Cima(final) - borderTopEndRadius
type Tprops_borderTopEndRadius = { pass: { arrayValue: any } };
export const borderTopEndRadius = (props: Tprops_borderTopEndRadius) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopEndRadius: arrayValue };
};

// Arredondamento da Borda de Cima(Esquerda) - borderTopLeftRadius
type Tprops_borderTopLeftRadius = { pass: { arrayValue: any } };
export const borderTopLeftRadius = (props: Tprops_borderTopLeftRadius) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopLeftRadius: arrayValue };
};

// Arredondamento da Borda de Cima(Direita) - borderTopRightRadius
type Tprops_borderTopRightRadius = { pass: { arrayValue: any } };
export const borderTopRightRadius = (props: Tprops_borderTopRightRadius) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopRightRadius: arrayValue };
};

// Arredondamento da Borda de Cima(Início) - borderTopStartRadius
type Tprops_borderTopStartRadius = { pass: { arrayValue: any } };
export const borderTopStartRadius = (props: Tprops_borderTopStartRadius) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopStartRadius: arrayValue };
};

// Espessura da Borda(Cima) - borderTopWidth
type Tprops_borderTopWidth = { pass: { arrayValue: any } };
export const borderTopWidth = (props: Tprops_borderTopWidth) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopWidth: arrayValue };
};

// Espessura da Borda Geral - borderWidth
type Tprops_borderWidth = { pass: { arrayValue: any } };
export const borderWidth = (props: Tprops_borderWidth) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderWidth: arrayValue };
};

// Opacidade - opacity
type Tprops_Opacity = { pass: { arrayValue: any } };
export const Opacity = (props: Tprops_Opacity) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { opacity: arrayValue };
};

// FALTA: borderCurve, elevation e pointerEvents

