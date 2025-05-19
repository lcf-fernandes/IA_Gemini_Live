
// ---------- import Packs
import React from 'react';
import { ViewStyle } from 'react-native';

// ---------- import Local Tools
import { regionFrom } from './regionFrom';
import { CustomMarkers } from './CustomMarkers';

type Tres =
  typeof import('/workspace/flaxboll/C_preview/node_modules/react-native-maps/lib/index');

type Tprops = {
  res: Tres;
  props: any;
};

export const importRender = ({ res, props }: Tprops) => {
  const stlAllArea: ViewStyle = { width: '100%', height: '100%' };
  console.warn({ props });

  const initArea = regionFrom(-23.5874064, -46.6577302, 60);
  const MapView = res.default;

  return () => {
    return (
      <MapView
        style={stlAllArea}
        initialRegion={initArea}
        showsTraffic={false}
        showsUserLocation={false}
        showsMyLocationButton={false}
      >
        <CustomMarkers pass={props.pass} />
      </MapView>
    );
  };
};

