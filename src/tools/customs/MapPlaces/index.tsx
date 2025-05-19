
// ---------- import React Packs
// ---------- import Packs
import React from 'react';
import { Platform, Text } from 'react-native';

// ---------- import Local Tools
import { importRender } from './importRender';
import { WebMap } from './WebMap';

type Tprops = {
  pass: {
    keyPlaces: string;
    pathInitMap: string[];
    arrPins: string[];
    arrFuncs: any[];
  };
  args?: any;
};

export const MapPlaces = (props: Tprops) => {
  const condWeb = Platform.OS === 'web';

  type Trender1 = null | React.JSX.Element;
  const [SttComp, SetComp] = React.useState<Trender1>(null);

  const getErr = err => {
    const err2 = JSON.stringify(err.message);
    SetComp(() => <Text>{err2}</Text>);
  };

  React.useEffect(() => {
    // ---------- set WEB Component
    if (condWeb) SetComp(<WebMap pass={props.pass} args={props.args} />);

    // ---------- set Native Component
    if (!condWeb) {
      const map = require('react-native-maps');

      SetComp(importRender({ res: map, props }));
    }
  }, []);

  return <>{SttComp}</>;
};

