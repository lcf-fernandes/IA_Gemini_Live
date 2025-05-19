
// ---------------- toggleVar
// --------------------------
type Tprops_toggleVar = { pass: { varToToggle: any; args: any } };
export const toggleVar = (props: Tprops_toggleVar) => {
  const { varToToggle, args } = props.pass;

  return varToToggle;
};

