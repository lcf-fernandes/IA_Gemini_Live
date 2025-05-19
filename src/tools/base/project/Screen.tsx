
// ---------- import Packs
import React from 'react';
import { View } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements } from '../project';
import { useRoutes } from '../../..';

type Tprops = {
  pass: {
    pathScreen: string;
    styles: any;
    screenElements: any;
    startFunctions: any;
    args: any;
  };
};

// Screen (newBase)
export const Screen = (props: Tprops) => {
  const { pathScreen } = props.pass;
  const currRoute = useRoutes(ct => ct.currRoute);
  const condShow = pathScreen === currRoute;

  return <>{condShow && <ScreenRender pass={props.pass} />}</>;
};

function ScreenRender(props: Tprops) {
  const { styles, screenElements, startFunctions, args } = props.pass;

  // ---------- call Functions (If Exists)
  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of startFunctions) await currFunc();
    };
    callFn().catch(err => console.log({ err }));
  }, []);

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(styles);

  // ---------- set Render
  return <View style={[stl]}>{mapElements(screenElements, args)}</View>;
}
