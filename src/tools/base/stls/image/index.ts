
// Visibilidade da Face Oposta - backfaceVisibility
type Tprops_backfaceVisibility = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const backfaceVisibility = (props: Tprops_backfaceVisibility) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { backfaceVisibility: arrayValue };
};

// Cor de Fundo - backgroundColor
type Tprops_backgroundColor = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const backgroundColor = (props: Tprops_backgroundColor) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { backgroundColor: arrayValue };
};

// Arredondamento da Borda de Baixo(Esquerda) - borderBottomLeftRadius
type Tprops_borderBottomLeftRadius = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const borderBottomLeftRadius = (
  props: Tprops_borderBottomLeftRadius,
) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomLeftRadius: arrayValue };
};

// Borda Arredondada (Baixo Direita) - borderBottomRightRadius
type Tprops_borderBottomRightRadius = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const borderBottomRightRadius = (
  props: Tprops_borderBottomRightRadius,
) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomRightRadius: arrayValue };
};

// Cor da Borda da Imagem - borderColor
type Tprops_borderColor = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const borderColor = (props: Tprops_borderColor) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderColor: arrayValue };
};

// Arredondamento da Borda - borderRadius
type Tprops_borderRadius = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const borderRadius = (props: Tprops_borderRadius) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderRadius: arrayValue };
};

// Arredondamento da Borda de Cima(Esquerda) - borderTopLeftRadius
type Tprops_borderTopLeftRadius = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const borderTopLeftRadius = (props: Tprops_borderTopLeftRadius) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopLeftRadius: arrayValue };
};

// Borda Arredondada (Cima Direita) - borderTopRightRadius
type Tprops_borderTopRightRadius = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const borderTopRightRadius = (props: Tprops_borderTopRightRadius) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopRightRadius: arrayValue };
};

// Espessura da Borda Geral - borderWidth
type Tprops_borderWidth = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const borderWidth = (props: Tprops_borderWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderWidth: arrayValue };
};

// Opacidade - opacity
type Tprops_opacity = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const opacity = (props: Tprops_opacity) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { opacity: arrayValue };
};

// Excesso - overflow
type Tprops_overflow = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const overflow = (props: Tprops_overflow) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { overflow: arrayValue };
};

// Cor de Preenchimento de Esquinas - overlayColor
type Tprops_overlayColor = {
  pass: { arrayValue: any; B: any; C: any; D: any; args: any };
};
export const overlayColor = (props: Tprops_overlayColor) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { overlayColor: arrayValue };
};

// Redimensionamento de Imagem - resizeMode
type Tprops_resizeMode = {
  pass: { arrayValue: any; args?: any };
};
export const resizeMode = (props: Tprops_resizeMode) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { resizeMode: arrayValue };
};

