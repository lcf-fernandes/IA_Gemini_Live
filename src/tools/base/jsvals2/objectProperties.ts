
// ---------- prop urlEncoded
// --------------------------
type Tprops_urlEncoded = {
  pass: { objectProperties: {} };
};
export const urlEncoded = (props: Tprops_urlEncoded) => {
  const { objectProperties } = props.pass;

  return new URLSearchParams(objectProperties);
};

