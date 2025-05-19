
const css =
  'color: purple; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';

type Tprops_condition = {
  args: any;
  pass: {
    conditionPath: any;
    expectedValue: any;
    functionsTrue: any;
    functionsFalse: any;
  };
};
export const condition = async (props: Tprops_condition) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  const { conditionPath, expectedValue, functionsTrue, functionsFalse } = pass;

  // ---------- set VarPath and expectedVal as a single string
  const varPath = conditionPath.join();
  const newVal = expectedValue.join();

  // ---------- set Conditional Test
  let conditionValue = false;
  if (conditionPath.length > 0) {
    conditionValue = varPath === newVal;
  }
  console.log('%cCondition', css);
  console.log({ varPath }, '===', { newVal });
  console.log({ conditionValue });

  if (conditionValue) {
    for (const currFunc of functionsTrue) await currFunc(args);
  }
  if (!conditionValue) {
    for (const currFunc of functionsFalse) await currFunc(args);
  }
};

