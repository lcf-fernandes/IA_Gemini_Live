
// Alinhamento do Conteúdo - alignContent
type Tprops_alignContent = {
  pass: { arrayValue: any; args?: any };
};
export const alignContent = (props: Tprops_alignContent) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { alignContent: arrayValue };
};

// Alinhamento dos Itens - alignItems
type Tprops_alignItems = {
  pass: { arrayValue: any; args?: any };
};
export const alignItems = (props: Tprops_alignItems) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { alignItems: arrayValue };
};

// Alinhamento Próprio - alignSelf
type Tprops_alignSelf = {
  pass: { arrayValue: any; args?: any };
};
export const alignSelf = (props: Tprops_alignSelf) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { alignSelf: arrayValue };
};

// Dimensão - aspectRatio
type Tprops_aspectRatio = {
  pass: { arrayValue: any; args?: any };
};
export const aspectRatio = (props: Tprops_aspectRatio) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { aspectRatio: arrayValue };
};

// Espessura da Borda(Baixo) - borderBottomWidth
type Tprops_borderBottomWidth = {
  pass: { arrayValue: any; args?: any };
};
export const borderBottomWidth = (props: Tprops_borderBottomWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderBottomWidth: arrayValue };
};

// Espessura da Borda (Final) - borderEndWidth
type Tprops_borderEndWidth = {
  pass: { arrayValue: any; args?: any };
};
export const borderEndWidth = (props: Tprops_borderEndWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderEndWidth: arrayValue };
};

// Espessura da Borda (Esquerda) - borderLeftWidth
type Tprops_borderLeftWidth = {
  pass: { arrayValue: any; args?: any };
};
export const borderLeftWidth = (props: Tprops_borderLeftWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderLeftWidth: arrayValue };
};

// Espessura da Borda (Direita) - borderRightWidth
type Tprops_borderRightWidth = {
  pass: { arrayValue: any; args?: any };
};
export const borderRightWidth = (props: Tprops_borderRightWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderRightWidth: arrayValue };
};

// Espessura da Borda (Início) - borderStartWidth
type Tprops_borderStartWidth = {
  pass: { arrayValue: any; args?: any };
};
export const borderStartWidth = (props: Tprops_borderStartWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderStartWidth: arrayValue };
};

// Espessura da Borda(Cima) - borderTopWidth
type Tprops_borderTopWidth = {
  pass: { arrayValue: any; args?: any };
};
export const borderTopWidth = (props: Tprops_borderTopWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { borderTopWidth: arrayValue };
};

// Espessura da Borda Geral - borderWidth
type Tprops_borderWidth = {
  pass: { arrayValue: any; args?: any };
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

// Fundo - bottom
type Tprops_bottom = {
  pass: { arrayValue: any; args?: any };
};
export const bottom = (props: Tprops_bottom) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { bottom: arrayValue };
};

//   ##### Falta: columnGap ####

// Direção(iOS) - direction
type Tprops_direction = {
  pass: { arrayValue: any; args?: any };
};
export const direction = (props: Tprops_direction) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { direction: arrayValue };
};

// Exibição - display
type Tprops_display = {
  pass: { arrayValue: any; args?: any };
};
export const display = (props: Tprops_display) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { display: arrayValue };
};

// End - end
type Tprops_End = {
  pass: { arrayValue: any; args?: any };
};
export const end = (props: Tprops_End) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { end: arrayValue };
};

// Flex - flex
type Tprops_flex = {
  pass: { arrayValue: any; args?: any };
};
export const flex = (props: Tprops_flex) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { flex: arrayValue };
};

// FlexBasis - flexBasis
type Tprops_flexBasis = {
  pass: { arrayValue: any; args?: any };
};
export const flexBasis = (props: Tprops_flexBasis) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { flexBasis: arrayValue };
};

// FlexDirection - flexDirection
type Tprops_flexDirection = {
  pass: { arrayValue: any; args?: any };
};
export const flexDirection = (props: Tprops_flexDirection) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { flexDirection: arrayValue };
};

// FlexGrow - flexGrow
type Tprops_flexGrow = {
  pass: { arrayValue: any; args?: any };
};
export const flexGrow = (props: Tprops_flexGrow) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { flexGrow: arrayValue };
};

// FlexShrink - flexShrink
type Tprops_flexShrink = {
  pass: { arrayValue: any; args?: any };
};
export const flexShrink = (props: Tprops_flexShrink) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { flexShrink: arrayValue };
};

// FlexWrap - flexWrap
type Tprops_flexWrap = {
  pass: { arrayValue: any; args?: any };
};
export const flexWrap = (props: Tprops_flexWrap) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { flexWrap: arrayValue };
};

//   ##### Falta: gap ####

// Altura - height
type Tprops_height = {
  pass: { arrayValue: any; args?: any };
};
export const height = (props: Tprops_height) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }

  return { height: arrayValue };
};

// Ajuste do Conteúdo - justifyContent
type Tprops_justifyContent = {
  pass: { arrayValue: any; args?: any };
};
export const justifyContent = (props: Tprops_justifyContent) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { justifyContent: arrayValue };
};

// Esquerda - left
type Tprops_left = {
  pass: { arrayValue: any; args?: any };
};
export const left = (props: Tprops_left) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { left: arrayValue };
};

// Margem Geral - margin
type Tprops_Margin = {
  pass: { arrayValue: any; args?: any };
};
export const margin = (props: Tprops_Margin) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { margin: arrayValue };
};

// Margem de Baixo - marginBottom
type Tprops_marginBottom = {
  pass: { arrayValue: any; args?: any };
};
export const marginBottom = (props: Tprops_marginBottom) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { marginBottom: arrayValue };
};

// Margem Final - marginEnd
type Tprops_marginEnd = {
  pass: { arrayValue: any; args?: any };
};
export const marginEnd = (props: Tprops_marginEnd) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { marginEnd: arrayValue };
};

// Margem Horizontal - marginHorizontal
type Tprops_marginHorizontal = {
  pass: { arrayValue: any; args?: any };
};
export const marginHorizontal = (props: Tprops_marginHorizontal) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { marginHorizontal: arrayValue };
};

// Margem da Esquerda - marginLeft
type Tprops_marginLeft = {
  pass: { arrayValue: any; args?: any };
};
export const marginLeft = (props: Tprops_marginLeft) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { marginLeft: arrayValue };
};

// Margem da Direita - marginRight
type Tprops_marginRight = {
  pass: { arrayValue: any; args?: any };
};
export const marginRight = (props: Tprops_marginRight) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { marginRight: arrayValue };
};

// Margem Início - marginStart
type Tprops_marginStart = {
  pass: { arrayValue: any; args?: any };
};
export const marginStart = (props: Tprops_marginStart) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { marginStart: arrayValue };
};

// Margem de Cima - marginTop
type Tprops_marginTop = {
  pass: { arrayValue: any; args?: any };
};
export const marginTop = (props: Tprops_marginTop) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { marginTop: arrayValue };
};

// Margem Vertical - marginVertical
type Tprops_marginVertical = {
  pass: { arrayValue: any; args?: any };
};
export const marginVertical = (props: Tprops_marginVertical) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { marginVertical: arrayValue };
};

// Altura Máxima - maxHeight
type Tprops_maxHeight = {
  pass: { arrayValue: any; args?: any };
};
export const maxHeight = (props: Tprops_maxHeight) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { maxHeight: arrayValue };
};

// Largura Máxima - maxWidth
type Tprops_maxWidth = {
  pass: { arrayValue: any; args?: any };
};
export const maxWidth = (props: Tprops_maxWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { maxWidth: arrayValue };
};

// Altura Mínima - minHeight
type Tprops_minHeight = {
  pass: { arrayValue: any; args?: any };
};
export const minHeight = (props: Tprops_minHeight) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { minHeight: arrayValue };
};

// Largura Mínima - minWidth
type Tprops_minWidth = {
  pass: { arrayValue: any; args?: any };
};
export const minWidth = (props: Tprops_minWidth) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { minWidth: arrayValue };
};

// Excesso - overflow
type Tprops_overflow = {
  pass: { arrayValue: any; args?: any };
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

// Espaço Interno Geral - padding
type Tprops_padding = {
  pass: { arrayValue: any; args?: any };
};
export const padding = (props: Tprops_padding) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { padding: arrayValue };
};

// Espaço Interno de Baixo - paddingBottom
type Tprops_paddingBottom = {
  pass: { arrayValue: any; args?: any };
};
export const paddingBottom = (props: Tprops_paddingBottom) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { paddingBottom: arrayValue };
};

// Espaço Interno Final - paddingEnd
type Tprops_paddingEnd = {
  pass: { arrayValue: any; args?: any };
};
export const paddingEnd = (props: Tprops_paddingEnd) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { paddingEnd: arrayValue };
};

// Espaço Interno Horizontal - paddingHorizontal
type Tprops_paddingHorizontal = {
  pass: { arrayValue: any; args?: any };
};
export const paddingHorizontal = (props: Tprops_paddingHorizontal) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { paddingHorizontal: arrayValue };
};

// Espaço Interno da Esquerda - paddingLeft
type Tprops_paddingLeft = {
  pass: { arrayValue: any; args?: any };
};
export const paddingLeft = (props: Tprops_paddingLeft) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { paddingLeft: arrayValue };
};

// Espaço Interno da Direita - paddingRight
type Tprops_paddingRight = {
  pass: { arrayValue: any; args?: any };
};
export const paddingRight = (props: Tprops_paddingRight) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { paddingRight: arrayValue };
};

// Espaço Interno Inicial - paddingStart
type Tprops_paddingStart = {
  pass: { arrayValue: any; args?: any };
};
export const paddingStart = (props: Tprops_paddingStart) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { paddingStart: arrayValue };
};

// Espaço Interno de Cima - paddingTop
type Tprops_paddingTop = {
  pass: { arrayValue: any; args?: any };
};
export const paddingTop = (props: Tprops_paddingTop) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { paddingTop: arrayValue };
};

// Espaço Interno Vertical - paddingVertical
type Tprops_paddingVertical = {
  pass: { arrayValue: any; args?: any };
};
export const paddingVertical = (props: Tprops_paddingVertical) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { paddingVertical: arrayValue };
};

// Posição - position
type Tprops_position = {
  pass: { arrayValue: any; args?: any };
};
export const position = (props: Tprops_position) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { position: arrayValue };
};

// Direita - right
type Tprops_right = {
  pass: { arrayValue: any; args?: any };
};
export const right = (props: Tprops_right) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { right: arrayValue };
};

//   ##### Falta: rowGap ####

// Início - start
type Tprops_start = {
  pass: { arrayValue: any; args?: any };
};
export const start = (props: Tprops_start) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { start: arrayValue };
};

// Topo - top
type Tprops_Top = {
  pass: { arrayValue: any; args?: any };
};
export const top = (props: Tprops_Top) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { top: arrayValue };
};

// Largura - width
type Tprops_width = {
  pass: { arrayValue: any; args?: any };
};
export const width = (props: Tprops_width) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }

  return { width: arrayValue };
};

// Empilhamento - zIndex
type Tprops_zIndex = {
  pass: { arrayValue: any; args?: any };
};
export const zIndex = (props: Tprops_zIndex) => {
  let { arrayValue, args } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.join();

    const isNumber = !isNaN(arrayValue);
    if (isNumber) arrayValue = Number(arrayValue);
  }
  return { zIndex: arrayValue };
};

