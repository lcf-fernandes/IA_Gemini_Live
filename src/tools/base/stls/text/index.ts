
// Cor do Texto - color
type Tprops_color = { pass: { arrayValue: string[] } };
export const color = (props: Tprops_color) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { color: arrayStrings };
};

// Família da Fonte - fontFamily
type Tprops_fontFamily = { pass: { arrayValue: any } };
export const fontFamily = (props: Tprops_fontFamily) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { fontFamily: arrayStrings };
};

// Tamanho da Fonte - fontSize
type Tprops_fontSize = { pass: { arrayValue: any } };
export const fontSize = (props: Tprops_fontSize) => {
  const { arrayValue } = props.pass;

  const first = arrayValue[0];
  const condNum = typeof first === 'number';
  if (condNum) return { fontSize: first };
  const arrayStrings = arrayValue.join();
  console.warn({ first, condNum, arrayStrings });
  return { fontSize: arrayStrings };
};

// Estilização do Texto - fontStyle
type Tprops_fontStyle = { pass: { arrayValue: any } };
export const fontStyle = (props: Tprops_fontStyle) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { fontStyle: arrayStrings };
};

// Expessura da Fonte - fontWeight
type Tprops_fontWeight = { pass: { arrayValue: any } };
export const fontWeight = (props: Tprops_fontWeight) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { fontWeight: arrayStrings };
};

// Espaçamento Interno da Fonte(Android) - includeFontPadding
type Tprops_includeFontPadding = { pass: { arrayValue: any } };
export const includeFontPadding = (props: Tprops_includeFontPadding) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { includeFontPadding: arrayStrings };
};

// Variação da Fonte - fontVariant
type Tprops_fontVariant = { pass: { arrayValue: any } };
export const fontVariant = (props: Tprops_fontVariant) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { fontVariant: arrayStrings };
};

// #### Falta: letterSpacing ####
type Tprops_lineHeight = { pass: { arrayValue: any } };
export const lineHeight = (props: Tprops_lineHeight) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { letterSpacing: arrayStrings };
};

// Alinhamento do Texto - textAlign
type Tprops_textAlign = { pass: { arrayValue: any } };
export const textAlign = (props: Tprops_textAlign) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { textAlign: arrayStrings };
};

// Alinhamento Vertical do Texto - textAlignVertical
type Tprops_textAlignVertical = { pass: { arrayValue: any } };
export const textAlignVertical = (props: Tprops_textAlignVertical) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { textAlignVertical: arrayStrings };
};

// Cor da Decoração do Texto - textDecorationColor
type Tprops_textDecorationColor = { pass: { arrayValue: any } };
export const textDecorationColor = (props: Tprops_textDecorationColor) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { textDecorationColor: arrayStrings };
};

// Decoração da Linha do Texto - textDecorationLine
type Tprops_textDecorationLine = { pass: { arrayValue: any } };
export const textDecorationLine = (props: Tprops_textDecorationLine) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { textDecorationLine: arrayStrings };
};

// Estilo de Decoração de Texto - textDecorationStyle
type Tprops_textDecorationStyle = { pass: { arrayValue: any } };
export const textDecorationStyle = (props: Tprops_textDecorationStyle) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { textDecorationStyle: arrayStrings };
};

// Fonte - textShadowColor
type Tprops_textShadowColor = { pass: { arrayValue: any } };
export const textShadowColor = (props: Tprops_textShadowColor) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { textShadowColor: arrayStrings };
};

// Sombreamento do Texto - textShadowOffset
type Tprops_textShadowOffset = { pass: { arrayValue: any } };
export const textShadowOffset = (props: Tprops_textShadowOffset) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { textShadowOffset: arrayStrings };
};

// #### Falta: textShadowRadius ####

// Capitular - textTransForm
type Tprops_textTransForm = { pass: { arrayValue: any } };
export const textTransForm = (props: Tprops_textTransForm) => {
  const { arrayValue } = props.pass;

  const arrayStrings = arrayValue.join();

  return { textShadowRadius: arrayStrings };
};

// #### Falta: verticalAlign ####

// #### Falta: writingDirection ####

