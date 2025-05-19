
type Tprops_funcGroup = {
  args: any;
  pass: { arrFunctions: any[]; trigger: string };
};
export const funcGroup = async (props: Tprops_funcGroup) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { arrFunctions, trigger } = pass;

  // ---------- set Execute Funcs
  //   for (const currFunc of arrFunctions) await currFunc(args);

  return { trigger, arrFunctions };
};
