
// ---------- import Packs
import React, { useEffect } from 'react';

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

export const WebMap = (props: Tprops) => {
  // ---------- set Props
  const { args } = props;
  const { keyPlaces, pathInitMap, arrPins, arrFuncs } = props.pass;
  const strPathPins = arrPins.join();
  const strPathInit = pathInitMap.join();

  // ---------- set Watch Data
  const initialData = { lat: -23.5505199, lng: -46.63330939999999, zoom: 5 };
  const dataPins = useData(ct => pathSel(ct, strPathPins)) ?? [];
  const initPoint = useData(ct => pathSel(ct, strPathInit)) ?? initialData;
  const { lat, lng, zoom } = initPoint;

  // ---------- set Prepare Data Pins
  const coordenadas = dataPins.filter(i => {
    const itemCoords = i.localAddress.coords;
    const condReturn = typeof itemCoords === 'object';

    return condReturn && i;
  });

  const fnSetMap = () => {
    const objInitPoint = {
      center: { lat: Number(lat), lng: Number(lng) },
      zoom: Number(zoom),
    };

    const map = new window.google.maps.Map(
      document.getElementById('googleMap'),
      objInitPoint,
    );

    if (coordenadas) {
      // ------------ Loop Map Pins
      coordenadas.forEach(item => {
        const currPoint = item?.localAddress?.coords;
        const lat = Number(currPoint.lat);
        const lng = Number(currPoint.long);
        const position = { lat, lng };

        const marker = new window.google.maps.Marker({ position, map });

        // ------------ Set Loop Func
        marker.addListener('click', async () => {
          for (const currFunc of arrFuncs) await currFunc(item, args);
        });
      });
    }
  };

  useEffect(() => {
    // ---------- set Script Call Google Api
    const script = document.createElement('script');
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=` + keyPlaces;
    document.head.appendChild(script);

    // ---------- set Script Config Google Api
    script.onload = fnSetMap;
  }, [coordenadas]);

  return <div id="googleMap" style={{ width: '100%', height: '100%' }} />;
};

