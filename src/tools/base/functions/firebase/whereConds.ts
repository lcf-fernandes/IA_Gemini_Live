
type Tprops = { args: any; pass: { arrStrings: string[] } };

export const whereConds = (props: Tprops) => {
  // ---------- set Props
  const { arrStrings } = props.pass;
  console.log({ arrStrings });

  const objReturn = {
    field: arrStrings[0] ?? 'xx',
    operator: arrStrings[1] ?? '==',
    value: arrStrings[2] ?? 'xx',
  };

  console.log('whereCond', { objReturn });
  return objReturn;
};

