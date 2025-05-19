
// ---------- import Packs
import MapView, { Marker } from 'react-native-maps';

// ---------- import Local Tools
import { useData } from '../../..';
import { pathSel } from '../../base/project';

type Tprops = {
  pass: {
    keyPlaces: string;
    pathInitMap: string[];
    arrPins: string[];
    arrFuncs: any[];
  };
  args?: any;
};

export const CustomMarkers = (props: Tprops) => {
  const { arrPins, arrFuncs } = props.pass;

  const arrMarkers = useData(ct => pathSel(ct, arrPins.join()));

  const LoopMarkers = arrMarkers.map((marker, index) => {
    const btnSetItem = async () => {
      for (const currFunc of arrFuncs) await currFunc(marker);
    };

    const validMarker = marker && typeof marker?.localAddress === 'object';

    return validMarker ? (
      <Marker
        key={index}
        coordinate={{
          latitude: Number(marker.localAddress?.coords?.lat),
          longitude: Number(marker.localAddress?.coords?.long),
        }}
        title={marker?.localName}
        onPress={btnSetItem}
      />
    ) : (
      <></>
    );
  });
  return <>{LoopMarkers}</>;
};

