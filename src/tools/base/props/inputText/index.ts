
// allowFontScaling
type Tprops_allowFontScaling = {
  pass: { condition: any };
};
export const allowFontScaling = (props: Tprops_allowFontScaling) => {
  const { condition } = props.pass;

  const toBoolean = condition.join() === 'true';

  return { allowFontScaling: toBoolean };
};

// autoCapitalize
type Tprops_autoCapitalize = {
  pass: { condition: any };
};
export const autoCapitalize = (props: Tprops_autoCapitalize) => {
  const { condition } = props.pass;

  console.log({ condition });

  return { autoCapitalize: condition };
};

// editable
type Tprops_editable = {
  pass: { condition: any };
};
export const editable = (props: Tprops_editable) => {
  const { condition } = props.pass;

  const toBoolean = condition.join() === 'true';

  return { editable: toBoolean };
};

// placeholder
type Tprops_placeholder = {
  pass: { text: any };
};
export const placeholder = (props: Tprops_placeholder) => {
  const { text } = props.pass;

  console.log({ text });

  return { placeholder: text };
};

// placeholderTextColor
type Tprops_placeholderTextColor = {
  pass: { color: any };
};
export const placeholderTextColor = (props: Tprops_placeholderTextColor) => {
  const { color } = props.pass;

  // console.log({ color });

  return { placeholderTextColor: color };
};

// onFocus
type Tprops_onFocus = { pass: { focus: any } };
export const onFocus = (props: Tprops_onFocus) => {
  const { focus } = props.pass;

  console.log({ focus });

  return { onFocus: focus };
};

// onBlur
type Tprops_onBlur = { pass: { func: any } };
export const onBlur = (props: Tprops_onBlur) => {
  const { func } = props.pass;

  console.log({ func });

  return { onBLur: func };
};

// multiline
type Tprops_p24 = { pass: { boolean: any } };
export const pt24 = (props: Tprops_p24) => {
  const { boolean } = props.pass;
  const parseBool = value => (value.includes('true') ? true : false);
  const booleanValue = parseBool(boolean);
  return { multiline: booleanValue };
};

// --------------------------------------
// --------------------------------------
// --------------------------------------

