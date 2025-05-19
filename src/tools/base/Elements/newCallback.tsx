
// F3 - new callback (newBase)
type Tprops_newCallback = { pass: { functions: any; B: any; C: any } };
export const newCallback =
  (props: Tprops_newCallback) =>
  async (...args: any) => {
    const { functions } = props.pass;

    // ---------- set Capsules Inputs

    // ---------- set Get Value Functions
    for (const currFunc of functions) {
      await currFunc(args[0]);
    }
  };

