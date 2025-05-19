
// ---------- import Packs
import React from 'react';
import { View, ViewStyle } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements } from '../project';
import { useRoutes } from '../../..';

// Screen1
type Tprops = { pass: { A: string; B: any; C: any; D: any; args: any } };

export const Screen1 = (props: Tprops) => {
  const { A } = props.pass;
  const currRoute = useRoutes(ct => ct.currRoute);
  const condShow = A === currRoute;

  return <>{condShow && <Screen1Render pass={props.pass} />}</>;
};
function Screen1Render(props: Tprops) {
  const { A, B, C, D, args } = props.pass;

  // ---------- set Caps Inputs
  React.useEffect(() => {
    D.forEach(i => i(args));
  }, []);

  // ---------- set Vars (If Exists)
  const stl = getStlValues(B);

  // ---------- set Caps Default
  const stlDf: ViewStyle = {
    backgroundColor: '#101',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flex: 1,
  };

  // ---------- set Return
  return <View style={[stlDf, stl]}>{mapElements(C, args)}</View>;
}

